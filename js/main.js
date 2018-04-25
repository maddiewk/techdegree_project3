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
      otherTextField.show().focus();
  } else {
      otherTextField.hide();
  }
});

// hide color menu until a theme is chosen
$("#colors-js-puns").hide();

// hide or display color menus depending on user's selection
$("#design").change(function() {
// variables to hold text of each design option and the selected text
  const puns = $("#design option[value='js puns']").text();
  const heart = $("#design option[value='heart js']").text();
  let $selectColor = $("#design option:selected").text();

  // remove all colors so they can be appended in the correct grouping
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

// disable or enable activities if they conflict with each other
  $(".activities :checkbox").change(function() {
  // variables holding each activity that conflicts with another
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

// calculate total cost of each activity
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

/* ====================> Payment Section <======================= */

// variables for Bitcoin and PayPal select options
const creditCard = $("#credit-card");
const payPal = $("p:contains('PayPal')");
const bitCoin = $("p:contains('Bitcoin')");

// display credit card option as default
$("#payment option[value='credit card']").attr("selected", true);
payPal.hide();
bitCoin.hide();

// show only one payment option at a time
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
  $("#name-error").remove();

  if (nameIn === "") {
    nameField.addClass('error').css("border-color", "red");
    $("#name").before("<div class='error' id='name-error' style='color:red;'>Name Required</div>");
  } else {
    nameField.css("border-color", "");
    $("#name-error").remove();
    nameField.removeClass('error');
  }
}

// email must be correctly formatted
function invalidEmail() {
  let valid = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailInput = $("#mail").val();
  $("#email-error").remove();
  $("#regex").remove();

  if (emailInput === "") {
    emailField.addClass('error').css("border-color", "red");
    $("#mail").before("<div class='error' id='email-error' style='color:red;'>Email Required</div>");
  } else if  (!emailInput.match(valid)) {
    $("#mail").before("<div class='error' id='regex' style='color:red;'>Invalid Email</div>");
    emailField.addClass("error").css("border-color", "red");
  } else  {
    emailField.css("border-color","");
    $("#email-error").remove();
    $("#regex").remove();
    emailField.removeClass('error');
  }
}
// must select at least one checkbox from the Activities portion
function validateCheckbox() {
  let n = $("input:checked").length;
  $("#checkbox-error").remove();

  if (n === 0) {
    $(".activities legend").after("<div class='error' id='checkbox-error' style='color:red;'>Please choose at least one activity</div>");
  } else {
    $("#checkbox-error").remove();
  }
}

// set up error messages for payment field
const $ccMessage = "<div class='error' id='cc-error' style='color:red;'>Please enter a valid credit card number</div>";
const $zipMessage = "<div class='error' id='zip-error' style='color:red;'>Please enter zip</div>";
const $cvvMessage = "<div class='error' id='cvv-error' style='color:red;'>Please enter CVV</div>";
const creditCardOption = $("#payment option[value='credit card']");

//validate credit card information fields
function validateCreditCard() {
  $("#cc-error").remove();

    if ( (cardNumber.val().length < 13 || cardNumber.val().length > 16) || (isNaN(cardNumber.val())) ) {
      $("#cc-num").addClass("error").css("border-color", "red");
      $("label[for='cc-num']").after($ccMessage);
    } else {
      $("#cc-num").removeClass("error").css("border-color", "");
      $("#cc-error").remove();
    }
  }

function validateZip () {
  $("#zip-error").remove();

    if (zipInput.val().length != 5 || isNaN(zipInput.val())) {
      $("#zip").addClass("error").css("border-color", "red");
      $("label[for='zip']").after($zipMessage);
    } else {
      $("#zip").removeClass("error").css("border-color", "");
      $("#zip-error").remove();
    }
  }

function validateCVV () {
  $("#cvv-error").remove();

    if ((cVVInput.val().length != 3 || isNaN(cVVInput.val()))) {
      $("#cvv").addClass("error").css("border-color", "red");
      $("label[for='cvv']").after($cvvMessage);
    } else {
      $("#cvv").removeClass("error").css("border-color", "");
      $("#cvv-error").remove();
    }
  }

// create function that calls all validation functions
// if any errors are present in the form, return true
function validateAllForms(e) {
  nameInput();
  invalidEmail();
  validateCheckbox();
  if ($("#payment option[value='credit card']").is(":selected")) {
  validateCreditCard();
  validateZip();
  validateCVV();
}
  $("#button-error").remove();

  let allDivs = document.querySelectorAll("div");
  for (let i = 0; i < allDivs.length; i += 1) {
    if (allDivs[i].className === "error") {
      $("button").after("<div class='error' id='button-error' style='color:red;'>Please fill in all required fields.</div>");
      return true;
    }
  }
}

// validate name field and email field in real time
const nameJ = document.getElementById("name");
nameJ.oninput = function () {
  nameInput();
}
const mailInput = document.getElementById("mail");
mailInput.oninput = function () {
  invalidEmail();
}

// event listener on the "Register" submit button
$("form").on("submit", function(e) {

  let validationError = validateAllForms();
    if (validationError) {
      e.preventDefault();
      return false;
    }
});
