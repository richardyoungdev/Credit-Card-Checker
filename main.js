// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Add your functions below:
// step 3

const validateCred = (arr)=>{
// Print original array.
  console.log("Original array: " + arr); 

// How many elements in the array?
  let length = arr.length
  console.log(`Array has ${length} elements`) 

// Copy array to NOT mutate values of original array.
  let newArray = arr.slice();
  console.log("Unmutated new array: " + newArray);

// Reverse the new array.
  let reverseArray = newArray.reverse();
  console.log("Reverse array: " + reverseArray);

// Multiply odd digits by 2.
  let doubleArray = [];

  const multiply = (reverseArray)=> {
    for (let i = 0; i < reverseArray.length; i++) {
      if (i % 2 === 0) {
        doubleArray.push(reverseArray[i]);
      }
      else {
        doubleArray.push(reverseArray[i] * 2)
      }
    }
  }

  multiply(reverseArray);
  console.log("Double array: " + doubleArray);

// Subtract 9 from number if number is over 9.
  let finalArray = [];

  const subtract = (doubleArray)=> {
    for (let j = 0; j < doubleArray.length; j++) {
      if (doubleArray[j] > 9) {
        doubleArray[j] = doubleArray[j] - 9;
        finalArray.push(doubleArray[j]);
      }
      else {
        finalArray.push(doubleArray[j]);
      }
    }
  }
  subtract(doubleArray);
  console.log("Final array: " + finalArray);

// Add up all the numbers in the array.
  const sum = finalArray.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  console.log("Sum from array: " + sum); 

// Test if sum modulo 10 is 0.
  if(sum % 10 === 0) {
    console.log("Credit card is valid.");
    return true
  }
  else {
    console.log("Credit card is invalid.")
    return false
  }
};

// Call validateCred() with any valid or invalid array as an argument.
validateCred(valid1);


// step 4
let invalidCards = [];

const findInvalidCard = (arr)=>{

  for(let k = 0; k < arr.length; k++) {
    validateCred(arr[k]);
      if(validateCred(arr[k]) === false) {
    invalidCards.push(arr[k])
      }
  }
  console.log(invalidCards)
  
  let numOfInvalidCards = invalidCards.length
  console.log("Number of Invalid Cards: " + numOfInvalidCards);
};

findInvalidCard(batch);

// step 5

// Push list of companies into an array.
let companyList = [];

// Identify the credit card companies that have possibly issued these faulty numbers.
const idInvalidCardCompanies = (arr)=>{
  for (let l = 0; l < arr.length; l++) {
    switch(arr[l][0]) {
      case 3:
        console.log("Amex");
        companyList.push("Amex")
        break;
      case 4:
        console.log("Visa");
        companyList.push("Visa")
        break;
      case 5:
        console.log("Mastercard");
        companyList.push("Mastercard")
        break;
      case 6:
        console.log("Discover");
        companyList.push("Discover")
        break;
      default: 
        console.log("Company not found");
        break;
    }
  }

  // Print array of companies
  console.log(companyList);

  let uniqueList = [];

  const oneCompanyName = (companyList)=>{
    for(let m = 0; m < companyList.length; m++) {
      if(uniqueList.indexOf(companyList[m]) === -1){
        uniqueList.push(companyList[m])
      }
    }
    return uniqueList;
  }
  // Print list of unique companies--no duplicates.
  console.log(oneCompanyName(companyList));

};

idInvalidCardCompanies(invalidCards);




