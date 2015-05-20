$(document).ready(function() {
  $(".tour").on("mouseenter", function() {
    $(this).css({"background-color": "#252b30", "font-weight": "bold"});
    $(this).find(".photos").addClass('highlight');
  });
  $('.tour').on('mouseleave', function(){
  	$(this).removeClass("highlight");
  });
});
