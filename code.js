document.getElementById("checkButton").addEventListener("click", function() {
  let age = document.getElememtById("age").value;
  let resultText = document.getElementById("resultText")
  let resultImage = document.getElementById("resultImage")

if(age <= 15) {
resultText.innerText = "resultText";
resultText.style.color="green";
resultImage.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbicyclingaustralia.com.au%2Fbikes%2Fridden-reviewed-world-bicycle-reliefs-buffalo-bike%2F&psig=AOvVaw3p26N_ZWYqOH7Uw72UxJQk&ust=1744475932167000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjWkMK10IwDFQAAAAAdAAAAABAE";
} else if (age >= 16 && age <= 24){
  resultText.innerText = "resultText";
  resultText.style.color = "green";
resultImage.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kbb.com%2Fwhat-is%2Fluxury-car%2F&psig=AOvVaw3gcuAYUVGYoCQLC9aAUuMZ&ust=1744476158785000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDyhKW20IwDFQAAAAAdAAAAABAJ";
} else if (age >= 25) {
resultText.innerText = "resultText";
resultText.style.color = "green";
resultImage.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdrivo.com%2Fabout%2Flocations%2FEWR&psig=AOvVaw2_te9iiSuJagNvDghwqB9S&ust=1744476195243000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCf1LG20IwDFQAAAAAdAAAAABAI";
}
});
