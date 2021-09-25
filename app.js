const express = require('express')

// App
const app = express()
const port = 3000;

// View Engine
app.set('view engine', 'ejs');

// Listen for Request
app.listen(port);

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
})

app.get('/login', (req, res) => {
    res.render('login', {title: 'Login'});
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
})

app.get('/contact', (req, res) => {
    res.render('contact', {title: 'Help'});
})

app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
})

