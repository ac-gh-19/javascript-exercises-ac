const convertToCelsius = function(fahrenheit) {
  let celsius = 0;
  celsius = (fahrenheit - 32) * 5 / 9;
  return +celsius.toFixed(1);
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = 0;
  fahrenheit = ((celsius * 9) / 5) + 32;
  return +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
