// 1. შექმენი button, რომელზე დაწკაპების
// შემდეგაც გაიხსნება მოდალი და მოდალის
// უკან შავი/გამჭვირვალე background

// let modal = document.getElementById("myModal");
// let overlay = document.getElementById("overlay");
// let btn = document.getElementById("openModalBtn");
// let closeBtn = document.getElementById("closeModalBtn");

// btn.addEventListener("click", () => {
//   modal.style.display = "block";
//   overlay.style.display = "block";
// });

// closeBtn.addEventListener("click", () => {
//   modal.style.display = "none";
//   overlay.style.display = "none";
// });
// 2.
// let colorInput = document.getElementById("color");
// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   if (
//     colorInput.value !== "red" &&
//     colorInput.value !== "blue" &&
//     colorInput.value !== "green" &&
//     colorInput.value !== "black" &&
//     colorInput.value !== "white"
//   ) {
//     alert("pick a color from: red, blue, green, black or white");
//     colorInput.value = "";
//   } else {
//     document.body.style.background = colorInput.value;
//   }
// });

// // 3.
// let btn = document.querySelector("button");
// let inputNumbers = document.getElementById("average");
// let para = document.getElementById("result");
// btn.addEventListener("click", () => {
//   let splitedInputNumbers = inputNumbers.value.split(":");
//   let sum = 0;
//   for (let i = 0; i < splitedInputNumbers.length; i++) {
//     sum += Number(splitedInputNumbers[i]);
//   }
//   let average = sum / splitedInputNumbers.length;
//   para.textContent = `${average}`;
// });
