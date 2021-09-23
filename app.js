const express = require('express')

// App
const app = express()
const port = 3000

// Listen for Request
app.listen(port);

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    res.send('<p>About Page</p>');
})

app.use((req, res) => {
    res.send('<p>404</p>')
})