const express = require ('express');

const app = express();
const path = require ('path');
const PORT = process.env.PORT ||4000;
const HOST= process.env.HOST || 'localhost';

app.use (express.static(path.resolve(__dirname, './public')));

app. get ('/', (req, res) => {;
    res.sendFile (path.resolve(__dirname, './views/home.html'))
});



app.listen (PORT, () => {
    console.log (`Server running at http://${HOST}:${PORT}/`);
});