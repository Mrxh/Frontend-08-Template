let http = require('http')
let https = require('https')
let unzipper = require('unzipper')
let querystring = require('querystring')

function auth(request, response) {
  let query = querystring.parse(request.url.match(/^\/auth\?([\s\S]+)$/)[1])

  getToken(query.code, function(info) {
    response.write(`<a href='http://localhost:8083/?token=${info.access_token}'>publish</a>`)
    response.end()
  })
}
function getToken(code, callback) {
  let path = `/login/oauth/access_token?code=${code}&client_id=Iv1.83977135c3cbe0ae&client_secret=272ff700af73bf8319ef503ec8eb87889daebb02`
  let request = https.request({
    hostname: 'github.com',
    path,
    port: 443,
    method: 'POST'
  }, function(response) {
    let body = ''
    response.on('data', chunk => {
      body += (chunk.toString())
    })
    response.on('end', chunk => {
      callback(querystring.parse(body))
    })
  })

  request.end()
}

function publish(request, response) {
  let query = querystring.parse(request.url.match(/^\/publish\?([\s\S]+)$/)[1])
  if (query.token) {
    getUser(query.token, info => {
      if (info.login === 'xh') {
        request.pipe(unzipper.Extract({ path: '../server/public/' }))
        request.on('end', function() {
          response.end('success!')
        })
      }
    })
  }
}

function getUser(token, callback) {
  let request = https.request({
    hostname: 'api.github.com',
    path: `/user`,
    port: 443,
    method: 'GET',
    headers: {
      Authorization: `token ${token}`,
      "User-Agent": 'my-publish-tools'
    }
  }, function(response) {
    let body = ''
    response.on('data', chunk => {
      body += (chunk.toString())
    })
    response.on('end', () => {
      callback(JSON.parse(body))
    })
  })

  request.end()
}

http.createServer(function(request, response) {
  if (request.url.match(/^\/auth\?/))
    return auth(request, response)
  if (request.url.match(/^\/publish\?/))
    return publish(request, response)
}).listen(8082)