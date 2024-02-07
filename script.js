"use Strict";
//length
let str = "JavaScript";
console.log(str.length);
//String Concatenation
let str1 = "Java";
let str2 = "Script";
console.log(str1 + str2);
//Escape Characters- use to add single or dual quotes and backslash-to break a long string
const str3 = "'Koko' is a dog name";
const str4 = '"Koko" is a dog name';
const str5 = "\\Koko\\ is a dog name";
console.log(str3);
console.log(str4);
console.log(str5);

//substring
let str6 = "JavaScript Tutorial";
let substr = str6.substring(0, 10);
console.log(substr);
console.log(str6.length);
//convert uppercase, lowerCase
let str7 = "JavaScript";
let uppercase = str7.toUpperCase();
console.log(uppercase);
let lowerCase = str7.toLocaleLowerCase();
console.log(lowerCase);

//Trimming Whitespace
let str8 = "   Learn JavaScript";
let newstr = str8.trim();
console.log(newstr);
//Access Characters from String
let str9 = "Learn JavaScript";
let charAtIndex = str9[6];
console.log(charAtIndex);
charAtIndex = str9.charAt(6);
console.log(charAtIndex);

//String Comparison

//Palindrome string
function isPalindrome(str) {
  //Remove non-alphanumeric chars and convert to lowercase
  const newstr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  //compare the original string with it's reverse
  const reverse = newstr.split("").reverse().join("");

  return newstr === reverse;
}
const string = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(string));
