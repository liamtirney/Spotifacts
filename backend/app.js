const express = require('express');
const app = express();

const endpoint = 'https://api.spotify.com/v1/me/top/'


// getTopTracks(userId, timeframe) -> top_tracks[]
app.get('/tracks/:timeframe', (req, res) => {
    const timeframe = req.params.timeframe
    // do something here to get the data we want
    data = endpoint + `tracks?time_range=${timeframe}&limit=50&offset=0`
    // redirect to the frontend page and pass that data in

})

// getTopArtists(userId, timeframe) -> artists[]
app.get('/artists/:timeframe', (req, res) => {
    const timeframe = req.params.timeframe
    data = endpoint + `artists?time_range=${timeframe}&limit=50&offset=0`

})

app.listen(3000, () => {
    console.log('Serving app on localhost:3000')
})