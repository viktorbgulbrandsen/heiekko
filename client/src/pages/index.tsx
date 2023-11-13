import React, { useEffect, useState } from "react";
import Link from "next/link";

function Index() {

  return (
   <>
   <div>
    This is my flashCard website 
   </div>
   <Link href={'/flashcard'}>
    Go to flashcard page
   </Link>
   </>
  );
}

//
export default Index;
//jaaaaa nydeligg dette er perfekt nå får jeg oversrikt og kan begynne å leke mer uten å være redd forat alt krasjer. this is home base lsm
//jaa mye bedre + jeg kan begynne å strukturere og implementere litt ting lettere med apien. en side for spise api, en side for lage fin side, en side for å laste side

// hahah ja eller sidene under /pages/ de kan hente fra api og bygges opp av ulike komponenter med dataen fra api,
// greia med komponenter er at du lager typ 1 flashcard komponent slik du har gjort
// og hvis du henter ut si 10 flashcards fra api'et så mater du bare ulik data i samme komponent slik at du får 10 forskjellige flashcards
// men med samme komponent eller kode
// mashallah vi snakkes husk å pushe til github!!
// <3

//ja ok det er bra da får jeg framgang imorgen. men jeg må stikke vi snx tak for hjelpen heheheheh ja push 