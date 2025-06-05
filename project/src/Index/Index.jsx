import React from "react";
import "./Index.css";

export default function Index() {
    return (
        <main>
            <header>
                <img src="/src/assets/logo.png" alt="logo" />
            </header>

            <div id="title">
                <h1>AnimalAI</h1>
                <h3>Project ML</h3>
            </div>
            
            <p>
                AnimalIA è un progetto innovativo che sfrutta le potenzialità del machine learning per il riconoscimento automatico delle specie animali a partire da immagini. Il modello è stato addestrato su un ampio dataset di fotografie, consentendo di identificare con precisione numerose specie diverse.
                <br /><br />
                L’obiettivo principale è facilitare la classificazione di animali sia per scopi educativi che di ricerca, offrendo uno strumento semplice e intuitivo. Basta caricare una foto e il sistema analizzerà l’immagine, restituendo la specie più probabile insieme a un livello di confidenza.
                <br /><br />
                Questo progetto rappresenta un esempio concreto di come l’intelligenza artificiale possa essere applicata al mondo naturale, supportando biologi, studenti e appassionati nella scoperta e nello studio della biodiversità.
            </p>

            <img src="/public/grafico.png" alt="grafico" />
        </main>
    )
}