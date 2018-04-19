// variables used in global scope
const nameField = $("#name");
const emailField = $("#mail");
const otherTextField = $("#other-title");

// when the page loads give focus to the first text field
nameField.focus();

// hide the "other-title" text field
otherTextField.hide();
// if "other" option is selected, show text field
$("#title").change(function() {
  var $selected = $("#title option:selected").text();
    if( $selected === "Other") {
      otherTextField.show();
  } else {
      otherTextField.hide();
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
// variables to hold text of each design option and the selected text
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
  // variables holding each activity that is conflicts with another
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
// function to calculate total cost of each activity
let totalPrice = 0;

function calculateTotal(currentCheckbox) {

  const isChecked = currentCheckbox.is(':checked');
  const checkedLabel = currentCheckbox.parent();
  const labelText = checkedLabel.text();
  const number = labelText.indexOf('$') + 1;
  const cost = labelText.slice(number);

  if (isChecked) {
    totalPrice += parseInt(cost);
  } else {
    totalPrice -= parseInt(cost);
  }
  $("#total").remove();
  if (totalPrice > 0) {
    $(".activities").append("<legend id='total'>Total: $" + totalPrice + "</legend>");
  }
}
// when activities are selected, the calculateTotal function is called
$(".activities :checkbox").on("change", function() {
  calculateTotal($(this));
});

// payment section
// variables for Bitcoin and PayPal select input options
const creditCard = $("#credit-card");
const payPal = $("p:contains('PayPal')");
const bitCoin = $("p:contains('Bitcoin')");
// display credit card option as default
$("#payment option[value='credit card']").attr("selected", true);
// first, hide everything but the credit card option
payPal.hide();
bitCoin.hide();

// when the "Bitcoin" option is selected that info is shown and the rest hidden
// when "PayPal" option is selected that info is shown and the rest hidden

$("#payment").change(function() {
  const selectedPayment = $("#payment option:selected").text();

  if (selectedPayment == "PayPal") {
    payPal.show();
    creditCard.hide();
    bitCoin.hide();
  } else if(selectedPayment == "Bitcoin") {
    payPal.hide();
    creditCard.hide();
    bitCoin.show();
  } else if(selectedPayment == "Credit Card") {
    payPal.hide();
    bitCoin.hide();
    creditCard.show();
  } else {
    payPal.hide();
    creditCard.hide();
    bitCoin.hide();
  }
})

// form validation
// name field can't be blank
function nameInput() {
  let nameIn = $("#name").val();
  // const nameErrorMessage = "<h4>Please enter your name.</h4>";

  if (nameIn === "") {
    nameField.css("border-color", "red");
  } else {
    nameField.css("border-color", "#c1deeb");
  }
}

// email must be correctly formatted
function invalidEmail() {
  let valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
  let emailInput = $("#mail").val();

  if (valid.test(emailInput)) {
    emailField.css("border-color", "#c1deeb");
  } else {
    emailField.css("border-color", "red");
  }
}
// must select at least one checkbox from the Activities portion

function validateCheckbox() {
  let n = $("input:checked").length;

  if (n === 0) {
    $(".activities legend").css("color", "red");
  } else {
    $(".activities legend").css("color", "#184f68");
  }
}
// If the selected payment option is "Credit Card," make sure the user has supplied
// a credit card number, a zip code, and a 3 number CVV value before the form can be submitted
// credit card field should only accept a number between 13 and 16 digits
// zipcode should be 5 digits long
// CVV should be exactly 3 digits long
function validateCreditCard() {
  
}
// provide visual indication when there's an error
// there should be an error indication for the name field, email field, 'Register for Activities'
// checkboxes, credit card number, zip code, and CVV







// event listener on the "Register" submit button

const submitButton = $("button");
submitButton.click(function(e) {
  e.preventDefault();
  nameInput();
  invalidEmail();
  validateCheckbox();
});
