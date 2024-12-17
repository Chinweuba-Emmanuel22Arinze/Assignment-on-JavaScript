//Finding the largest of a three number

function findLargest(numbers) {
   
    const uniqueNumbers = new Set(numbers);
    const sortedUniqueNumbers = Array.from(uniqueNumbers).sort((a, b) => b - a);
    return sortedUniqueNumbers.slice(0, 3);
}
const nums = [5, 1, 10, 2, 7, 10];
const largestThree = findLargest(nums);
console.log(largestThree); 

// Factorial Calculation
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}
console.log(factorial(5)); 
console.log(factorial(0)); 
console.log(factorial(-3)); 


//Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("hello"));
  console.log(reverseString("JavaScript")); 
  console.log(reverseString("12345")); 

// count vowels in a string

  function countVowels(str) {
    const vowelPattern = /[aeiouAEIOU]/g;
    const matches = str.match(vowelPattern);
    return matches ? matches.length : 0;
}
console.log(countVowels("hello"));         
console.log(countVowels("JavaScript"));     
console.log(countVowels("12345"));          
console.log(countVowels("OpenAI ChatGPT!"));

//Sum of Array Elements
function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            total += arr[i]; 
        }
    }

    return total; 
}
console.log(sumArray([1, 2, 3, 4]));          
console.log(sumArray([-1, -2, -3]));           
console.log(sumArray([1, 'a', true, null]));   
console.log(sumArray([]));                      


  

