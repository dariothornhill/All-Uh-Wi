"use strict!";

var contactForm = document.getElementById("contactInfo");
contactForm.addEventListener("submit", handler);
console.log(button);

function handler(event) {
  event.preventDefault();
  console.log(event.target.firstname.value);
  var firstname = event.target.firstname.value;
  var lastname = event.target.lastname.value;
  var email = event.target.email.value;
  var message = event.target.message.value;
  saveInfo(firstname, lastname, email, message);
}

function saveInfo(firstName, lastName, email, message) {
  var contactInfo = {
    first: firstName,
    last: lastName,
    email,
    msg: message
  };
  localStorage.setItem("data", JSON.stringify(contactInfo));
}
//--------------------------------------------------------------
