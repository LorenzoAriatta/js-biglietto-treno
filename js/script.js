// chiedere all'utente quanti km vuole percorrere
const yourName = prompt('Digita il tuo nome');
console.log(yourName);

const lastName = prompt('Digita il tuo cognome');
console.log(lastName);

const yourAge = prompt('Digita la tua età')
console.log(yourAge);

const kmUser = prompt('Quanti km desideri fare?')
console.log(kmUser);



// prezzo al km 0.21€
let priceForKm = kmUser * 0.21;

const underage = (priceForKm * 20 / 100); // sconto 20%

const overage = (priceForKm * 40 / 100); // sconto 40%

console.log(priceForKm);

// prezzo finale





// sconto 20% per <18 anni, sconto 40% >= 65 anni
if (yourAge < 18) {
    finalPrice = priceForKm - underage
} else if (yourAge >= 65) {
    finalPrice = priceForKm - overage
} else {
    finalPrice = priceForKm
}

let finalPrice = finalPrice.toFixed(2);


document.getElementById('userName').innerText = 'Il tuo nome è: ' + yourName;
document.getElementById('userLastName').innerText = 'Il tuo cognome è: ' + lastName;
document.getElementById('userAge').innerText = 'La tua età è: ' + yourAge;
document.getElementById('userKm').innerText = 'Vuoi percorrere: ' + kmUser + 'Km';
document.getElementById('totalPrice').innerText = 'Prezzo Biglietto: ' + finalPrice;