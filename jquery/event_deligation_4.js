$(document).ready(function(){
  $('button').on('click', function(){
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
    var discount = $(this).closest('.tour').data('discount');
    $(this).closest(".tour").append(message);
    $(this).remove();
  });
});


$(document).ready(function(){
  $("button").on("click", function(){
    var discount = $(this).closest(".tour").data("discount");
    var message = $("<span>Call 1-555-jquery-air for a"+ discount +"discount.</span>");
    $(this).closest(".tour").append(message);
    $(this).remove();
  });
});


$(document).ready(function(){
  $("button").on("click", function(){
    var tour = $(this).closest(".tour");
    var discount = tour.data("discount");
    var message = $("<span>Call 1-555-jquery-air for a $" + discount + "</span>");
    tour.append(message);
    $(this).remove();
  });
});

$(document).ready(function(){
  $(".tour").on("click",'button', function(){
    var tour = $(this).closest(".tour");
    var discount = tour.data("discount");
    var message = $("<span>Call 1-555-jquery-air for a $" + discount + " discount.</span>");
    tour.append(message);
    $(this).remove();
  });
});


// filters
$(document).ready(function(){
  $("#filters").on("click", ".on-sale", function(){
		$('.tour').filter(".on-sale").addClass("highlight");
  });
});
// =------two filters.
$(document).ready(function(){
  $("#filters").on("click", ".on-sale", function(){
    $('.highlight').removeClass('highlight');
    $(".tour").filter(".on-sale").addClass("highlight");
  });

  $("#filters").on("click", ".featured", function(){
    $('.highlight').removeClass('highlight');
    $(".tour").filter(".featured").addClass("highlight");
  });
});
