var name = prompt("What is your name?");
alert(`Welcome ${name}, to the user password validator tool!`);

alert('Password reqirements:');
alert('1) Greater than 10 characters');
alert('2) At least 1 special character');
var password = prompt("Enter a password:");

let count = 0;


for(i=0; i< password.length; i++) {
  if(password[i] === '!' || password[i] === '@' || password[i] === '#' || password[i] === '$' || password[i] === '%' || password[i] === '^' || password[i] === '&' || password[i] === '*' || password[i] === '(' || password[i] === ')' ) {
    count +=1;
  }
   
} 

if(password.length > 10 && count >= 1) {
    alert('Password reqirements met! Great Password');
    } else {
    alert('Failed to meet the password requirements!');
    }
  