const http = require('http')

const weatherData = http.get('http://api.weatherstack.com/current?access_key=4f8356019d1d6d5b96e3dde9df5857f3&query=Chennai')

console.log(weatherData)