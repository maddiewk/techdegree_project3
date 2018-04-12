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

  $("#color option[value='cornflowerblue']").remove();
  $("#color option[value='darkslategrey']").remove();
  $("#color option[value='gold']").remove();
  $("#color option[value='tomato']").remove();
  $("#color option[value='steelblue']").remove();
  $("#color option[value='dimgrey']").remove();
  $("#color").append("<option value='select'>Please select a T-shirt theme</option>");
  
$("#design").change(function() {

  const puns = $("#design option[value='js puns']").text();
  const heart = $("#design option[value='heart js']").text();
  var $selectColor = $("#design option:selected").text();
  const message = "<option value='select'>Please select a T-shirt theme</option>";

  $("#color").children().remove();
  $("#color").append(message);


  if( $selectColor === puns ) {
    $("#color").append("<option value='cornflowerblue'>Cornflower Blue</option>");
    $("#color").append("<option value='darkslategrey'>Slate Grey</option>");
    $("#color").append("<option value='gold'>Gold</option>");
  }
  if ($selectColor === heart ) {
    $("#color").append("<option value='tomato'>Tomato</option>");
    $("#color").append("<option value='steelblue'>Steel Blue</option>");
    $("#color").append("<option value='dimgrey'>Dim Grey</option>");
  }
  // if($selectColor === "Select Theme") {
  //   $("#color").append("<option value='select'>Please select a T-shirt theme</option>");
  // }

});
