const express = require('express')
const axios = require('axios')
const cors = require("cors")
const app = express()

const FRONTEND_URL = process.env.ORIGIN || "http://localhost:5173"

app.use(
    cors({
        origin: [FRONTEND_URL]
    })
)

const PORT = process.env.PORT || 5005
 
// GET route to get restaurants from a specific postcode
app.get('/restaurants/:postcode', (req, res) => {
    const {postcode} = req.params
    const apiUrl = "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/"

    axios.get(`${apiUrl}${postcode}`)
    .then(response => 
        res.json(response.data))
    .catch(err => {
        console.log("Error getting postcode", err)
        res.status(500).json({message: "Error getting postcode"})
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`)
})