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

$(document).ready(function(){
  $("button").on("click", function(){
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
    $(".usa").append(message);
    $(this).remove();
  });
});

$(document).ready(function(){
  $('button').on('click', function(){
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
    $(this).closest('.tour').append(message);
    $(this).remove();
    
  });
});

$(document).ready(function(){
  $(".tour").on("click", function(){
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
    $(this).append(message).find('button').remove();
   });
});


});