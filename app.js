require('dotenv').config()
const express = require('express')
const app = express()
// TODO: import the getCityInfo and getJobs functions from util.js
app.use(express.json())
const util = require('./util')
var cityInfo
var jobs

let getCityInfo = async() => {
    cityInfo = await util.getCityInfo;
}
let getJobs = async() => {
    jobs = await util.getJobs;
}
// TODO: Statically serve the public folder

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.js'))
})

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, './public/style.css'))
})

// TODO: declare the GET route /api/city/:city
app.get('/api/city/:city', async (req, res) => {
    try {
        //let [cityInfo, jobs] = await Promise.all([util.getCityInfo(req), util.getJobs(req)])
        var cityInfo = await util.getCityInfo(req.params.city)
        var jobs = await util.getJobs(req.params.city)
        if (!cityInfo && !jobs){
            throw new Error
        }
        return res.status(200).json({
            cityInfo: cityInfo,
            jobs: jobs
        })
    }catch (err){
        res.status(404).json({
            error: err
        })
    }
    }
)
// This endpoint should call getCityInfo and getJobs and return
// the result as JSON.
// The returned JSON object should have two keys:
// cityInfo (with value of the getCityInfo function)
// jobs (with value of the getJobs function)
// If no city info or jobs are found,
// the endpoint should return a 404 status

module.exports = app
