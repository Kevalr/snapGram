const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

const db = require("./config/mongoose");
db();

app.use(express.urlencoded());
app.use(cookieParser());

//Seeting up the static files
app.use(express.static('./assets'));

app.use(expressLayouts);
// Extract style and scripts from the sub pages and put it into layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


// use express router
app.use('/', require('./routes'));

// setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(error) {
    if(error) {
        console.log(`Error in running the server : ${error}`);
        return;
    }
    console.log(`Server is running on port: ${port}`)
})