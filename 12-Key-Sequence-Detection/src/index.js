const pressed = [];
const secret = "javascript";

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);

  pressed.splice(-secret.length - 1, pressed.length - secret.length);

  if (pressed.join("").includes(secret)) {
    cornify_add();
  }
});
