const express = require("express"); 
const path = require("path");
const app = express(); 
var hbs = require('hbs'); 

const publicdirectory = path.join(__dirname,"./public") 
app.use(express.static(publicdirectory));
app.use(express.urlencoded({extended:false})); 

app.use(express.json());
app.set('view engine','hbs'); 

hbs.registerPartials(__dirname +'/views/partials'); 
hbs.registerHelper('ifeq', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    });
app.use('/',require('./routes/pages'));

 
app.listen(3001,()=>
console.log("server started at 3001")
)