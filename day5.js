var isArthur = true;
var isKing = false;
var weapon;
var helmet;

var name = isKing && isArthur ?
		function(){
			alert('Hey, Arthur');
			console.log("Current: Excalibur");
		}()
		:
		fucntion(){
			alert('Hey, knight');
			console.log("Current: longsword");
		}();

var all = isArthur && isKing ?
		(weapon = "Excalibur",helmet="Goosewhite")
		:
		(weapon = "longsword", helmet = "Iron Helm");