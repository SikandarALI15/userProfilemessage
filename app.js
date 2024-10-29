alert("Welcome to the user profile!");

var firstName = prompt("Please enter your first name");
var lastName = prompt("Please enter your last name");
var fullName = firstName + " " + lastName;

var age = Number(prompt("Please enter your age"));
var favouriteColor = prompt("What is your favourite color");
var city = prompt("Which city do you live in");

var ageMessage;

if (age >= 18) {
    ageMessage = "You are a young adult.";
} else if (age <= 18) {
    ageMessage = "You are a child.";
} else {
    ageMessage = "Invalid age entered.";
}

var profileMessage = "Hello, " + fullName + "! You are " + age + " years old, live in " + city + 
", and love the color " + favouriteColor + ". " + ageMessage;


alert(profileMessage);
