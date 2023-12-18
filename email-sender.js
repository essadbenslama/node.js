const nodemailer= require('nodemailer')

let mailSender = nodemailer.createTransport({
    service:"gmail",
    auth:{
     user: "myemail@gmail.com",
    pass: "mypassword",},
})

let mailOption={
    from:"myemail@gmail.com",
    to:"my2email@gmail.com",
    subject: "sending from essad",
    text:"hello there"};

    mailSender.sendMail(mailOption,(err,info)=>{
if (err){
    console.log(err);

}else{console.log(info.response)}

    })
