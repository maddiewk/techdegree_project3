// variables used in global scope
const nameField = $("#name");
const emailField = $("#mail");
const otherTextField = $("#other-title");
const cardNumber = $("#cc-num");
const zipInput = $("#zip");
const cVVInput = $("#cvv");


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
  let selectedPayment = $("#payment option:selected").text();

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

/* =========================> Form Validation <======================= */
// name field can't be blank
function nameInput() {
  let nameIn = $("#name").val();

  if (nameIn === "") {
    nameField.css("border-color", "red");
    $("#name").before("<div id='name-error' style='color:red;'>Name Required</div>");
  } else {
    nameField.css("border-color", "");
    $("#name-error").remove();
  }
  const nameJ = document.getElementById("name");
  nameJ.oninput = function () {
    nameInput();
  }
}


// email must be correctly formatted
function invalidEmail() {
  let valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
  let emailInput = $("#mail").val();

  if (emailInput === "") {
    $("#mail").before("<div id='email-error' style='color:red;'>Email Required</div>");
  } else {
    $("#email-error").hide();
  }

  if (valid.test(emailInput)) {
    emailField.css("border-color", "#c1deeb");
  } else {
    emailField.css("border-color", "red");
  }
}
// must select at least one checkbox from the Activities portion
function validateCheckbox() {
  let n = $("input:checked").length;
  console.log(n);
  if (n === 0) {
    // append a message in red right next to the Activities legend
    $(".activities legend").after("<div id='checkbox-error' style='color:red;'>Please choose at least one activity</div>");
  } else {
    $("#checkbox-error").remove();
  }
}
// set up error message for payment field
const $ccMessage = "<div class='error' id='cc-error' style='color:red;'>All fields required</div>";
$("#credit-card").before($ccMessage);
$("#cc-error").remove();

//validate payment information fields
function validateCreditCard() {
  const creditCardOption = $("#payment option[value='credit card']");
  if (creditCardOption.is(':selected')) {
    if (cardNumber.val().length < 13 || cardNumber.val().length > 16 || parseInt(isNaN(cardNumber.val()))) {
      $("#cc-num").css("border-color", "red");
      $("#credit-card").before($ccMessage);

    } else {
      $("#cc-num").css("border-color", "#c1deeb");
      $("#cc-error").remove();
    }
  }
}

function validateZip () {
  if (creditCardOption.is(':selected')) {
    if (zipInput.val().length != 5 || parseInt(isNaN(zipInput.val()))) {
      $("#zip").css("border-color", "red");
      $("#credit-card").before($ccMessage);
    } else {
      $("#zip").css("border-color", "#c1deeb");
      $("#cc-error").remove();
    }
  }
}
function validateCVV () {
  if (creditCardOption.is(':selected')) {
    if (cVVInput.val().length != 3 || parseInt(isNaN(cVVInput.val()))) {
      $("#cvv").css("border-color", "red");
      $("#credit-card").before($ccMessage);
    } else {
      $("#cvv").css("border-color", "#c1deeb");
      $("#cc-error").remove();
    }
  }
}

// create one function that calls all functions created above
function validateAllForms(e) {
  nameInput();
  invalidEmail();
  validateCheckbox();
  validateCreditCard();
  validateZip();
}

// event listener on the "Register" submit button

const submitButton = $("button");
submitButton.click(function(e) {
  // if ($("body").hasClass('error')) {
  //   e.preventDefault();
  // }
  // $("body").each(function () {
  //   if ($(this).hasClass('error')) {
  //     e.preventDefault();
  //   }
  // });
  e.preventDefault();

});
