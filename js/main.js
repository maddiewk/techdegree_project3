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
  let $selectColor = $("#design option:selected").text();

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


// create new element and keep a running total of activities chosen

// use an event handler on the "activities" fieldset to handle change events

// assign a variable to hold the running total and update it using if statements

// use on "click" function to immediately display the total cost as the user selectors
// the first checkbox - should be outside the change function


// $(".activities :checkbox").change(function () {
//   const text = $(".activities input:eq(0)");
//
//   if (text.is(":checked") === true ) {
//     alert("Yay!");
//     console.log("Hello");
//   }
// });
// const firstActivity = $(".activities label:eq(0)").text();
// const oneHundred = $(".activities label").slice(1, 6).text();

// $(".activities label").each(function(index) {
//   const text = $(this).text();
//   console.log(index + ": " + text);
//
// });


$(".activities :checkbox").change(function (event) {
  calculateTotal(this);
});

function calculateTotal() {
  let totalPrice = 0;
  // const checkbox = $(this);
  const allActivities = $(".activities :checkbox");
  const isChecked = allActivities.is(":checked");
  const checkedLabel = allActivities.parent();
  const labelText = checkedLabel.text();
  const number = labelText.indexOf('$') + 1;
  const cost = labelText.slice(number);
  // console.log(cost);

  if (isChecked) {
    totalPrice += parseInt(cost);
  } else {
    totalPrice -= parseInt(cost);
  }
  console.log(totalPrice);


}
