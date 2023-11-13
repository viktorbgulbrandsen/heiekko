import React, { useEffect, useState } from "react";
import FlashcardViewer from "../components/FlashcardViewer";

function FlashcardPage() {
  const [flashcard, setFlashcard] = useState({ question: "", answer: "" });

  useEffect(() => {
    fetch("http://localhost:8080/api/flashcard")
      .then(response => response.json())
      .then((data) => {
        setFlashcard({ question: data.question, answer: data.answer });
      });
  }, []);

  return <FlashcardViewer flashcard={flashcard} />;
}

export default FlashcardPage;
