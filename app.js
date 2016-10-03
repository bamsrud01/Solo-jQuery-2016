/*  Function to append a cube of the appropriate color to the DOM.  */
function appendCube(cubeColor) {
  var $cube = $('<div class="color-cube"></div>');      //  Create a general cube div.
  $cube.addClass(cubeColor);                            //  Add a class of the appropriate color to the cube div.
  $('.container').append($cube);                        //  Append the cube div to the container.
}

/*  Function to increase the count of in the appropriate counter  */
function increaseCount(countColor) {
  var $span = $('#' + countColor + ' span');            //  Find the span of the appropriate color paragraph.
  var $count = parseInt($span.text()) + 1;              //  Convert the text within the span to a number and add 1.
  $span.text($count);                                   //  Set the value of the text to the new value.
}

/*  jQuery Ready  */

$(document).ready(function(){

  /*  Click handler for the buttons.  */
  $('.color-button').on('click', function() {
    var $color = $(this).attr('data-color');            //  Find the color of the button clicked.
    appendCube($color);                                 //  Append a cube of the appropriate color.
    increaseCount($color);                              //  Increase the counter for that color.
  });

});
