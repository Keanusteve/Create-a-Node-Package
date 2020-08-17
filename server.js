const express =require('express'); //common JS import 
const app = express(); //created an express server 

var colors = require('colors/safe');
// console.log('Hello World');
//Routes / Endpoints 
app.get("/", (request, response) => {
    response.send("Server Start Test.green!");
});


//start the server
app.listen(3000, ( )=> {
console.log(colors.bgRed("Hello World!"));
});


console.log(colors.bgCyan('HELLO WORLD!'));


 
console.log(colors.green('I AM GREEN LIKE THE HULK!')); 

