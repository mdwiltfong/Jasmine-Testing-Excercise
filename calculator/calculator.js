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
  let loan_amount=document.getElementById(`loan-amount`);
  let loan_years=document.getElementById(`loan-years`);
  let loan_rate=document.getElementById(`loan-rate`);
  loan_amount.setAttribute(`placeholder`,`$5000`);
  loan_years.setAttribute(`placeholder`,`10`);
  loan_rate.setAttribute(`placeholder`,`123`)
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let p=loan_amount.value;
  let i=loan_rate.value/12;
  let n=loan_years.value;

  return [p,i,n]
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
let {p,i,n}=values;
let x= (1+i)^(-n);
let mp = (p*i)/(1-x);
return `${mp.toFixed(2)}`
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let mp =document.getElementById(`monthly-payment`);
  mp.innerText=monthly;
}
