// const count = 0;

// place10.addEventListener("click", function () {
//   count += 1;
//   if (count === 1) {
//     count = document.createElement("p");
//     const node1 = document.createTextNode("hey");
//     count.appendChild(node1);
//   } else if (count === 2) {
//     const node2 = document.createTextNode("hello");
//     count.appendChild(node2);
//   } else {
//     const node3 = document.createTextNode("hello1");
//     count.appendChild(node3);
//   }
// });

//place10.addEventListener("click", function)

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
