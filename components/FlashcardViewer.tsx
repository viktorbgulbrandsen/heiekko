import React, { useState } from "react";

function FlashcardViewer({ flashcard }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        onClick={() => setShowAnswer(!showAnswer)}
        style={{
          cursor: 'pointer',
          background: '#f9f9f9',
          borderRadius: '5px',
          padding: '20px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        }}
      >
        {showAnswer ? flashcard.answer : flashcard.question}
      </div>
    </div>
  );
}

export default FlashcardViewer;
