let axios = require("axios")

let LondonWeather=async function (req, res) {
    try {
        let city = req.query.q
        let id = req.query.appid

        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}



let WeatherTemperture = async function (req, res) {
    try {
        let city = req.query.q
        let id = req.query.appid

        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}


let SortedTempertureCities = async function (req, res) {
    try {
        let bag=[]
        let city =["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        for(let i=0 ; i<city.length; i++){
            let q = city[i]
        var options = {
            method: "get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=8483e59d8860872343402229a619f6f7`
        }
        let result = await axios(options)
        bag.push({ city: city[i], temp: result.data.main.temp });
    }
    res.status(200).send({ data: store.sort((a, b) => a.temp - b.temp) })    
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




module.exports.LondonWeather=LondonWeather
module.exports.WeatherTemperture = WeatherTemperture;
module.exports.SortedTempertureCities = SortedTempertureCities;