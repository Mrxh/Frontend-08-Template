const http = require('http')

http.createServer((req,res)=>{
    let body = []
    req.on('error',err=>{
        console.error(err)
    }).on('data',chunk=>{
        body.push(chunk)
    }).on('end',()=>{
        body = Buffer.concat(body).toString();
        console.log('body:',body)
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(`<html maa=a>
<head>
    <style>
        body div #img-id{
            width:100px;
            background-color:red;
        }
        body div img{
            width:30px;
            background-color:blue;
        }
    </style>
</head>
<body>
    <div>
        <img id="img-id"/>
        <img />
    </div>
</body>
</html>`);
    })
}).listen(8088)

console.log('server start')