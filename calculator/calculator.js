window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}


// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let p=document.getElementById(`loan-amount`);
  let n=document.getElementById(`loan-years`);
  let i=document.getElementById(`loan-rate`);
  p.value= 5000;
  n.value=10;
  i.value=123;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
 let {amount,years,rate}=getCurrentUIValues();
 console.log(amount,years,rate)
 let output=calculateMonthlyPayment({amount,years,rate});
 console.log(output);
 updateMonthly(output)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
let {amount,years,rate}=values;
console.log(amount,years,rate)
let x= Math.pow((1+rate),-years);
let mp = (amount*rate)/(1-x);
console.log(x);
return `${mp.toFixed(2)}`
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let mp =document.getElementById(`monthly-payment`);
  mp.innerText=monthly;
}
