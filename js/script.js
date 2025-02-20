/* 

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

//declaration 
const listEl = document.getElementById('numbers-list')
const countdownEl = document.getElementById('countdown')
const formEl = document.getElementById('answers-form')
const instructionsEl = document.getElementById('instructions')
//Creo la lista di 5 numeri casuali 
const numbers = [] 

function generate5RandomNumbers () {

    for (let i = 0 ; i < 5; i++) {
    
        const number = Math.random()*100
        numbers.push(number.toFixed())
    }

    return numbers
}

const listNumbers = generate5RandomNumbers()
console.log(listNumbers);

//Associo i numeri alla lista HTML per presentarli in pagina
for (let i = 0; i < listNumbers.length; i++) {
    const thisNumber = listNumbers[i];

    console.log(thisNumber);

    listEl.innerHTML += `<li>${thisNumber}</li>`

    console.log(listEl);
    
}

//Dopodichè faccio partire un timer di 30 secondi
let seconds = 5

function countdownTimer(){

    console.log(seconds);

    if (seconds === 0) {
        clearInterval(timer)
        //Quando il timer di 30 secondi finisce i numeri scompaiono e faccio comparire in pagina il form dove poter inserire i numeri da indovinare
        listEl.classList.add('d-none')
        formEl.classList.remove('d-none')
        instructionsEl.innerText = `Inserisci i numeri che hai visualizzato nell'ordine che preferisci!`
        countdownEl.classList.add('d-none')
    } else {
        countdownEl.innerText = seconds--
    }
}

const timer = setInterval(countdownTimer, 1000)





//Al click del pulsante deve apparire un messaggio che indica quanti e quali numeri sono stati indovinati