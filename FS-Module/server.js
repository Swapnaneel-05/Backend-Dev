//fs module
const fs = require("fs");

console.log("end")

fs.readFile('./log.txt', 'utf-8', (err,data1) =>{
    if(err) throw err
    console.log(data)
})

const data1 = fs.readFileSync('./log.txt', 'utf-8');
console.log(data)

fs.writeFile('./output.txt', data, (err)=>{
    if(err) throw err
    console.log("file write success")
})


fs.appendFile('./output.txt', "n\this is new text", (err)=>{
    if(err) throw err
    console.log("text id added")
})


console.log("first")    

//task
//readLogFile()
//writeLogFile("new log data")
//appendLogFile("this is appended log data")
//deleteLogFile()







//path module
const path= require('path')
const absPath = path.resolve("./log.txt") 

console.log(absPath)
console.log(__dirname)
console.log(path.basename('./log.txt'))
console.log(path.extname('./log.txt'))

const joinPath = path.join(__dirname, "log.txt")
console.log(joinPath)

const pathParse = path.parse(joinPath)
console.log(pathParse)

const filePath = path.join(__dirname,"log.txt")

const data = fs.readFileSync(filePath,'utf-8');

console.log(data)





// server module
const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url)
    console.log(req.method)

    res.writeHead(200, {"content-type": "text/html"})
    res.write("<h1> welcome </h1>")
    res.end()

})

server.listen(3000,()=>{
    console.log("server is running",3000)
})
