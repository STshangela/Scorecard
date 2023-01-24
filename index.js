let homePoints = document.getElementById('home-pts');
let guestPoints = document.getElementById('guest-pts');

let homeScore = 0;
let guestScore = 0;

function homeAddPoint() {
  homeScore += 1;
  homePoints.textContent = homeScore;
}  

function homeAddTwoPoints() {
  homeScore += 2;
  homePoints.textContent = homeScore;
}

function homeAddThreePoints() {
  homeScore += 3;
  homePoints.textContent = homeScore;
}

function guestAddPoint() {
  guestScore += 1;
  guestPoints.textContent = guestScore;
}

function guestAddTwoPoints() {
  guestScore += 2;
  guestPoints.textContent = guestScore;
}

function guestAddThreePoints() {
  guestScore += 3;
  guestPoints.textContent = guestScore;
}