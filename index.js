var automobiles = ['car', 'truck', 'motorcycle'];

automobiles.push('airplane','skateboard');
document.getElementById("push").innerHTML = automobiles;

automobiles.unshift('helicopter','bike');
document.getElementById("unshift").innerHTML = automobiles;

var automobilesCopy = `automobiles: ${automobiles}`;

automobiles.pop('skateboard');
document.getElementById("pop").innerHTML = automobiles;

automobiles.shift('bike');
document.getElementById("shift").innerHTML = automobiles;

document.getElementById("result").innerHTML = automobiles;


