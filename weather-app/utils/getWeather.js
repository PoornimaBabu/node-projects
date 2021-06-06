const request = require('request')

const getWeather = (latitude, longitude, callback) => {
    weatherURL = 'http://api.weatherstack.com/current?access_key=4f8356019d1d6d5b96e3dde9df5857f3&query=' + latitude + ',' + longitude
    request({url: weatherURL, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to Weather Services!', undefined)
        } else if(body.error){
            callback('Please enter valid location!', undefined)
        } else{
            callback('', {
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                description: body.current.weather_descriptions[0]
            })
        }
    })
}

module.exports = getWeather