function convertTemperature() {
    var temperature = document.getElementById("temperature").value;
    var conversionType = document.getElementById("conversionType").value;
    var result = document.getElementById("result");
  
    if (conversionType === "fahrenheit") {
      var celsius = (temperature - 32) * (5 / 9);
      result.innerText = temperature + "°F is " + celsius.toFixed(2) + "°C";
    } else if (conversionType === "celsius") {
      var fahrenheit = (temperature * 9 / 5) + 32;
      result.innerText = temperature + "°C is " + fahrenheit.toFixed(2) + "°F";
    }
  }
  