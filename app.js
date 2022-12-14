const express = require('express')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs');

app.use(express.static("public"));

const port = 3000

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})