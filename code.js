document.getElementById("checkButton").addEventListener("click", function() {
  let age = document.getElememtById("age").value;
  let resultText = document.getElementById("resultText")
  let resultImage = document.getElementById("resultImage")

if(age <= 15) {
resultText.innerText = "resultText";
resultText.style.color="green";
resultImage.src = "YOUR";
} else if (age >= 16 && age <= 24){
  resultText.innerText = "";
  resultText.style.color = "";
resultImage.src = "YOUR CAR";
} else if (age >= 25) {
resultText.innerText = "text";
resultText.style.color = "red";
resultImage.src = "your rental car image link here";
}
});
