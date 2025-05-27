// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, 
// per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Creare tre varibili per il numero di chilometri, l'età e il prezzo del biglietto.
const numeroChilometri = Number(prompt("Inserisci il numero di Km:"));
const age = Number(prompt("Inserisci l'età"));
// Calcolare il prezzo base moltiplicando il numero di chilometri per 0.21.
let ticketPrice = numeroChilometri * 0.21;

// Controllare se il passeggero è minorenne o over 65.
if (age < 18) {
    // Applicare il 20% di sconto al prezzo base.
    ticketPrice = ticketPrice - ((ticketPrice * 20) / 100);

    // Mostrare il risultato all'utente.
    console.log(`Hai uno sconto del 20%! Prezzo totale: ${ticketPrice.toLocaleString("it-IT", { style: "currency", currency: "EUR" })}`);

} else if (age >= 65) {

    ticketPrice = ticketPrice - ((ticketPrice * 40) / 100);

    console.log(`Hai uno sconto del 40%! Prezzo totale: ${ticketPrice.toLocaleString("it-IT", { style: "currency", currency: "EUR" })}`);

} else {

    console.log(`Prezzo totale: ${ticketPrice.toLocaleString("it-IT", { style: "currency", currency: "EUR" })}`)

}
