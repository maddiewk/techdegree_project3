// when the page loads give focus to the first text field
  document.getElementById("name").focus();

// hide the "other-title" text field
// if "other" option is selected, show text field

function showTextField() {
  $("#other-title").hide();

  var selected = $("#title option:selected").val();
  const otherOption = $("#title option[value='other']");

    if (selected == otherOption) {
      $("#other-title").show();
  }
}

showTextField();
