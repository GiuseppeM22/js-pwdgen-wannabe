let nome = prompt("qual è il tuo nome?");
console.log(`L'utente dichiara il nome ${nome}`);
document.getElementById("nome").innerText = nome;


let cognome = prompt("qual è il tuo cognome?");
console.log(`${nome} dichiara il cognome ${cognome}`);
document.getElementById("cognome").innerText = cognome;

let colore = prompt("qual è il tuo colore preferito?");
console.log(`${nome} dichiara che il suo colore preferito è il ${colore}`)
document.getElementById("colore").innerText = colore;