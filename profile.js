//In profile.js, create event listeners that check for a click on each of these buttons.
//If a user clicks on “My Favorite Color”,
//it should alert the user of your favorite color, and so on.

const color = document.querySelector("#color");
color.addEventListener("click", function () {
  alert("I love Green, purple, pink, teal.");
});

const place = document.querySelector("#place");
place.addEventListener("click", function () {
  alert("I love traveling to Vietnam, Taipei, Hongkong, Thailand.");
});

const ritual = document.querySelector("#ritual");
ritual.addEventListener("click", function () {
  alert("My favorite ritual are Family dinner,Christmas holiday");
});
