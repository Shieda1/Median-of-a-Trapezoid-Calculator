// https://calculator.swiftutors.com/median-of-a-trapezoid-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const lengthofMedianofTrapezoidRadio = document.getElementById('lengthofMedianofTrapezoidRadio');
const lengthofABRadio = document.getElementById('lengthofABRadio');
const lengthofCDRadio = document.getElementById('lengthofCDRadio');

let lengthofMedianofTrapezoid;
let lengthofAB = v1;
let lengthofCD = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

lengthofMedianofTrapezoidRadio.addEventListener('click', function() {
  variable1.textContent = 'Length of AB';
  variable2.textContent = 'Length of CD';
  lengthofAB = v1;
  lengthofCD = v2;
  result.textContent = '';
});

lengthofABRadio.addEventListener('click', function() {
  variable1.textContent = 'Length of Median of Trapezoid';
  variable2.textContent = 'Length of CD';
  lengthofMedianofTrapezoid = v1;
  lengthofCD = v2;
  result.textContent = '';
});

lengthofCDRadio.addEventListener('click', function() {
  variable1.textContent = 'Length of Median of Trapezoid';
  variable2.textContent = 'Length of AB';
  lengthofMedianofTrapezoid = v1;
  lengthofAB = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(lengthofMedianofTrapezoidRadio.checked)
    result.textContent = `Length of Median of Trapezoid = ${computeLengthofMedianofTrapezoid().toFixed(2)}`;

  else if(lengthofABRadio.checked)
    result.textContent = `Length of AB = ${computeLengthofAB().toFixed(2)}`;

  else if(lengthofCDRadio.checked)
    result.textContent = `Length of CD = ${computeLengthofCD().toFixed(2)}`;
})

// calculation

function computeLengthofMedianofTrapezoid() {
  return (Number(lengthofAB.value) + Number(lengthofCD.value)) / 2;
}

function computeLengthofAB() {
  return (Number(lengthofMedianofTrapezoid.value) * 2) - Number(lengthofCD.value);
}

function computeLengthofCD() {
  return (Number(lengthofMedianofTrapezoid.value) * 2) - Number(lengthofAB.value);
}