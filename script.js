const fs = require("fs")

fs.writeFile('D:/message.txt', 'Hello Node.js', 'utf8', (err)=>{if (err)throw err;}); 
let allfiles = []
fs.readdir("D:/",(err,data)=>{
    if(err)throw err;
     data.forEach((item)=>console.log(item))
    
})
allfiles.forEach((data)=>console.log(data))


// let date = new Date()
// let fileName = `${date.getFullYear()}-${(date.getMonth()+1).toString()}-${date.getDate()}-${date.getHours()}hrs-${date.getMinutes()}mins-${date.getSeconds()}secs`
// fs.writeFile(`D:/${fileName.toString()}.txt`,`${date}`,'utf8',(err)=>{
//     if(err)throw err;
//     console.log("File Created Successfully")
// })

