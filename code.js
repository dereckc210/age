document.getElementById("checkButton").addEventListener("click", function() {
  let age = document.getElementById("age").value;
  let resultText = document.getElementById("resultText")
  let resultImage = document.getElementById("resultImage")

if(age <= 15) {
resultText.innerText = "Can you ride a bike?";
resultText.style.color="green";
resultImage.src = "https://m.media-amazon.com/images/I/714VPD4aluL.jpg";
} else if (age >= 16 && age <= 24){
  resultText.innerText = "Can you get a rental car?";
  resultText.style.color = "green";
resultImage.src = "https://i.abcnewsfe.com/a/f43853f3-9eaf-4048-9ae7-757332c5787e/mclaren-1-ht-gmh-240412_1712928561648_hpMain_16x9.jpg?w=992";
} else if (age >= 25) {
resultText.innerText = "Can you drive a car?";
resultText.style.color = "green";
resultImage.src = "https://api.drivo.com/uploads/images/locations/IMG_2961-min_UbKpF2x.png";
}
});
