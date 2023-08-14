const convertBtn = document.getElementById('convertBtn');
const temperatureInput = document.getElementById('temperature');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', () => {
  const temperature = parseFloat(temperatureInput.value);
  if (isNaN(temperature)) {
    resultDiv.textContent = 'Please enter a Temperature';
    return;
  }

  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;
  let convertedTemperature, resultUnit;

  if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
    convertedTemperature = (temperature * 9/5) + 32;
    resultUnit = '°F';
  } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
    convertedTemperature = temperature + 273.15;
    resultUnit = 'K';
  } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
    convertedTemperature = (temperature - 32) * 5/9;
    resultUnit = '°C';
  } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
    convertedTemperature = (temperature - 32) * 5/9 + 273.15;
    resultUnit = 'K';
  } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
    convertedTemperature = temperature - 273.15;
    resultUnit = '°C';
  } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
    convertedTemperature = (temperature - 273.15) * 9/5 + 32;
    resultUnit = '°F';
  } else {
    convertedTemperature = temperature;
    resultUnit = '°' + toUnit.toUpperCase();
  }

  resultDiv.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
});
