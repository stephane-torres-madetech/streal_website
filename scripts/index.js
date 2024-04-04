const hotOrNotResult = document.getElementById("hot_or_not_result");
const radioGroup = document.getElementsByName("hot_or_not");

const resultText = document.createElement("p");
hotOrNotResult.appendChild(resultText);

radioGroup.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.checked) {
      resultText.textContent = `${option.value}`;
    }
  });
});


