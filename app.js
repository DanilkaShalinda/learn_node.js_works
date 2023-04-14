const http = require('http');
const express = require('express');
const app = express();


const server =http.createServer(app);
app.use((req,res,next)=>{
    console.log('Hiii we are in the middleware !');
    next();
})

app.use('/',(req,res, next)=>{
    console.log('In Another Middleware 1');

    res.redirect('/second')


})
app.use('/second',(req,res, next)=>{

    console.log('In Another Middleware 2');
    res.send('<h1> Hello How Are You 2?</h1>');
})

server.listen(5000);
