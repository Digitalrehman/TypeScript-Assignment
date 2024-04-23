"use strict";
// Question No 1
// console.log("My setup is sucessfully Run in my Computer");
// Question No 2
// let PersonName : string = "Abdul Rehman"
// let message :string = "what can i help you"
// console.log(`Hello ${PersonName} ${"How are you?" +message}`);
// Question No 3
// let PersonName : string = "Abdul Rehman"
// let result1 = PersonName.toLowerCase() 
// let result2 = PersonName.toUpperCase() 
// let result3 = PersonName 
// console.log(result1, result2, result3);
// Question N0 4 
// const FamousQuote = (quote: string, author: string): void => {
//     console.log(`${author} once said, "${quote}"`);
// }
// FamousQuote("In the end, it's not the years in your life that count. It's the life in your years.", "Abraham Lincoln");
// Question No 5 
// function composeMessage(quote: string, famousPerson: string): string {
//     return ` The quote by ${famousPerson} is "${quote}"`;
// }
// let famous_person: string = "Abraham Lincoln";
// let message: string = composeMessage("In the end, it's not the years in your life that count. It's the life in your years.", famous_person);
// console.log(message);
// Question No 6
// let personName: string = "\t\n   Jane Smith   \t\n";
// console.log(personName);
// let strippedName: string = personName.trim();
// console.log(strippedName);
// Question No 7 
// Addition operation
// console.log("Addition:");
// console.log("5 + 3 =", 5 + 3);
// Subtraction operation
// console.log("Subtraction:");
// console.log("10 - 2 =", 10 - 2);
// Multiplication operation
// console.log("Multiplication:");
// console.log("4 * 2 =", 4 * 2);
// Division operation
// console.log("Division:");
// console.log("64 / 8 =", 64 / 8);
// Question No 8 
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(64 / 8);
// Question No 9 
// let favoriteNumber: number = 7;
// let message: string = `My favorite number is ${favoriteNumber}.`;
// console.log(message);
// Question No 10
// (Programe No 1)
// Adding comments to the Famous Quote program
// Function to print a famous quote along with its author
// function printFamousQuote(quote: string, author: string): void {
//     console.log(`"${quote}" - ${author}`);
// }
// printFamousQuote("In the end, it's not the years in your life that count. It's the life in your years.", "Abraham Lincoln");
// (Programe No 2)
// Adding comments to the Stripping Names program
// Store a person's name with whitespace characters at the beginning and end, then strip the whitespace and print the name
// let personName: string = "\t\n   Jane Smith   \t\n";
// console.log(personName);
// let strippedName: string = personName.trim();
// console.log(strippedName);
// Question NO  11
// Store the names of your friends in an array called names
// let names: string[] = ["Ali", "Sahil", "Areeb", "Hamza", "Asad"];
// console.log("Names of my friends:");
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
// Question No 12
// let names: string[] = ["Ali", "Sahil", "Areeb", "Hamza", "Asad"];
// console.log("Greetings to my friends:");
// for (let i = 0; i < names.length; i++) {
//     console.log(`Hello, ${names[i]}! Have a great day!`);
// }
// Question No 13
// let transportationModes: string[] = ["Tesla Model 3", "Honda CBR1000RR", "Toyota Camry", "BMW R1250GS Adventure"];
// console.log("Examples of my favorite modes of transportation:");
// for (let i = 0; i < transportationModes.length; i++) {
//     console.log(`I would like to own a ${transportationModes[i]}.`);
// }
// Question No 14 
// let guestList: string[] = ["Arshad Adil", "Hussain", "Afzal"];
// console.log("Dinner Invitation:");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
// }
// Question No 15
// let guestList: string[] = ["Arshad Adil", "Hussain", "Afzal"];
// console.log("Dinner Invitation:");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
// }
// let unableToAttend: string = guestList[1];
// console.log(`Unfortunately, ${unableToAttend} can't make it to the dinner.`);
// guestList[1] = "Akbar Ali"; 
// console.log("Updated Dinner Invitation:");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
// }
// Question No 16
// let guestList: string[] = ["Arshad Adil", "Hussain", "Afzal"];
// console.log("Dinner Invitation:");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
// }
// let unableToAttend: string = guestList[1];
// console.log(`Unfortunately, ${unableToAttend} can't make it to the dinner.`);
// console.log("Updated Dinner Invitation:");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
// }
// console.log("Good news! We found a bigger dinner table.");
// guestList.unshift("Abrar Hossan");
// let middleIndex: number = Math.floor(guestList.length / 2);
// guestList.splice(middleIndex, 0, "Amjad");
// guestList.push("Akhtar Hussain");
// console.log("Additional Dinner Invitation:");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
// }
// Question No 17
// let guestList: string[] = ["Zia", "kabeer", "Atif", "Ishaq", "Ali", "Manam"];
// console.log("Dinner Invitation:");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
// }
// let unableToAttend: string = guestList[1];
// console.log(`Unfortunately, ${unableToAttend} can't make it to the dinner.`);
// guestList[1] = "Shayan";
// console.log("Updated Dinner Invitation:");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
// }
// console.log("Attention: Due to limited space, we can invite only two people for dinner.");
// while (guestList.length > 2) {
//     let removedGuest = guestList.pop();
//     console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
// }
// console.log(`\nDear ${guestList[0]} and ${guestList[1]}, you are still invited to dinner.`);
// guestList.pop();
// guestList.pop();
// console.log("Final guest list:", guestList);
// Question No 18
// Array to store places to visit
// let placesToVisit: string[] = ["Japan", "Italy", "Australia", "Canada", "Brazil"];
// console.log(placesToVisit);
// console.log("Alphabetical order (without modifying original list):");
// console.log([...placesToVisit].sort());
// console.log("Original order (unchanged):");
// console.log(placesToVisit);
// console.log("Reverse alphabetical order (without modifying original list):");
// console.log([...placesToVisit].sort().reverse());
// console.log("Original order (unchanged):");
// console.log(placesToVisit);
// placesToVisit.reverse();
// console.log("Reversed order:");
// console.log(placesToVisit);
// placesToVisit.reverse();
// console.log("Back to original order:");
// console.log(placesToVisit);
// placesToVisit.sort();
// console.log("Sorted in alphabetical order:");
// console.log(placesToVisit);
// placesToVisit.sort((a, b) => b.localeCompare(a));
// console.log("Sorted in reverse alphabetical order:");
// console.log(placesToVisit);
// Question No 19 
// let guestList: string[] = ["Leonardo da Vinci", "Albert Einstein", "Nelson Mandela", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"];
// console.log(`You are inviting ${guestList.length} people to dinner.`);
// console.log("Dinner Invitation:");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
// }
// Question No 20 
// let mountains: string[] = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
// console.log("List of mountains:");
// console.log(mountains);
// Question No 21
// type Car = {
//     brand: string;
//     model: string;
//     year: number;
//     color: string;
// };
// let car1: Car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2022,
//     color: "Silver"
// };
// let car2: Car = {
//     brand: "Tesla",
//     model: "Model 3",
//     year: 2023,
//     color: "Blue"
// };
// let car3: Car = {
//     brand: "Honda",
//     model: "Civic",
//     year: 2021,
//     color: "Red"
// };
// console.log("Car 1:", car1);
// console.log("Car 2:", car2);
// console.log("Car 3:", car3);
// Question No 22 
// let numbers: number[] = [1, 2, 3, 4, 5];
// console.log(numbers[10]);
// Question N0 23 
// Test 1
// let x: number = 5;
// console.log("Is x == 5? I predict True.");
// console.log(x == 5);
// // Test 2
// let y: number = 10;
// console.log("Is y != 5? I predict True.");
// console.log(y != 5);
// //Test 3
// let a: number = 3;
// console.log("Is a > 2? I predict True.");
// console.log(a > 2);
// // Test 4
// let b: number = 8;
// console.log("Is b < 10? I predict True.");
// console.log(b < 10);
// // Test 5
// let c: number = 7;
// console.log("Is c >= 7? I predict True.");
// console.log(c >= 7);
// // Test 6
// let d: number = 4;
// console.log("Is d <= 3? I predict False.");
// console.log(d <= 3);
// // Test 7
// let names: string = "John";
// console.log("Is name == 'John'? I predict True.");
// console.log(names == 'John');
// // Test 8
// let age: number = 25;
// console.log("Is age != 30? I predict True.");
// console.log(age != 30);
// // Test 9
// let isRaining: boolean = false;
// console.log("Is it raining? I predict False.");
// console.log(isRaining);
// // Test 10
// let isValid: boolean = true;
// console.log("Is isValid == true? I predict True.");
// console.log(isValid == true);
// Question No 24 
// let color: string = "blue";
// console.log("Is color == 'blue'? I predict True.");
// console.log(color == 'blue');
// let fruit: string = "apple";
// console.log("Is fruit != 'banana'? I predict True.");
// console.log(fruit != 'banana');
// let city: string = "New York";
// console.log("Is city.toLowerCase() == 'new york'? I predict True.");
// console.log(city.toLowerCase() == 'new york');
// let num1: number = 10;
// let num2: number = 5;
// console.log("Is num1 > num2? I predict True.");
// console.log(num1 > num2);
// console.log("Is num1 <= num2? I predict False.");
// console.log(num1 <= num2);
// let isWarm: boolean = true;
// let isSunny: boolean = true;
// console.log("Is it warm and sunny? I predict True.");
// console.log(isWarm && isSunny);
// let hasRain: boolean = true;
// let hasUmbrella: boolean = false;
// console.log("Is it raining or do you have an umbrella? I predict True.");
// console.log(hasRain || hasUmbrella);
// let fruits: string[] = ["apple", "banana", "orange"];
// let fruitToFind: string = "banana";
// console.log(`Is ${fruitToFind} in the fruits array? I predict True.`);
// console.log(fruits.includes(fruitToFind));
// let vegetables: string[] = ["carrot", "tomato", "broccoli"];
// let vegetableToFind: string = "cabbage";
// console.log(`Is ${vegetableToFind} not in the vegetables array? I predict True.`);
// console.log(!vegetables.includes(vegetableToFind));
// Question No 25
// let alien_color: string = 'green';
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// }
// let alien_colors: string = 'yellow';
// if (alien_colors === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// }
// Question No 26
// let alien_color: string = 'green';
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else {
//     console.log("Congratulations! You just earned 10 points for shooting the alien.");
// }
// let alien_color: string = 'red';
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else {
//     console.log("Congratulations! You just earned 10 points for shooting the alien.");
// }
// Question No 27
// let alien_color: string = 'green';
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else if (alien_color === 'yellow') {
//     console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
// } else if (alien_color === 'red') {
//     console.log("Congratulations! You just earned 15 points for shooting the red alien.");
// }
// let alien_color: string = 'yellow';
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else if (alien_color === 'yellow') {
//     console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
// } else if (alien_color === 'red') {
//     console.log("Congratulations! You just earned 15 points for shooting the red alien.");
// }
// let alien_color: string = 'red';
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else if (alien_color === 'yellow') {
//     console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
// } else if (alien_color === 'red') {
//     console.log("Congratulations! You just earned 15 points for shooting the red alien.");
// }
// Question No 28
// let age: number = 25;
// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//     console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }
// Question No 29
// let favorite_fruits: string[] = ["apple", "banana", "mango"];
// if (favorite_fruits.includes("banana")) {
//     console.log("You really like bananas!");
// }
// if (favorite_fruits.includes("orange")) {
//     console.log("You really like oranges!");
// }
// if (favorite_fruits.includes("apple")) {
//     console.log("You really like apples!");
// }
// if (favorite_fruits.includes("grape")) {
//     console.log("You really like grapes!");
// }
// if (favorite_fruits.includes("mango")) {
//     console.log("You really like mangoes!");
// }
// Question N0 30
// let usernames: string[] = ["admin", "ali", "zia", "akram", "haris", "adil"];
// for (let username of usernames) {
//     if (username === "admin") {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }
// Question N0 31
// let usernames: string[] = [];
// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     for (let username of usernames) {
//         if (username === "admin") {
//             console.log("Hello admin, would you like to see a status report?");
//         } else {
//             console.log(`Hello ${username}, thank you for logging in again.`);
//         }
//     }
// }
// Question N0 32
// const current_users: string[] = ['Atif', 'Ali', 'Babar', 'Akram', 'Ashraf'];
// const new_users: string[] = ['Shayan', 'Servar', 'Yousuf', 'Kamran', 'Adil'];
// function checkUsername(username: string): boolean {
//     const lowercaseUsername = username.toLowerCase();
//     return !current_users.includes(lowercaseUsername);
// }
// new_users.forEach((username) => {
//     if (checkUsername(username)) {
//         console.log(`Username '${username}' is available.`);
//     } else {
//         console.log(`Username '${username}' is not available. Please enter a new username.`);
//     }
// });
// Quesion No 33 
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.forEach((num) => {
//     let ordinalEnding: string;
//     if (num === 1) {
//         ordinalEnding = "st";
//     } else if (num === 2) {
//         ordinalEnding = "nd";
//     } else if (num === 3) {
//         ordinalEnding = "rd";
//     } else {
//         ordinalEnding = "th";
//     }
//     console.log(`${num}${ordinalEnding}`);
// });
// Question No 34
// const pizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
// console.log("Printing pizza names:");
// for (let i = 0; i < pizzas.length; i++) {
//     console.log(pizzas[i]);
// }
// console.log("Printing pizza preferences:");
// for (let i = 0; i < pizzas.length; i++) {
//     console.log(`I like ${pizzas[i]} pizza.`);
// }
// console.log("\nI really love pizza!");
// Question No 35
// const animals: string[] = ['Dog', 'Cat', 'Rabbit'];
// console.log("Printing animal names:");
// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }
// console.log("Printing statements about each animal:");
// for (let i = 0; i < animals.length; i++) {
//     let animalStatement: string;
//     switch (animals[i]) {
//         case 'Dog':
//             animalStatement = "A dog would make a great pet.";
//             break;
//         case 'Cat':
//             animalStatement = "A cat is an independent and affectionate pet.";
//             break;
//         case 'Rabbit':
//             animalStatement = "A rabbit is a gentle and social pet.";
//             break;
//         default:
//             animalStatement = "This animal would make a great pet.";
//             break;
//     }
//     console.log(animalStatement);
// }
// console.log("Any of these animals would make a great pet!");
// Question No 36
// function make_shirt(size: string, message: string): void {
//     console.log(`A ${size}-sized shirt will be printed with the message: "${message}".`);
// }
// make_shirt('Medium', 'Hello, World!');
// Question No 37
// function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
//     console.log(`A ${size}-sized shirt will be printed with the message: "${message}".`);
// }
// make_shirt();
// make_shirt('Medium');
// make_shirt('Small', 'Hello, World!');
// Question No 38
// function describe_city(city: string, country: string = 'Pakistan'): void {
//     console.log(`${city} is in ${country}.`);
// }
// describe_city('Karachi');
// describe_city('Lahore');
// describe_city('New York', 'USA');
// Question No 39
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }
// const city1 = city_country('Lahore', 'Pakistan');
// const city2 = city_country('Paris', 'France');
// const city3 = city_country('Tokyo', 'Japan');
// console.log(city1);
// console.log(city2);
// console.log(city3);
// Question No 40
// function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
//     const album: any = { artist, title }; 
//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }
//     return album;
// }
// const album1 = make_album('Artist1', 'Album1');
// const album2 = make_album('Artist2', 'Album2', 12);
// const album3 = make_album('Artist3', 'Album3', 8)
// console.log(album1);
// console.log(album2);
// console.log(album3);
// Question No 41
// const magicians: string[] = ['Addil', 'Harry', 'Shayan', 'Amir'];
// function show_magicians(magicians: string[]): void {
//     console.log("Magicians:");
//     magicians.forEach((magician) => {
//         console.log(magician);
//     });
// }
// show_magicians(magicians);
// Question No 42
// const magicians: string[] = ['Addil', 'Harry', 'Shayan', 'Amir'];
// function show_magicians(magicians: string[]): void {
//     console.log("Magicians:");
//     magicians.forEach((magician) => {
//         console.log(magician);
//     });
// }
// function make_great(magicians: string[]): void {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = `the Great ${magicians[i]}`;
//     }
// }
// show_magicians(magicians);
// make_great(magicians);
// show_magicians(magicians);
// Question No 43
// const magicians: string[] = ['Addil', 'Harry', 'Shayan', 'Amir'];
// function show_magicians(magicians: string[]): void {
//     console.log("Magicians:");
//     magicians.forEach((magician) => {
//         console.log(magician);
//     });
// }
// function make_great(magicians: string[]): string[] {
//     const greatMagicians: string[] = []; 
//     for (let i = 0; i < magicians.length; i++) {
//         greatMagicians.push(`the Great ${magicians[i]}`);
//     }
//     return greatMagicians;
// }
// show_magicians(magicians);
// const originalMagiciansCopy: string[] = magicians.slice();
// const greatMagicians: string[] = make_great(originalMagiciansCopy);
// show_magicians(greatMagicians);
// Question No 44
// function makeSandwich(...items: string[]): void {
//     console.log("Sandwich Summary:");
//     console.log("Bread");
//     items.forEach((item) => {
//         console.log(item);
//     });
//     console.log("Bread");
//     console.log("Sandwich complete!");
// }
// makeSandwich('Cheese', 'Tomato', 'Lettuce');
// makeSandwich('Ham', 'Mustard');
// makeSandwich('Turkey');
// Question No 45
// function createCar(manufacturer: string, model: string, ...details: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
//     const carInfo = { manufacturer, model, ...Object.assign({}, ...details) };
//     return carInfo;
// }
// const car = createCar('Toyota', 'Camry', { color: 'Red', year: 2024 });
// console.log(car);
//# sourceMappingURL=app.js.map
