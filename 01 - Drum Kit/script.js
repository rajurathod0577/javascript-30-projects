function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  if (!audio) return;
  audio.currentTime = 0; //Rewinds to the start
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //Skip it if not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
