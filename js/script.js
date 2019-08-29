console.log('My javascript is working');
$(document).ready(function(){
  $('.open').click(function () {
    $(this).next('.sub-menu').toggle();
  });
  $( function() {
    $( "#accordion" ).accordion();
  } );
  $( function() {
    $( "#selectable" ).selectable();
  } );
});
