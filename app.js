const express = require('express');
const cookieParser = require('cookie-parser');
const rate_limit = require('./rate_limit');
const app = express();

app.listen(3000, () => console.log('listening at localhost:3000/'));

app.use(cookieParser());
app.use(rate_limit);

app.get('/',  (req,res) =>{
    res.send("Testing application");
});
