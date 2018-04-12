// when the page loads give focus to the first text field
document.getElementById("name").focus();

// hide the "other-title" text field
// if "other" option is selected, show text field

$("#other-title").hide();

$("#title").change(function() {
  var $selected = $("#title option:selected").text();
    if( $selected === "Other") {
      $("#other-title").show();
  } else {
      $("#other-title").hide();
  }
});

// function to hide or display color menus depending on user's selection
$("#design").change(function() {
  const cornflowerBlue = $("#color option:eq(0)");
  const slateGrey = $("#color option:eq(1)");
  const gold = $("#color option:eq(2)");
  const tomato = $("#color option:eq(3)");
  const steelBlue = $("#color option:eq(4)");
  const dimGrey = $("#color option:eq(5)");

  var $selectColor = $("#design option:selected").text();

  if( $selectColor === "Theme - JS Puns" ) {
    tomato.hide();
    steelBlue.hide();
    dimGrey.hide();
  } else if ( $selectColor === "Theme - I &#9829; JS" ) {
    cornflowerBlue.hide();
    slateGrey.hide();
    gold.hide();
  }

});
