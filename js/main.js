// when the page loads give focus to the first text field
  document.getElementById("name").focus();

// hide the "other-title" text field
// if "other" option is selected, show text field




function check() {
  $("#other-title").hide();
  var selected = $("#title").val();
  const otherOption = $( "option[value='other']" );

    if (selected == otherOption) {
      $("#other-title").show();
  }
}
check();
