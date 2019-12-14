const errorBgColor = '#f99';
const bgColor = 'white';

var strErrorMsg;

function validate() {
  console.log('>>>>> test123');
  strErrorMsg = '';

  isAlphabet(document.getElementById('firstname'), 'First name');
  notEmpty(document.getElementById('lastname'), 'Last name');

  notEmpty(document.getElementById('email'), 'Email');

  notEmpty(document.getElementById('streetName'), 'Street name');
  notEmpty(document.getElementById('city'), 'City');

  notEmpty(document.getElementById('state'), 'State');
  isZipCode(document.getElementById('zipCode'), 'Zip Code');

  // telephone
  isAreaCode(document.getElementById('areaCode'), 'Area Code');
  isThreeNumber(document.getElementById('phonePreffix'), 'Phone Preffix');
  isFourNumber(document.getElementById('phoneSuffix'), 'Phone Suffix');

  // final

  // final
  if (strErrorMsg === '') {
    alert('Form is ready for submission.');
    return false; // true
  }

  alert('Errors encountered:\n' + strErrorMsg);
  return false;
} // end of validate_form()

// helper functions
function notEmpty(element, msg) {
  element.style.backgroundColor = bgColor;
  if (element.value == '') {
    strErrorMsg += `${msg}\n`;
    element.style.backgroundColor = errorBgColor;
  }
}

function isAlphabet(element, msg) {
  element.style.backgroundColor = bgColor;
  var alphaExp = /^[a-zA-Z]+$/;
  if (!alphaExp.test(element.value)) {
    strErrorMsg += `${msg}\n`;
    element.style.backgroundColor = errorBgColor;
  }
}

function isStreetNumber(element, msg) {
  element.style.backgroundColor = bgColor;
  var streetNumberExp = /^[1-9][0-9]*$/;
  if (!streetNumberExp.test(element.value)) {
    strErrorMsg += `${msg}\n`;
    element.style.backgroundColor = errorBgColor;
  }
}

function isStreetName(element, msg) {
  element.style.backgroundColor = bgColor;
  var streetNameExp = /^[A-z]+(\s[A-z0-9,-\.]*)*$/;
  if (!streetNameExp.test(element.value)) {
    strErrorMsg += `${msg}\n`;
    element.style.backgroundColor = errorBgColor;
  }
}

function isZipCode(element, msg) {
  element.style.backgroundColor = bgColor;
  var zipExp = /^[0-9]{5}(?:-[0-9]{4})?$/;
  if (!zipExp.test(element.value)) {
    strErrorMsg += `${msg}\n`;
    element.style.backgroundColor = errorBgColor;
  }
}

function isAreaCode(element, msg) {
  element.style.backgroundColor = bgColor;
  var areaCodeExp = /^[2-9][0-9]{2}$/;
  if (!areaCodeExp.test(element.value)) {
    strErrorMsg += `${msg}\n`;
    element.style.backgroundColor = errorBgColor;
  }
}

function isThreeNumber(element, msg) {
  element.style.backgroundColor = bgColor;
  var threeNumberExp = /^[0-9]{3}$/;
  if (!threeNumberExp.test(element.value)) {
    strErrorMsg += `${msg}\n`;
    element.style.backgroundColor = errorBgColor;
  }
}

function isFourNumber(element, msg) {
  element.style.backgroundColor = bgColor;
  var fourNumberExp = /^[0-9]{4}$/;
  if (!fourNumberExp.test(element.value)) {
    strErrorMsg += `${msg}\n`;
    element.style.backgroundColor = errorBgColor;
  }
}
// end of helper functions
