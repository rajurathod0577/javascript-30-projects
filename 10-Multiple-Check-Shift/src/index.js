const checkboxs = document.querySelectorAll("input[type = 'checkbox']");

let lastChecked;

function handleChange(e) {
  // Check if th Shift key is pressed and hold and If input is checked
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    //Loop over every single checkbox
    checkboxs.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxs.forEach((checkbox) =>
  checkbox.addEventListener("click", handleChange)
);
