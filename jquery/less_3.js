$(document).ready(function(){
	var message = $("<span>1-555-jquery-air</span>");

	var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
	$(".usa").append(message);
	$('.book').remove();

// removing the button and add price 
$('button').on('click',function(){
	var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
	$(".usa").append(message);
	$("button").remove();
});



});