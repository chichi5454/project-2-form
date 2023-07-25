/** @format */

let contactName = prompt("What is your name?");
console.log(contactName);
alert(`Welcome to our page ${contactName}`);

let h2Element = document.querySelector("#description");
h2Element.textContent = `${contactName}, Thank you for taking the time to help us improve the platform`;
