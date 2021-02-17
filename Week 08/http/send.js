const net = require('net')
class Request{
    constructor(options){
        this.method = options.method || 'GET';
        this.host = options.host;
        this.port = options.port || 80;
        this.path = options.path || '/';
        this.body = options.body || {};
        this.headers = options.headers || {};
        if(!this.headers['Content-Type']){
            this.headers['Content-Type'] = 'application-x-www-form-urlencoded'
        }

        if(this.headers['Content-Type'] === 'application/json'){
            this.bodyText = JSON.stringify(this.body)
        }else if(this.headers['Content-Type'] === 'application-x-www-form-urlencoded'){
            this.bodyText = Object.keys(this.body).map(key=>`${key}=${encodeURIComponent(this.body[key])}`).join('&')
        }

        this.headers['Content-length'] = this.bodyText.length;
    }

    send(connection){
        return new Promise((resolve,reject)=>{
            let parser = new ResponseParser()
            resolve('')
        })
    }
}

class ResponseParser{
    constructor(){
    }

    receive(string){
        for(let i=0;i<string.length;i++){
            this.receiveChar(string.charAt(i))
        }
    }    
    receiveChar(){
    }
}

void async function(){
    let request = new Request({
        method: 'POST',
        host: '127.0.0.1',
        port: '8080',
        path: '/',
        headers:{
            ['x-Foo2']: 'customed'
        },
        body:{
            name: 'xh'
        }
    })

    let response = request.send()
    
    console.log(response)
}();