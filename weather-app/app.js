const geoCode = require('./utils/geoCode')
const getWeather = require('./utils/getWeather')

if(!process.argv[2]){
    return console.log("Please enter valid location!")
}

geoCode(process.argv[2],(error,{location, latitude, longitude} = {})=>{
    if(error){
        return console.log('Error:',error)
    }
     //getWeather(data.latitude, data.longitude, (error,resp) =>{
     getWeather(latitude, longitude, (error,{temperature, feelslike, description} = {}) =>{
         if(error){
            return console.log('Error:',error)
         }
        console.log('Location:', location)
        console.log(description + '. Temperature is ' + temperature + ' celcius' + '. But feels like ' + feelslike +  '.')
    })
})