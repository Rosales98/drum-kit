// it will go through every button with class of drum
let drumButton = document.getElementsByClassName("drum");

for (let i = 0; i < drumButton.length; i++) {
  drumButton[i].addEventListener("click", () => {
    
    let audio = new Audio("./sounds/tom-1.mp3");
    audio.play();

  });
}
