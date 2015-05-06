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

// shooters
function makeArmy() {
  var shooters = [];
  for (var i = 0; i < 10; i++) {
    var shooter = function(i) {
      return function() {
        alert( i );
      };
    }(i);
    shooters.push(shooter);
  }
  return shooters;
}

var army = makeArmy();
army[0](); // 0
army[1](); // 1


// lodash
<p>Подключим библиотеку</p>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"></script>

<p>Функция <code>_.defaults()</code> добавляет отсутствующие свойства.</p>
<script>
  var user = {
    name: 'Вася'
  };

  _.defaults(user, {
    name: 'Не указано',
    employer: 'Не указан'
  });

  alert( user.name ); // Вася
  alert( user.employer ); // Не указан
  alert( _.size(user) ); // 2
</script>


// perfomance test

function sumTo(n){
	var result = 0;
	for(var i = 0 ; i < n; i++{
		result += i;
	}
	return result;
}

function sumToRecurcion(n){
	return n == 1 ? 1 : n + sumToRecurcion(n-1);	
}

var timeLoop = performance.now();
for(var i =0 ; i < 1000; i++) sumTo(1000);
	timeLoop = performance.now() - timeLoop;

var timeRecurcion = performance.now();
for (var i = 0; i < n; i ++) sumToRecurcion(1000);
timeRecurcion = timeRecurcion.now() - timeRecurcion;

alert("Difference in "+ (timeRecurcion / timeLoop) +"times"); 
















