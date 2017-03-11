var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var newText = animal.toUpperCase();
console.log(newText);

var textChange = text.replace('Papugi', 'Zielone Słonie');
console.log(textChange);
var shorterText = textChange.substr(0, textChange.length/2);
console.log(shorterText);