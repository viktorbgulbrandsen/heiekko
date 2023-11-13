import React, { useState } from "react";

function Flashcard({ flashcard }: any) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div className="cursor-pointer bg-white rounded-md p-4 shadow-md"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {showAnswer ? flashcard.answer : flashcard.question}
      </div>
    </div>
  );
}

export default Flashcard;
