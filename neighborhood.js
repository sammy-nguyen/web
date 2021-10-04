function placeTen() {
  var myArray = [
    "The Vox",
    "Kappo Honda",
    "Brodard",
    "Hokkaido Ramen",
    "Chicken Plus",
  ];
  var rand = myArray[(Math.random() * myArray.length) | 0];
  const pTag = document.createElement("p");
  pTag.textContent = rand;
  document.body.appendChild(pTag);
}

//document.querySelector
const placeBtn = document.querySelector(".food");
placeBtn.addEventListener("click", placeTen);
