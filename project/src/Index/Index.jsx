import React from "react";
import "./Index.css";
import { ResponsiveBar } from '@nivo/bar';

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

            {/* GRAFICO INTERATTIVO */}
            <div style={{ height: '350px', background: 'rgba(30,30,30,0.7)', borderRadius: '16px', margin: '2rem 0', boxShadow: '0 4px 24px #0006', padding: '1rem' }}>
                <h2 style={{textAlign:'center', color:'#fff', marginBottom:'1rem'}}>Risultati del Modello</h2>
                <ResponsiveBar
                    data={[
                        { categoria: 'Domestici', immagini: 60, accuratezza: 0.97 },
                        { categoria: 'Fattoria', immagini: 60, accuratezza: 0.95 }
                    ]}
                    keys={['immagini', 'accuratezza']}
                    indexBy="categoria"
                    margin={{ top: 30, right: 40, bottom: 50, left: 60 }}
                    padding={0.4}
                    groupMode="grouped"
                    colors={["#4fc3f7", "#81c784"]}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Categoria',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Valore',
                        legendPosition: 'middle',
                        legendOffset: -40
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="#222"
                    tooltip={({ id, value, color, indexValue }) => (
                        <strong style={{ color }}>{id === 'immagini' ? 'Immagini' : 'Accuratezza'}: {id === 'accuratezza' ? (value * 100).toFixed(1) + '%' : value}</strong>
                    )}
                    theme={{
                        axis: {
                            ticks: { text: { fill: '#fff' } },
                            legend: { text: { fill: '#fff' } }
                        },
                        legends: { text: { fill: '#fff' } }
                    }}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    animate={true}
                />
            </div>

            <section style={{marginTop: '3rem'}}>
                <h2>Esempi di classificazione</h2>
                <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <div style={{textAlign: 'center'}}>
                        <img src="/public/cane.jpg" alt="Cane" style={{width: '150px', borderRadius: '10px'}} />
                        <div>Risposta modello: <b>Animale Domestico</b></div>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <img src="/public/gallina.jpg" alt="Gallina" style={{width: '150px', borderRadius: '10px'}} />
                        <div>Risposta modello: <b>Animale da Fattoria</b></div>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <img src="/public/coniglio.jpg" alt="Coniglio" style={{width: '150px', borderRadius: '10px'}} />
                        <div>Risposta modello: <b>Animale Domestico</b></div>
                    </div>
                </div>
                <p style={{marginTop: '1rem', fontSize: '0.9rem', color: '#ccc'}}>Le immagini sono esempi: la risposta è quella che il modello darebbe su queste foto.</p>
            </section>
        </main>
    )
}