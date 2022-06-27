const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//configure creating mysql connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password1234'
})

//Executing Connection
connection.connect((err) => {
    if (err) {
        return console.error('error' + err.message)
    } console.log('Connected to the MySQL server.')
})

//static file
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/css', express.static(__dirname + 'public/css'))

//set views since we set html to an ejs file
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req,res) => {
    res.render('index')
})

app.listen(port, () => {
    console.info(`listening on port ${port}`);
})