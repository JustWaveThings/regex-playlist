// validation script here
var reg = /[a-z]/gi;

const inputs = document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{10}$/
};

// validation function

function validate(field, regex) {
   // console.log(regex.test(field.value));
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
       // console.log(e.target.attributes.name.value);
        validate(e.target, patterns['telephone']);
  })
}) 
