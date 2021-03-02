var mailList = ["mail1", "mail2", "mail3", "mail4"];

var userMail = prompt("Inserisci la tua mail");
document.getElementById('email').innerHTML = "La sua Mail è: " + userMail;


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
