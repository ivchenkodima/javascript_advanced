function make(co){
	var counter = 1;
	return {
		getNext:function(){
		return	counter++;
		},
		set: function(new){
			counter = new;
		},
		reset: function(){
			counter = 1;
		}
	};
}
function make(co){
	var counter = 1;
	function counter(){
		return	counter++;
	}
	counter.set = function(new){
			counter = new;
	};
	counter.reset = function(){
			counter = 1;
	};
 	return counter;
}
var q = make();
alert( q.getNext() );
alert(q.reset());
alert(a.set(10));


// ******************** замыкания
function two(a){
	return function(b){
		return a + b;
	}
}
alert(w(1)(2);
// *******************

var user = [{
    name:"Dima",
    age:21
},{
    name:"Vlad",
    age: 40,
},{
    name:"dan",
    age:18
}];
function sortby(field){
    return function(a,b){
        return a[field] > b[field] ? -1 :1;
    }
}
user.sort(sortby("age"));
user.forEach(function(user){
    alert(user.name)
});

// sort by function
function filter(arr, funct){
    var result = [];
    for(var i =0 ; i < arr.lenght; i++){
        var val = arr[i];
        if(funct(value)){
        result.push(val);
        }
    }
    return result;
}
function inArray(arr){
    return function(x){
        return arr.indexOf(x) !=-1;
    };
}
var arr = [1,2,3,4,5,6,7];
alert(filter(arr, function(a){
    return a%2 ==0;
}));
alert(filter(arr, inBetween(3,6)) );
alert(filter(arr, inArray([1,2,10])));



















