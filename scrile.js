const textElement = document.getElementById('typing-text');
const text = textElement.textContent;
let index = 0;

function typeWriter() {
  if (index < text.length) {
    textElement.textContent = text.substring(0, index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();