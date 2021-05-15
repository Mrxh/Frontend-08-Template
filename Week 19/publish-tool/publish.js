let http = require('http')
let archiver = require('archiver')
let child_process = require('child_process')
let querystring = require('querystring')

child_process.exec(`open https://github.com/login/oauth/authorize?client_id=Iv1.83977135c3cbe0ae`)

http.createServer(function(request, response) {
  let matched = request.url.match(/^\/\?([\s\S]+)$/)
  if (!matched) return response.end()

  let query = querystring.parse(matched[1])
  publish(query.token)
  response.end()
}).listen(8083)

function publish(token) {
  let request = http.request({
    hostname: '127.0.0.1',
    port: 8082,
    method: 'post',
    path: `/publish?token=${token}`,
    headers: {
      'Content-Type': 'application/octet-stream'
    }
  }, response => {
  })

  const archive = archiver('zip', {
    zip: { level: 9 }
  })

  archive.directory('./sample/', false)
  archive.finalize()
  archive.pipe(request)
}