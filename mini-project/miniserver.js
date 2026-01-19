const http = require("http")
const fs = require("fs")
const logStream=fs.createWriteStream("server.log",{flags:"a"});
const server=http.createServer((req,res)=>{
    const logEntry=`${new Date().toISOString()} - ${req.method} ${req.url}\n`;
    logStream.write(logEntry);
    if(req.url === "/return"){
        res.writeHead(200,{
            "content-type": "text/plain"
        })
        res.end("this is running");
    }
    else if(req.url === "/user" && req.method === "GET"){
        res.writeHead(200,{"Content-type" : "application/json"});
        const user = {name: "Swapnaneel", age: "20"}
        res.end(JSON.stringify(user))
    }
    else if(req.url === "/uppercase" && req.method === "POST"){
        let data='';
        req.on('data',(chunk)=>{
            data+=chunk.toString();
        });

        req.on("end",()=>{
            res.writeHead(200, {
                "Content-type" : "text/plain"
            })
            res.end(JSON.stringify({data: data.toUpperCase()}))
        })
    }
    else if(req.url === "/vowel" && req.method === "POST"){
        let body='';
        req.on('data',(chunk)=>{
            body+=chunk.toString();
        });

        req.on("end",()=>{
            res.writeHead(200, {
                "Content-type" : "text/plain"
            })
            res.end(JSON.stringify({data: body.replaceAll(/[aeiouAEIOU]/g,'*')}))
        })
    }
    
    else{
            res.writeHead(404,{
                "Content-type" : "text/html"
            })
            res.end("404 not found")
    }
})
server.listen(3000,()=>{
    console.log("server is running")
})