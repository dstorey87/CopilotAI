const axios = require('axios');
require('dotenv').config();
const contentModel = require('../models/contentModel');
const logger = require('../utils/logger');

exports.generateContent = async (req, res) => {
  try {
    const { topic } = req.body;
    const response = await axios.post('https://copilotai-1.onrender.com/api/generate', { topic });
    const content = response.data.content;
    res.json({ content });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Failed to generate content' });
  }
};