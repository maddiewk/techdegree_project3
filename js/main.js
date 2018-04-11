// when the page loads give focus to the first text field
  document.getElementById("name").focus();

// hide the "other-title" text field
// if "other" option is selected, show text field

$("#other-title").hide();
function check() {
let selectOption = getElementById("title").value;
if(selectOption === "other") {
  $("#other-title").show();
}
}
check();
