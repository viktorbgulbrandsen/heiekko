import React, { useEffect, useState } from "react";
import Flashcard from "../components/Flashcard";

function FlashcardPage() {
  const [flashcard, setFlashcard] = useState({ question: "", answer: "" });

  useEffect(() => {
    fetch("http://localhost:8080/api/flashcard")
      .then(response => response.json())
      .then((data) => {
        setFlashcard({ question: data.question, answer: data.answer });
      });
  }, []);

  return <Flashcard flashcard={flashcard} />;
}

export default FlashcardPage;

//hei

// sånn hahah

// setup er:
// Components/Flashcard er flashcard komponenten som tar inn et flashcard objekt og gjør ting med det
// siden vi er i nå heter flashcard den også, men med liten forbokstav, da kan du accesse denne siden når du runner
// og går på localhost:3000/flashcard

//ja jeg har endret filnavn som du ser kanskje du må lagre den her fila hos deg først

//hhhahhah mammasønn
