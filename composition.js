// Library independant composition strategies

// One: Simple and quite possibly stupid
function blindFuse(t, s) {
	for(var prop in s) {
		t[prop] = s[prop];
	}
}
// What happens when we pass a string in?

// Two: much more better...
// -- See http://robrobbins.info/?page_id=367 for a typechecking refresher

function fuse(target, source) {
    target = target || {};
    var _mixin = function(t, s) {
        for (var p in s) {
		    if (s.hasOwnProperty(p)) {
			    t[p] = s[p];
		    }
		}
        return t;
    };
	if(!source) return target;
	if(source && isObject(source)) {
		return _mixin(target, source);
	} else {
        throw Error('source argument must be Object type');
    }
}

function isObject(arg) {
	return Object.prototype.toString.call(arg) === '[object Object]';
}

// Simple Example time...

// Actually useful example time using class model

var Person = function() {};
Person.prototype.inPockets = function() {
	return this.money ? this.count() : 'um, well...';
};

var Job = {
	money: 20,
	count: function() {return '$' + this.money + ' in my pocket';}
};

// Musician vs developer: An autobiographical example...