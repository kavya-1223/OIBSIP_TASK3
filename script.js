function convert() {
  var tempInput = document.getElementById("tempInput").value;
  var tempUnit = document.getElementById("tempUnit").value;
  var result = document.getElementById("result");

  // Checking input
  if (isNaN(tempInput)) {
    result.innerHTML = "Please enter a valid number";
    return;
  }

  
  if (tempUnit === "F") {
    var celsius = (tempInput - 32) * 5 / 9;
    result.innerHTML = tempInput + " degrees Fahrenheit is " + celsius.toFixed(2) + " degrees Celsius";
  }

  else if (tempUnit === "C") {
    var fahrenheit = tempInput * 9 / 5 + 32;
    result.innerHTML = tempInput + " degrees Celsius is " + fahrenheit.toFixed(2) + " degrees Fahrenheit";
  }
}
