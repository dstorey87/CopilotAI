// backend/routes/api.js
const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

// Route to generate content
router.post('/generate', contentController.generateContent);

module.exports = router;