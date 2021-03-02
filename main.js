var mailList = ["mail1", "mail2", "mail3", "mail4"];

var userMail = prompt("Inserisci la tua mail");
document.getElementById('emailuser').innerHTML = "La sua Mail è: " + userMail;


for (var i = 0; i < mailList.length; i++) {
  console.log(mailList[i]);
  if (userMail==mailList[i]) {
    var verifiedMail = userMail;
  }
}

if (userMail==verifiedMail) {
  console.log("accesso verificato");
  document.getElementById('email').innerHTML = "<span style=\"color:green\"> Accesso per " + verifiedMail + " autorizzato.</span>";
} else {
  console.log("accesso negato");
  document.getElementById('email').innerHTML = "<span style=\"color:red\"> Accesso per " + userMail + " negato.</span>";
}


var lancio_p1=Math.round(Math.random()*5+1);
var lancio_p2=Math.round(Math.random()*5+1);
console.log(lancio_p1, lancio_p2);

document.getElementById('lancio1').innerHTML = "Hai fatto: " + lancio_p1 + " <i class=\"fas fa-dice\"></i>";
document.getElementById('lancio2').innerHTML = "L'avversario ha fatto: " + lancio_p2 + " <i class=\"fas fa-dice\"></i>";

if (lancio_p1 > lancio_p2) {
  console.log("Ha vinto p1");
  document.getElementById('risultato').innerHTML = "<span style=\"color:green\">Hai Vinto!</span>";
} else if(lancio_p1 == lancio_p2) {
  console.log("pareggio");
  document.getElementById('risultato').innerHTML = "<span style=\"color:blue\">Pari</span>";
} else{
  console.log("Ha vinto p2");
  document.getElementById('risultato').innerHTML = "<span style=\"color:red\">Hai Perso!</span>";
}
