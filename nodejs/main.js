// // blocking code
// var content = fs.readFileSync('/etc/hosts');
// console.log(content);
// console.log("Do something else");



// // non-bloxing code
// fs.readFileSync('etc/hosts' ,function(err, content){
// 	console.log(content);
// });
// console.log('Do smt else');

var http = require('http');
http.createServer(function(request, response){
	response.writeHead(200);
	setTimeut(function(){
	response.write('Hello, this is dog');
	response.end(); 
	},5000);
}).listen(8080);
console.log("Listening on port 8080...");