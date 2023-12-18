const fs=require("fs")

fs.writeFile("welcome.txt","hello node",(err)=>{
    if (err){
        console.log(err);}
        else{
            console.log ('file created successfully')
        }
    }
);

fs.readFile('hello.txt','utf8',(err,data)=>{
    if (err){
        console.log(err)

    }else {console.log( data)}
})