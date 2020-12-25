const Clarifai = require('clarifai');

const ApiKey = process.env.API_KEY;
const app = new Clarifai.App({
    apiKey: ApiKey
});

const handleApiCall = () => (req, res) => {
    app.models
    .predict(Clarifai.CELEBRITY_MODEL, req.body.input)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Unable to fetch from Clarifai Api'))
}

module.exports = {
    handleApiCall
}