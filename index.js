const express = require('express');
const { route } = require('./routes');
const app = express();
const port = 8000;

// use express router
app.use('/', require('./routes'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(error) {
    if(error) {
        console.log(`Error in running the server : ${error}`);
        return;
    }
    console.log(`Server is running on port: ${port}`)
})