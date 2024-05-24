
const textElem = document.getElementById("typed-text")
const skillArray = ['front-end developer','backend-developer','UI-UX designer','i know everything']
let currentIndex = 0;
const animationSpeed = 2000;

const typeWriter = () => {
    const currentText = skillArray[currentIndex];
    textElem.textContent = currentText

    currentIndex = (currentIndex + 1) % skillArray.length;

    setTimeout(typeWriter,animationSpeed)
}

typeWriter()
