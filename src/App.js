import React, { useState } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);

    const words = inputText.split(' ');

    for (let word of words) {
      const lowerCaseWord = word.toLowerCase();
      if (customDictionary[lowerCaseWord]) {
        setSuggestion(`Did you mean: ${customDictionary[lowerCaseWord]}?`);
        return;
      }
    }

    setSuggestion('');
  };

  return (
    <div>
      <textarea
        placeholder="Enter text..."
        value={text}
        onChange={handleChange}
        rows="4"
        cols="50"
      />
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
};

export default XSpellCheck;
