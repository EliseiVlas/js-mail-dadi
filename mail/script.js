// Mail
// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: Non è necessario provvedere alla validazione delle email

// creo una lista di email
const listaMail = ["vlaselisei@gmail.com", "francesc@gmail.com", "maria@gmail.com", "francesca@gmail.com", "marco@gmail.com"]
console.log(listaMail)
let userEmail = prompt("inserisci la tua mail")
let controllo = false;
for (let i = 0; i < listaMail.length; i++){
    let idUser = listaMail[i] 
    if(userEmail === idUser){
        controllo = true
    }
}
if(!controllo){
    console.log("Ci dispiace, questa mail " + (userEmail) + " " + "non e nella lista");
}else{
    console.log("Perfetto, sei nella lista della festa");
    
}