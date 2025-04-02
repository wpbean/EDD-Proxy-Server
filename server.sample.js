const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5050; // Change if needed

app.use(cors()); // Enable CORS for all routes

app.get('/fetch-sales', async (req, res) => {
    try {
        const { email } = req.query;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        // Your EDD API details
        const eddApiUrl = `https://yourdomain.com/edd-api/v2/sales/?key=add_your_api_key_here&token=add_your_api_token_here&email=${encodeURIComponent(email)}`;

        console.log(`Fetching data from: ${eddApiUrl}`);

        // Fetch data from EDD API
        const response = await axios.get(eddApiUrl);

        console.log('Response:', response.data);

        // Send response to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching EDD data:', error.response ? error.response.data : error.message);

        res.status(500).json({
            error: 'Failed to fetch data',
            details: error.response ? error.response.data : error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
