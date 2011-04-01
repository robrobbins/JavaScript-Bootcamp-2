// Library independant encapsulation stuff for browser

if(!window.FOO) window.FOO = {};

FOO.byName = function(name, scope) {
	var parts = name.split('.');
	var cur = scope || window;
	for (var part; part = parts.shift(); ) {
    	if (cur[part]) {
			cur = cur[part];
		} else {
			return null;
		}
	}
  return cur;
};

FOO.namespace = function(name, obj, scope) {
	if(FOO.byName(name)) {
		throw Error('Namespace "' + name + '" already declared.');
	}
	var parts = name.split('.');
	var cur = scope || window;
	for (var part; part = parts.shift(); ) {
		if (!parts.length && obj) {
			// last part and we have an object; use it
	    	cur[part] = obj;
		} else if (cur[part]) {
			cur = cur[part];
		} else {
			cur = cur[part] = {};
		}
	}
};

// Hey look examples!

// Make objects that encapsualte specific features. Be granular and you can
// probably use inheritance as well.

// Pick your pattern: MVC, MW, etc...

// I like to build objects that 'own' certain actions and know all of the
// related DOM elements by being instantiated with them