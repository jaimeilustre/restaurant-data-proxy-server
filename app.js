const express = require('express')
const axios = require('axios')

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
// GET route to get restaurants from a specific postcode
app.get('/restaurants/:postcode', (req, res, next) => {
    const {postcode} = req.params

    axios.get(`https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`)
    .then(response => 
        res.json(response.data))
    .catch(err => {
        console.log("Error getting postcode", err)
        res.status(500).json({message: "Error getting postcode"})
    })
})

app.listen(5001, () => {
    console.log("Proxy server is running on port 5001!")
})