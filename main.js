// Calculations 
const cost = document.getElementById('submit-btn').addEventListener('click', calculate);

function calculate (e){
    document.querySelector('.results').style.display = "none";
const principal = parseFloat(document.getElementById('amount').value);
const interestRate = parseFloat(document.getElementById('interest-rate').value/100/12);
const totalPayments = parseFloat(document.getElementById('loan-duration').value);
const monthlyPayments = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total');
const interest = document.getElementById('interest-paid');

// Monthly payment
const step100 = 1+interestRate;
const step101 = Math.pow(step100, totalPayments);
const step102 = step101*interestRate;
// 
const step103 = step101-1;
const step104 = step102/step103;
const M = step104*principal;
monthlyPayments.value = M.toFixed(2);

// Total payment
const step1 = M*totalPayments;
totalPayment.value = step1.toFixed(2);

// Interest paid
const I = step1-principal;
interest.value = I.toFixed(2);



// Displaying error
if(monthlyPayments.value == ''){
// Removing results
// Showing loader
    document.querySelector('.loader').style.display = "block";
    setTimeout(loading, 2500);

    function loading (){
    document.querySelector('.loader').style.display = "none";  
}
    setTimeout(activate, 2500);
    setTimeout(error, 5500);
    e.preventDefault();
}else{
    setTimeout(displayResults, 2500);
    e.preventDefault();
}

function error(){
    document.querySelector('.error').style.display = "none";
}

function activate (){
    document.querySelector('.error').style.display = "block";
}

function displayResults (){
    document.querySelector('.results').style.display = "block";
}

document.querySelector('.loader').style.display = "block";
setTimeout(loading, 2500);

function loading (){
document.querySelector('.loader').style.display = "none";  
}



}