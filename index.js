// it will go through every button with class of drum
let drumButton = document.getElementsByClassName("drum");

for (let i = 0; i < drumButton.length; i++) {
  drumButton[i].addEventListener("click", () => {
    alert("I got clicked");
  });
}
