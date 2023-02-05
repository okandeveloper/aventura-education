function getRandomRGB() {
    return [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256)
    ];
  }

  var numberOfColors = prompt("Oluşturmak istediğiniz renk sayısını girin:");
  var colorContainer = document.getElementById("color-container");
  for (var i = 0; i < numberOfColors; i++) {
    var randomRGB = getRandomRGB();
    var randomColor = "rgb(" + randomRGB.join(", ") + ")";
    var colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    colorBox.style.backgroundColor = randomColor;
    colorBox.textContent = randomColor;
    colorContainer.appendChild(colorBox);
  }