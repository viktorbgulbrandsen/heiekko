import React, { useEffect, useState } from "react";

function Index() {
  const [flashcard, setFlashcard] = useState({ question: "", answer: "" });
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    // Fetch the flashcard data from the Flask API
    fetch("http://localhost:8080/api/flashcard").then(
      response => response.json()
    ).then((data) => {
      setFlashcard({ question: data.question, answer: data.answer });
    })
  }, []);

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


export default Index;
