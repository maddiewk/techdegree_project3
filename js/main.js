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
// function disableCheckbox() {
//   const $jsFrameworks = $(".activities input[name='js-frameworks']");
//   const $express = $(".activities input[name='express']");
//   const $library = $(".activities input[name='js-libs']");
//   const $node = $(".activities input[name='node']");
//
//   $(".activities :checkbox").change(function() {
//   // disable/enable options 2 and 4 when either is checked
//     if ( $jsFrameworks.prop("checked") === true ) {
//       $express.attr("disabled", true);
//       $express
//     } else {
//       $express.attr("disabled", false);
//     }
//     if ( $express.prop("checked") === true ) {
//       $jsFrameworks.attr("disabled", true);
//     } else {
//       $jsFrameworks.attr("disabled", false);
//     }
//     // disable/enable options 3 and 5 when either is checked
//     if( $library.prop("checked") === true ) {
//       $node.attr("disabled", true);
//     } else {
//       $node.attr("disabled", false);
//     }
//     if ( $node.prop("checked") === true ) {
//       $library.attr("disabled", true);
//     } else {
//       $library.attr("disabled", false);
//     }
//   });
// }
//
// disableCheckbox();


// create a new html element and keep a running total of activities chosen

function addTotal() {


}









function disableCheckbox() {
  const $jsFrameworks = $(".activities input[name='js-frameworks']");
  const $express = $(".activities input[name='express']");
  const $library = $(".activities input[name='js-libs']");
  const $node = $(".activities input[name='node']");

    $(".activities :checkbox").change(function() {
      $(".activities").each(function () {
        if ( $(this).prop("checked") === true) {
          $(this).attr("disabled", true);
        }
      })
  });
}
disableCheckbox();

//   const $jsFrameworks = $(".activities input[name='js-frameworks']");
//   const $express = $(".activities input[name='express']");
//   const $library = $(".activities input[name='js-libs']");
//   const $node = $(".activities input[name='node']");
//
//   $(".activities :checkbox").change(function() {
//   // disable/enable options 2 and 4 when either is checked
//     if ( $jsFrameworks.prop("checked") === true ) {
//       $express.attr("disabled", true);
//       $express
//     } else {
//       $express.attr("disabled", false);
//     }
//     if ( $express.prop("checked") === true ) {
//       $jsFrameworks.attr("disabled", true);
//     } else {
//       $jsFrameworks.attr("disabled", false);
//     }
//     // disable/enable options 3 and 5 when either is checked
//     if( $library.prop("checked") === true ) {
//       $node.attr("disabled", true);
//     } else {
//       $node.attr("disabled", false);
//     }
//     if ( $node.prop("checked") === true ) {
//       $library.attr("disabled", true);
//     } else {
//       $library.attr("disabled", false);
//     }
//   });
// }
