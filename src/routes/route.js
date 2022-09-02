const { Router } = require('express');
const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController= require("../controllers/weatherController")
const MemeController= require("../controllers/memeController");


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

 // Assignment 1 -
router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/getBydistrictId", CowinController.getBydistrictId)
router.post("/cowin/getOtp", CowinController.getOtp)


 // Assignment 2 -
router.get("/LondonWeather",WeatherController.LondonWeather)
router.get("/WeatherTemperture", WeatherController.WeatherTemperture)
router.get("/SortedTempertureCities", WeatherController.SortedTempertureCities)


 // Assignment 3 -
router.post("/createMemes", MemeController.createMemes)



module.exports = router;