/* TODO: Use the code below to add result and arguments to the DOM
 const outcomeEL = document.querySelector( "#outcome" );

 const showResult = result => {
 	console.dir(result("10011")[1][0]);
 	outcomeEL.innerHTML += `For "${result("10011")[1][0]}", the result is: ${result("10011")[0]}` + "<br />";
 };

 let result = function convertToInteger(str) {
 	const a = parseInt(str, 2);
 	return [a, arguments];
 };

 showResult(result);


//--------------------------------------------//
*/
const bas = document.querySelector(".js-bas");
// const outcomeEL = document.querySelector("#js-outcome");
// const titleEL = document.querySelector("#js-title");

const basResults = result => {
	// console.dir(result[0]["section"]);
	for (let item of result) {
		console.dir(item["section"]);
		bas.innerHTML += `
        <button
                class="border-solid border-4 border-light-blue-500  text-center accordion p-4 font-black bg-gray-400 hover:bg-red-700 rounded-sm"><div>Section-${
					item["section"] < 10 ? "0" + item["section"] : item["section"]
				}:</div>
                <div> ${item["title"]}</div>
                </button>
        <div class="panel bg-blue-100 p-4">
            <p class="underline">The solution is:</p> <pre> <code class="overflow-ellipsis">${
				item["solution"]
			}</code> </pre>
        </div>
        `;
	}
};

// const showResult = result => {
// 	// console.dir(result[0]["section"]);
// 	for (let item of result) {
// 		console.dir(item["section"]);
// 		entryEL.innerHTML += `
//         <h3 id='js-title' class="font-bold underline">
//         ${item["title"]}
//         </h3>
//         <p class="flex-wrap"><pre id='js-outcome'>
//         For section-${
// 			item["section"] < 10 ? "0" + item["section"] : item["section"]
// 		}, the result is: <code class="overflow-ellipsis">${item["solution"]}</code>
//         <hr />
//         </pre></p>
//         `;
// 	}
// };

const basList = [
	{
		section: 01,
		title: `Convert Celsius to Fahrenheit`,
		exercise: `The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

		You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.`,
		starterCode: `
		function convertToF(celsius) {
			let fahrenheit;
			return fahrenheit;
		}

		convertToF(30);
		`,
		solution: `
		function convertToF(celsius) {
			let fahrenheit=celsius*9/5+32;
			return fahrenheit;
		}

		convertToF(30);
		`,
	},
	{
		section: 02,
		title: `Reverse a String`,
		exercise: `Reverse the provided string.

		You may need to turn the string into an array before you can reverse it.

		Your result must be a string.`,
		starterCode: `
		function reverseString(str) {
			return str;
		}

		reverseString("hello");
		`,
		solution: `
		function reverseString(str) {
			return str.split('').reverse().join('');
		}

		reverseString("hello");
		`,
	},
	{
		section: 03,
		title: `Factorialize a Number`,
		exercise: `Return the factorial of the provided integer.

		If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

		Factorials are often represented with the shorthand notation n!

		For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

		Only integers greater than or equal to zero will be supplied to the function.`,
		starterCode: `
		function factorialize(num) {
			return num;
		}

		factorialize(5);
		`,
		solution: `
		function factorialize(num) {
			let total=1;
			if (num===0){
				return 1
			}else{
				return num*factorialize(num-1)
			}
		}

		factorialize(5);

		console.log(factorialize(5))
		`,
	},
	{
		section: 04,
		title: `Find the Longest Word in a String`,
		exercise: `Return the length of the longest word in the provided sentence.

		Your response should be a number.`,
		starterCode: `
		function findLongestWordLength(str) {
			return str.length;
		}

		findLongestWordLength("The quick brown fox jumped over the lazy dog");
		`,
		solution: `
		function findLongestWordLength(str) {
			let num=0;
			let words = str.split(' ')
			for (let word of words){
				word.length>num?num=word.length: ""
			,}
		return num;
		}

		findLongestWordLength("The quick brown fox jumped over the lazy dog");
		`,
	},
	{
		section: 05,
		title: `Return Largest Numbers in Arrays`,
		exercise: `Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

		Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].`,
		starterCode: `
		function largestOfFour(arr) {
			return arr;
		}

		largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
		`,
		solution: `
		function largestOfFour(arr) {
			let result=[];
			for(let item of arr){
				result.push(Math.max(...item))
			}
			return result;
		}

		largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
		`,
	},
	{
		section: 06,
		title: `Confirm the Ending`,
		exercise: `Check if a string (first argument, str) ends with the given target string (second argument, target).

		This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.`,
		starterCode: `
		function confirmEnding(str, target) {
			return str;
		}

		confirmEnding("Bastian", "n");
		`,
		solution: `
		function confirmEnding(str, target) {
			return str.slice(str.length-target.length)===target;
		}

		confirmEnding("Bastian", "n");
		`,
	},
	{
		section: 07,
		title: `Repeat a String Repeat a String`,
		exercise: `Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.`,
		starterCode: `
		function repeatStringNumTimes(str, num) {
			return str;
		}

		repeatStringNumTimes("abc", 3);
		`,
		solution: `
		function repeatStringNumTimes(str, num) {
			let result = ''
			if (num<= 0){
				return ""
			}else{
				for (let i=1; i<=num ;i++){
				result += str
				}
				return result
			}
		}

		repeatStringNumTimes("abc", 3);
		`,
	},
	{
		section: 08,
		title: `Truncate a String`,
		exercise: `Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.`,
		starterCode: `
		function truncateString(str, num) {
			return str;
		}

		truncateString("A-tisket a-tasket A green and yellow basket", 8);
		`,
		solution: `
		function truncateString(str, num) {
			if(str.length<=num){
				return str
			}else{
				return str.substring(0,num)+'...'
			}
		}

		truncateString("A-tisket a-tasket A green and yellow basket", 8);
		`,
	},
	{
		section: 09,
		title: `Finders Keepers`,
		exercise: `Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.`,
		starterCode: `
		function findElement(arr, func) {
			let num = 0;
			return num;
		}

		findElement([1, 2, 3, 4], num => num % 2 === 0);
		`,
		solution: `
		function findElement(arr, func) {
			let num = 0;
			for (let item of arr){
				if (func(item)){
				return item
				}
			}
			return undefined;
		}

		findElement([1, 2, 3, 4], num => num % 2 === 0);
		`,
	},
	{
		section: 10,
		title: `Boo who`,
		exercise: `Check if a value is classified as a boolean primitive. Return true or false.

		Boolean primitives are true and false.`,
		starterCode: `
		function booWho(bool) {
			return bool;
		}

		booWho(null);
		`,
		solution: `
		function booWho(bool) {
			return bool===true||bool===false;
		}

		booWho(null);
		`,
	},
	{
		section: 11,
		title: `Title Case a Sentence`,
		exercise: `Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

		For the purpose of this exercise, you should also capitalize connecting words like the and of.`,
		starterCode: `
		function titleCase(str) {
			return str;
		}

		titleCase("I'm a little tea pot");
		`,
		solution: `
		function titleCase(str) {
			let result = []
			str = str.toLowerCase().split(' ')
			for (let word of str){
				word = word.split('')
				word[0]=word[0].toUpperCase()
				word = word.join('')
				result.push(word)
			}
			result=result.join(" ")
			return result;
		}

		console.log(titleCase("I'm a little tea pot"));
		`,
	},
	{
		section: 12,
		title: `Slice and Splice`,
		exercise: `You are given two arrays and an index.

		Copy each element of the first array into the second array, in order.

		Begin inserting elements at index n of the second array.

		Return the resulting array. The input arrays should remain the same after the function runs.`,
		starterCode: `
		function frankenSplice(arr1, arr2, n) {
			return arr2;
		}

		frankenSplice([1, 2, 3], [4, 5, 6], 1);
		`,
		solution: `
		function frankenSplice(arr1, arr2, n) {
			const result = [...arr2]
			result.splice(n,0, ...arr1)
			return result;
		}

		console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
		`,
	},
	{
		section: 13,
		title: `Falsy Bouncer`,
		exercise: `Remove all falsy values from an array.

		Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

		Hint: Try converting each value to a Boolean.`,
		starterCode: `
		function bouncer(arr) {
			return arr;
		}

		bouncer([7, "ate", "", false, 9]);
		`,
		solution: `
		function bouncer(arr) {
			return arr.filter((item)=>Boolean(item));
		}

		bouncer([7, "ate", "", false, 9]);
		`,
	},
	{
		section: 14,
		title: `Where do I Belong`,
		exercise: `Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

		For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

		Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).`,
		starterCode: `
		function getIndexToIns(arr, num) {
			return num;
		}

		getIndexToIns([40, 60], 50);
		`,
		solution: `
		function getIndexToIns(arr, num) {
			arr = arr.sort((a,b)=>a-b)
			for (let item of arr){
				if(num<=item){
				
				return arr.indexOf(item)
				}
			}
			return arr.length;
		}

		getIndexToIns([10, 20, 30, 40, 50], 30);
		`,
	},
	{
		section: 15,
		title: `Mutations`,
		exercise: `Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

		For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

		The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

		Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.`,
		starterCode: `
		function mutation(arr) {
			return arr;
		}

		mutation(["hello", "hey"]);
		`,
		solution: `
		function mutation(arr) {
			let letters = arr[1].toLowerCase().split('');

			return letters.every((letter)=>arr[0].toLowerCase().includes(letter));
		}

		mutation(["hello", "hey"]);
		`,
	},
	{
		section: 16,
		title: `Chunky Monkey`,
		exercise: `Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.`,
		starterCode: `
		function chunkArrayInGroups(arr, size) {
			return arr;
		}

		chunkArrayInGroups(["a", "b", "c", "d"], 2);
		`,
		solution: `
		function chunkArrayInGroups(arr, size) {
			let result = []
			while (arr.length>0){
				result.push(arr.splice(0,size))
			}
			console.log(result)
			return result;
		}

		chunkArrayInGroups(["a", "b", "c", "d"], 2);
		`,
	},
];

basResults(basList);
