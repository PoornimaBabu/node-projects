const path = require('path')
const express = require('express')

const app = express()

//Defining path for static and views
const publicPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')

//Serving Views and View Engine
app.set('views',viewPath)
app.set('view engine', 'hbs')

//Serving static files
app.use(express.static(publicPath))


app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather App'
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'Created by Poornima.'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        title: 'For help contact Poornima..'
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000.')
})