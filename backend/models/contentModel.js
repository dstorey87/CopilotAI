// backend/models/contentModel.js
const axios = require('axios');
require('dotenv').config();
const logger = require('../utils/logger');

exports.generateContent = async (topic) => {
  const apiKey = process.env.OPENAI_API_KEY;
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
      {
        prompt: `Write a detailed blog post about ${topic}.`,
        max_tokens: 500,
        temperature: 0.7,
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
    logger.error(`Error generating content: ${error.response ? JSON.stringify(error.response.data) : error.message}`);
    throw error;
  }
};