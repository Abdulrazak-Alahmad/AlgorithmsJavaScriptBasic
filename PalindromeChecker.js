
let str = prompt("Please enter a word", "");

console.log(isPalindrome(str));
 

function isPalindrome(str) {
   let  reversedStr = []
    for (i = 0; i < str.length; i++) {

        reversedStr[i] = str[str.length - 1 - i]
    }
    reversedStr = reversedStr.join("");

    if (reversedStr === str) {
        return true 
    }

    else {
        return false
    }
}
