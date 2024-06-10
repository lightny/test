// app.js or server.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 9999;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Store the user ID
let userId = null;

// Route to set the user ID
app.post('/set_user_id/:playerId', (req, res) => {
    const playerId = req.params.playerId;

    // Set the user ID
    userId = playerId;
    console.log('User ID set:', userId);

    res.status(200).send('User ID set successfully');
});

// Route to retrieve the user ID
app.get('/get_user_id', (req, res) => {
    if (userId) {
        res.status(200).send(userId);
    } else {
        res.status(404).send('User ID not found');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});