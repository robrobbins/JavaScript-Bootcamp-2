// Library independant inheritance model


function extend(parent, child) {
    function temp() {}
    temp.prototype = parent.prototype;
    child.base = parent.prototype;
    child.prototype = new temp();
    child.prototype.constructor = child;
}

// Examples

var Chuck = function() {};
Chuck.prototype.greet = function(greeting) {
	return 'Well, ' + greeting;
};
Chuck.prototype.myPet = function(pet) {
	return pet + ' is my pet';
};

var Norris = function() {
	Chuck.call(this);
};

// Make the call to set up inheritance
extend(Chuck, Norris);

Norris.prototype.greet = function(greeting) {
	return Norris.base.greet.call(this, greeting) + 'YAAAAA!!!';
};
Norris.prototype.myPet = function(pet) {
	return Norris.base.myPet.call(this, pet) + ' who knows KARATAE!';
};

// instanceof is now available as a psuedo type enforcer
function isBadass(obj) {
	return obj instanceof Norris ? 'Absolutely' : 'Nope';
}
// can be used with property detection to form a Factory Pattern

// Foreshadowing: A Polymorphic Moment?

// Abstracting this? Enterprise vs Ninja? Other libraries methods?
// Encapsulation for browser?