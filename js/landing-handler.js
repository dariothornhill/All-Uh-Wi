"use strict!";

var landing = document.getElementById("landingInfo");
landing.addEventListener("submit", handler);

function handler(event) {
  event.preventDefault();
  document.getElementById("creatorEmail");
  var email = event.target.creatorEmail.value;
  saveInfo(email);
}

function saveInfo(email) {
  var info = {
    email: email
  };
  localStorage.setItem("creator-email", JSON.stringify(info));
}
