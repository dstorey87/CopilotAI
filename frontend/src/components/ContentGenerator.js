import React, { useState } from 'react';
import axios from 'axios';

const ContentGenerator = () => {
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');

  const generateContent = async () => {
    try {
      const response = await axios.post('https://copilotai-1.onrender.com/api/generate', { topic });
      setContent(response.data.content);
    } catch (error) {
      console.error('Error generating content:', error);
    }
  };

  return (
    <div>
      <h1>AI Blog Post Generator</h1>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter a topic"
      />
      <button onClick={generateContent}>Generate Content</button>
      <div>
        <h2>Generated Content</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ContentGenerator;