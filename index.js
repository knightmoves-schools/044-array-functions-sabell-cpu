var automobiles = ['car','truck','motorcycle'];
automobiles.push('airplane','skateboard');
automobiles.unshift('bike','helicopter');
var automobilesCopy = `Automobiles: ${automobiles}`;
automobiles.pop();
automobiles.shift();
document.getElementById("result").innerHTML = automobiles;