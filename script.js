//DOM Elements
const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numberEL = document.getElementById('number');
const symbolEL = document.getElementById('symbol');
const generateEL = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  Symbol: getRandomSymbol,
};


//Generate Password
generateEL.addEventListener('click', () => {
  const length = +lengthEL.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEL.checked;
  const hasNumber = numberEL.checked;
  const hasSymbol = symbolEL.checked;

  resultEL.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

//password to clipboard
clipboardEL.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEL.innerText;

  if(!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password has been copied to clipboard!')
})

//Generate R.A.P
function generatePassword(lower, upper, number, symbol, length) {
  //1. Init pw var

  let generatedPassword = '';

  const typesCount = lower + upper + number + symbol;
  
  console.log( 'typesCount: ', typesCount);

  const typesArr = [{lower}, {upper}, {number}, {symbol}]
  (item => Object.values(item)[0]
  );
  
  console.log('typesArr: ', typesArr);

  if(typesCount === 0) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log('funcName: ', funcName);

      generatedPassword += randomFunc[funcName]();
      });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// Generator Functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() *10) + 48);
}
function getRandomSymbol() {
  const symbols = '~!@#$%^&*()_+?<>';
  return symbols[Math.floor(Math.random() * symbols.length)]
}


console.log(getRandomlower());


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
