// it will go through every button with class of drum
let drumButton = document.getElementsByClassName("drum");

for (let i = 0; i < drumButton.length; i++) {
  drumButton[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;

    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

document.addEventListener("keydown", function(e) {
    playSound(event.key);
    buttonAnimation(event.key);
});

// Need to figure how to get the keyboard key to came back and 
// play a sound depending on hte letter if w === w plays the audio

function playSound(key) {
    
    switch (key) {
      case "w":
        let crash = new Audio("./sounds/crash.mp3");
        crash.play();

        break;
      case "a":
        let kickBass = new Audio("./sounds/kick-bass.mp3");
        kickBass.play();

        break;
      case "s":
        let snare = new Audio("./sounds/snare.mp3");
        snare.play();

        break;
      case "d":
        let tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();

        break;
      case "j":
        let tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();

        break;
      case "k":
        let tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();

        break;
      case "l":
        let tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();

        break;
      default:
        console.log(buttonInnerHTML);
        break;
    }

}

//Need to review this on top.. I get whats it trying to do but how to get here took me a minute

function buttonAnimation(currentKey) {

  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);
}