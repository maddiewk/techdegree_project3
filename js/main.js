// when the page loads give focus to the first text field
  document.getElementById("name").focus();

// hide the "other-title" text field
// if "other" option is selected, show text field

function showTextField() {
  $("#other-title").hide();

$("#title").click(function() {
  var $selected = $("#title option:selected").text();
  if( $selected === "Other") {
    $("#other-title").show();
  } else {
    $("#other-title").hide();
  }
  });
}

showTextField();
