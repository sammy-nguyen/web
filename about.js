// console.log("hello world");

// function handleSubmit(evt) {
//   evt.preventDefault();
//   console.log ("form submit");
//   }
// }

// let form = document.querySelector("form#contact");

// form.addEventListener("submit", handleSubmit);

// //handleSubmit.addEventListener("mouseover", () => {

const formElement = document.querySelector("#contact");
formElement?.addEventListener("submit", function () {
  alert("the form is submitted succesful");
});


const catImage = document.querySelector(".cat-img");
catImage?.addEventListener("mouseover", function () {
  alert("Good job! Welcome you to Cat Lover Family");
});
