const linesToType = [
    "Welcome to the Meets Page",
    "Here, you meet your trek buddy"
];
const typingSpeed = 80; 

const line1Element = document.getElementById("line1");
const line2Element = document.getElementById("line2");

let lineIndex = 0;
let charIndex = 0;

function typeText() {
    if (lineIndex < linesToType.length) {
        const currentText = linesToType[lineIndex].slice(0, ++charIndex);

        if (lineIndex === 0) {
            line1Element.textContent = currentText;
        } else if (lineIndex === 1) {
            line2Element.textContent = currentText;
        }

        if (charIndex === linesToType[lineIndex].length) {
            lineIndex++;
            charIndex = 0;
            setTimeout(typeText, 100); 
        } else {
            setTimeout(typeText, typingSpeed);
        }
    }
}

document.addEventListener("DOMContentLoaded", typeText);

// password

const passwordInput = document.getElementById('password');
const showPasswordIcon = document.getElementById('showPasswordIcon');
const hidePasswordIcon = document.getElementById('hidePasswordIcon');

showPasswordIcon.addEventListener('click', function() {
  passwordInput.type = 'text';
  showPasswordIcon.style.display = 'none';
  hidePasswordIcon.style.display = 'inline-block';
});
hidePasswordIcon.addEventListener('click', function() {
    passwordInput.type = 'password';
    hidePasswordIcon.style.display = 'none';
    showPasswordIcon.style.display = 'inline-block';
  });
  

