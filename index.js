// En variabel kan være flere typer
var name = 'Tommy';
name = 22;

// Objekt
var food = {
    // Variabler
    type : 'apple', 
    taste: 'sour',
    price: 44,

    // Funktioner
    info : function(){
    	return this.type + ' ' + this.taste + ' ' + this.price;
    },

    // array
    specs : ['hello', 'dsfdsf', 34, {name: 'Mark'}], 

    orm : {name: 'Olfert',
    age: 44}
}

// To forskellige måder at declerere funktioner på
var x = function() {
	return 'Hello';
	//arguments[2]; // Henter parametre der hvor functionen bliver kaldt
}

x();

function y () {
	return 'World';
}

y();

console.log(food.type);
food.type = 'Orange';

// Tilføj ny variabel
food.somethingNew = 'sadsfdsfds';

console.log(food.info());

// read from file (assync)
var fs = require('fs');
var text = fs.readFile('textfile.txt', 'utf-8', function (err, data) {
	console.log('asdsa');
});
console.log(text);