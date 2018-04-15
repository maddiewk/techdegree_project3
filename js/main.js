// when the page loads give focus to the first text field
document.getElementById("name").focus();

// hide the "other-title" text field
$("#other-title").hide();
// if "other" option is selected, show text field
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

$("#colors-js-puns").hide();
$("#design").change(function() {

  const puns = $("#design option[value='js puns']").text();
  const heart = $("#design option[value='heart js']").text();
  var $selectColor = $("#design option:selected").text();

  $("#color").children().remove();

  if( $selectColor === puns ) {
    $("#colors-js-puns").show();
    $("#color").append("<option value='cornflowerblue'>Cornflower Blue</option>");
    $("#color").append("<option value='darkslategrey'>Slate Grey</option>");
    $("#color").append("<option value='gold'>Gold</option>");
  }
  if ($selectColor === heart ) {
    $("#colors-js-puns").show();
    $("#color").append("<option value='tomato'>Tomato</option>");
    $("#color").append("<option value='steelblue'>Steel Blue</option>");
    $("#color").append("<option value='dimgrey'>Dim Grey</option>");
  }
  if ($selectColor === "Select Theme") {
    $("#colors-js-puns").hide();
  }
});


// function to disable or enable activities if they conflict with each other as the user selects and deselects

  $(".activities :checkbox").change(function() {
    const jsFrameworksBox = $(".activities input:eq(1)");
    const jsFrameworksText = $(".activities label:eq(1)");
    const expressBox = $(".activities input:eq(3)");
    const expressText = $(".activities label:eq(3)");
    const librariesBox = $(".activities input:eq(2)");
    const librariesText= $(".activities label:eq(2)");
    const nodeBox = $(".activities input:eq(4)");
    const nodeText = $(".activities label:eq(4)");

// disable/enable options 2 and 4 when either is checked
    if ( jsFrameworksBox.is(":checked") === true ) {
      expressBox.prop("disabled", true);
      expressText.css("color", "grey");
    } else {
      expressBox.prop("disabled", false);
      expressText.css("color", "black");
    }
    if ( expressBox.is(":checked") === true ) {
      jsFrameworksBox.prop("disabled", true);
      jsFrameworksText.css("color", "grey");
    } else {
      jsFrameworksBox.prop("disabled", false);
      jsFrameworksText.css("color", "black");
    }
// disable/enable options 3 and 5 when either is checked
    if ( librariesBox.is(":checked") === true ) {
      nodeBox.prop("disabled", true);
      nodeText.css("color", "grey");
    } else {
      nodeBox.prop("disabled", false);
      nodeText.css("color", "black");
    }
    if ( nodeBox.is(":checked") === true ) {
      librariesBox.prop("disabled", true);
      librariesText.css("color", "grey");
    } else {
      librariesBox.prop("disabled", false);
      librariesText.css("color", "black");
    }
  });


// create a new html element and keep a running total of activities chosen
var totalCost = 0;
function addTotal() {
// create <legend> element and append to the fieldset
// update the running total with totalCost variable

  $(".activities :checkbox").click(function(event) {
    // variables for this function
    // each time a box is changed (selected or deselected) add or subtract numbers
      if ($(".activities input:eq(0)").is(":checked") === true ) {
        totalCost += 200;
        activitiesFieldset.append(newElement);
      }

  });
const activitiesFieldset = $(".activities");
var newElement = activitiesFieldset.add("<legend>Total: $</legend>");
newElement.add(parseInt(totalCost));

}
addTotal();
