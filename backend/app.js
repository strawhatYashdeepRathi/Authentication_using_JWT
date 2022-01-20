const express = require("express");
const mongoose = require("mongoose");
// const bodyparser = require("body-parser");
// const loginRoutes = require("./routes/loginPage");
// const User = require("./models/users");
const app = express();
mongoose.connect("mongodb://localhost:27017/citiesData");
const cities = require('./models/citydata');

const citySchema = new mongoose.Schema({
    id: Number,
    name: String,
    state: String
})
const citiesModel= mongoose.model("cities", citySchema);
app.post('/', async(req, res)=>{
    try{
        const city = await citiesModel.insertMany(cities);
        res.json({
            status: 'Success',
            data: city
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: e.message
        })
    }
})

app.listen(3000, () => console.log("Server is started"));