const axios = require('axios');
require('dotenv').config();
const contentModel = require('../models/contentModel');
const logger = require('../utils/logger');

exports.generateContent = async (req, res) => {
  try {
    const { topic } = req.body;
    const content = await contentModel.generateContent(topic);
    res.json({ content });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Failed to generate content' });
  }
};

// backend/models/contentModel.js
const axios = require('axios');
require('dotenv').config();

exports.generateContent = async (topic) => {
  const apiKey = process.env.OPENAI_API_KEY;
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-003/completions', // Updated engine
      {
        prompt: `Write a detailed blog post about ${topic}.`,
        max_tokens: 500, // Increased tokens for longer content
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error generating content:', error.response ? error.response.data : error.message);
    throw error;
  }
};