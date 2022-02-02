// let maxnum = +prompt("Welcome to the game! \nEnter the max number:");
// let input = +prompt("Enter your first guess:");
let answer = Math.floor(Math.random() * 10);
// let answer = Math.round(Math.random * maxnum);
let count = 0;
// console.log(typeof maxnum);
// console.log(input);
// console.log(input > maxnum);
console.log(answer);

// while (input !== answer) {
// 	if (input > answer) {
// 		console.log("Too high keep guessing");
// 		count++;
// 	} else if (input < answer) {
// 		console.log("Too low keep guessing");
// 		count++;
// 	} else break;
// }
console.log(`it took you ${count} guesses.`);
