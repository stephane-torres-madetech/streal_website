const hotOrNotResult = document.getElementById("hot_or_not_result");
const radioGroup = document.getElementsByName("hot_or_not");

const resultText = document.createElement("p");
hotOrNotResult.appendChild(resultText);

radioGroup.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.checked) {
      resultText.textContent = `${option.value}`;
    }
    setOpinionStyle();
  });
});

function setOpinionStyle() {
  if (resultText.textContent == "hot") {
    resultText.style.color = "red";
    resultText.style.fontSize = "2rem";
    resultText.style.fontWeight = "bold";
  }

  if (resultText.textContent == "not") {
    resultText.textContent += " \u2639";
    resultText.style.color = "blue";
    resultText.style.fontSize = "1.25rem";
    resultText.style.fontWeight = "normal";
  }
}
