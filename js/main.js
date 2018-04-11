// when the page loads give focus to the first text field
  document.getElementById("name").focus();

// hide the "other-title" text field
// if "other" option is selected, show text field

  $("#other-title").hide();

function showTextField() {
  var selected = $("#title option:selected").val();

    if (selected == "Other") {
      $("#other-title").show();
  }
}

showTextField();
