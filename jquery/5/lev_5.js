$(document).ready(function() { 
  $("#tour").on("click", "button", function() { 
    $(".photos").slideDown();
  });
});


$(document).ready(function() { 
  $("#tour").on("click", "button", function() { 
    $(".photos").slideToggle();
  });
});

// on('mouseenter', 'mousehover').....
$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $(".photos").slideToggle();
  });
  $(".photos").on("mouseenter", "li", function() {
    $(this).closest('li').find('span').slideToggle();
  });
});

$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $(".photos").slideToggle();
  });
  $(".photos").on("mouseenter", "li", function() {
    $(this).find("span").slideToggle();
  });
  $('.photos').on('mouseleave','li',function(){
  $(this).find('span').slideToggle();
  });
});

$(document).ready(function() {
  function showPhotos(){
   	$(this).find("span").slideToggle();
  }
  $('#tour').on("click", "button", function() {
    $('.photos').slideToggle();
  });
  $('.photos').on("mouseenter", "li", showPhotos);
  $('.photos').on("mouseleave", "li", showPhotos);
});

// cHANGING FIELDS
$(document).ready(function() {
  $("#nights").on("keyup", function() {
    var nights = +$(this).val();
    var dailyPrice = +$(this).closest(".tour").data("daily-price");
    $("#total").text(nights * dailyPrice);
    $("#nights-count").text($(this).val());
  });
});

