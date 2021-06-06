const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Defining path for static and views
const publicPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

//Serving Views and View Engine
app.set('views',viewPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialPath)

//Serving static files
app.use(express.static(publicPath))


app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Poornima Babu.'
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        name: 'Poornima Babu.',
        title: 'About'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        title: 'Help',
        name: 'Poornima Babu.'
    })
})

app.get('/help/*', (req,res) => {
    res.render('404help', {
        name: 'Poornima Babu.',
        title: '404',
        errormessage: 'Help article not found!'
    })
})

app.get('*', (req,res) => {
    res.render('404page', {
        name: 'Poornima Babu.',
        title: '404',
        errormessage: 'Page not found!'
    })
})


app.listen(3000, () => {
    console.log('Server running on port 3000.')
})