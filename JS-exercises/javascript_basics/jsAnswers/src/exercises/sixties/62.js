const question = `62. Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.`;
const blockcode =`<code>
function right_three(string) {
  return string.slice(string.length - 3)
}

console.log(right_three("Python")); // honPyt
console.log(right_three("JavaScript")); // iptJavaScr
console.log(right_three("Hi")); // Hi
    </code>`;

function right_three(string) {
  return string.slice(string.length - 3)
}

export { question, blockcode }
