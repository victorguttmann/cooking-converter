var liquid = function(gallon) {
  return gallon*3.78541;
}

var gallon = parseInt(prompt("How much milk do you wanna drink?"));

alert(`You are going to drink ${liquid(gallon)} liter.`);
