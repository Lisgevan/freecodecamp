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
const ias = document.querySelector(".js-ias");
// const outcomeEL = document.querySelector("#js-outcome");
// const titleEL = document.querySelector("#js-title");

const iasResults = result => {
	// console.dir(result[0]["section"]);
	for (let item of result) {
		console.dir(item["section"]);
		ias.innerHTML += `
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

const iasList = [
	{
		section: 01,
		title: `Sum All Numbers in a Range`,
		exercise: `We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

		For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.`,
		starterCode: `
		function sumAll(arr) {
			return 1;
		}

		sumAll([1, 4]);
		`,
		solution: `
		function sumAll(arr) {
			arr.sort((a,b)=>a-b)
			let sum = 0
			for(let i=arr[0]; i<=arr[1]; i++){
				sum+=i
			}
			return sum;
		}

		sumAll([1, 4]);
		`,
	},
	{
		section: 02,
		title: `Diff Two Arrays`,
		exercise: `Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

		Note: You can return the array with its elements in any order.`,
		starterCode: `
		function diffArray(arr1, arr2) {
			const newArr = [];
			return newArr;
		}

		diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
		`,
		solution: `
		function diffArray(arr1, arr2) {
			const newArr = [];
			const arr3 = [...arr1, ...arr2]
			for(let i of arr3){
				if(!arr1.includes(i)||!arr2.includes(i))newArr.push(i)
			}
			return newArr;
		}

		diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
		`,
	},
	{
		section: 03,
		title: `Seek and Destroy`,
		exercise: `You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

		Note: You have to use the arguments object.`,
		starterCode: `
		function destroyer(arr) {
			return arr;
		}

		destroyer([1, 2, 3, 1, 2, 3], 2, 3);
		`,
		solution: `
		function destroyer(arr) {
			return arr.filter(item=>![...arguments].includes(item));
		}

		destroyer([1, 2, 3, 1, 2, 3], 2, 3);
		`,
	},
	{
		section: 04,
		title: `Wherefore art thou`,
		exercise: `Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

		For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.`,
		starterCode: `
		function whatIsInAName(collection, source) {
			const arr = [];
			// Only change code below this line


			// Only change code above this line
			return arr;
		}

		whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
		`,
		solution: `
		function whatIsInAName(collection, source) {
			const arr = [];
			// Only change code below this line
			const keys = Object.keys(source)
			console.log(keys)
			for(let i of collection){
				keys.every(key=>i[key]===source[key])?arr.push(i):""
			}
			// Only change code above this line
			return arr;
		}

		console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
		`,
	},
	{
		section: 05,
		title: `Spinal Tap Case`,
		exercise: `Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.`,
		starterCode: `
		function spinalCase(str) {
			return str;
		}

		spinalCase('This Is Spinal Tap');
		`,
		solution: `
		function spinalCase(str) {
			str = str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
			console.log(str)
			return str;
		}

		spinalCase('This Is Spinal Tap');
		`,
	},
	{
		section: 06,
		title: `Pig Latin`,
		exercise: `Pig Latin is a way of altering English Words. The rules are as follows:

		- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

		- If a word begins with a vowel, just add way at the end.

		Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.`,
		starterCode: `
		function translatePigLatin(str) {
			return str;
		}

		translatePigLatin("consonant");
		`,
		solution: `
		function translatePigLatin(str) {
			let regex = /^[^aeoiuAEOIU]+/;

			if (regex.test(str)) {
				// console.log(str.find(regex));
				return str.replace(regex, "") + str.match(regex) + "ay";
			}
			return str + "way";
		}

		translatePigLatin("consonant");
		`,
	},
	{
		section: 07,
		title: `Search and Replace`,
		exercise: `Perform a search and replace on the sentence using the arguments provided and return the new sentence.

		First argument is the sentence to perform the search and replace on.

		Second argument is the word that you will be replacing (before).

		Third argument is what you will be replacing the second argument with (after).

		Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog`,
		starterCode: `
		function myReplace(str, before, after) {
			return str;
		}

		myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
		`,
		solution: `
		function myReplace(str, before, after) {
			const isCap = /^[A-Z]/
			if (isCap.test(before)){
				if(!isCap.test(after)){
				after=after.split('')
				after[0]=after[0].toUpperCase()
				after=after.join('')
				}
			}else{after=after.toLowerCase()}

			str = str.replace(before, after)

			
			return str;
		}

		myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
		`,
	},
	{
		section: 08,
		title: `DNA Pairing`,
		exercise: `The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

		Base pairs are a pair of AT and CG. Match the missing element to the provided character.

		Return the provided character as the first element in each array.

		For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

		The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.`,
		starterCode: `
		function pairElement(str) {
			return str;
		}

		pairElement("GCG");
		`,
		solution: `
		function pairElement(str) {
			const result = []
			for (let l of str){
				console.log(l)
				switch (l){
				case 'A':
					result.push(['A', 'T'])
					break;
				case 'T':
					result.push(['T', 'A'])
					break;
				case 'C':
					result.push(['C', 'G'])
					break;
				case 'G':
					result.push(['G', 'C'])
				}
			}
			return result;
		}

		console.log(pairElement("GCG"));
		`,
	},
	{
		section: 09,
		title: `Missing letters`,
		exercise: `Find the missing letter in the passed letter range and return it.

		If all letters are present in the range, return undefined.`,
		starterCode: `
		function fearNotLetter(str) {
			return str;
		}

		fearNotLetter("abce");
		`,
		solution: `
		function fearNotLetter(str) {
			const abc = "abcdefghijklmnopqrstuvwxyz".split('')

			const index = abc.indexOf(str[0])

			for (let i=0; i<str.length; i++){
				if(abc[index+i]!==str[i]){
				return abc[index+i]
				}   
			}
			return undefined;
		}

		console.log(fearNotLetter("abce"));
		`,
	},
	{
		section: 10,
		title: `Sorted Union`,
		exercise: `Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

		In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

		The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

		Check the assertion tests for examples.`,
		starterCode: `
		function uniteUnique(arr) {
			return arr;
		}

		uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
		`,
		solution: `
		function uniteUnique(arr) {
			const tempArr = [...arguments].reduce((acc, item)=>acc.concat(item), [])
			const result = [];

			for (let n of tempArr){
				result.indexOf(n)===-1?result.push(n):""
			}
			return result;
		}

		console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
		`,
	},
	{
		section: 11,
		title: `Convert HTML Entities`,
		exercise: ``,
		starterCode: `
		function convertHTML(str) {
			
			return str;
		}

		convertHTML("Dolce & Gabbana");
		`,
		solution: `
		function convertHTML(str) {
			let strList = str.split("")

			for (let i = 0; i < strList.length; i++) {
				switch (strList[i]) {
				case "<":
					strList[i] = "&lt;";
					break;
				case "&":
					strList[i] = "&amp;";
					break;
				case ">":
					strList[i] = "&gt;";
					break;
				case '"':
					strList[i] = "&quot;";
					break;
				case "'":
					strList[i] = "&apos;";
					break;
				}
			}

			strList = strList.join("")

			return strList;
		}

		convertHTML("Dolce & Gabbana");
		`,
	},
	{
		section: 12,
		title: `Sum All Odd Fibonacci Numbers`,
		exercise: `Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

		The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

		For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.`,
		starterCode: `
		function sumFibs(num) {
			return num;
		}

		sumFibs(4);
		`,
		solution: `
		//I do not agree with the answer CHECK IT OUT
		function sumFibs(num) {
			let prevNumber = 0;
			let currNumber = 1;
			let result = 0;
			while (currNumber <= num) {
				if (currNumber % 2 !== 0) {
				result += currNumber;
				}
				currNumber += prevNumber;
				prevNumber = currNumber - prevNumber;
			}

			return result;
		}

		// test here
		sumFibs(4);
		`,
	},
	{
		section: 13,
		title: `Sum All Primes`,
		exercise: `A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

		Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.`,
		starterCode: `
		function sumPrimes(num) {
			return num;
		}

		sumPrimes(10);
		`,
		solution: `
		function sumPrimes(num) {
			// Helper function to check primality
			function isPrime(num) {
				for (let i = 2; i <= Math.sqrt(num); i++) {
				if (num % i == 0)
					return false;
				}
				return true;
			}

			// Check all numbers for primality
			let sum = 0;
			for (let i = 2; i <= num; i++) {
				if (isPrime(i))
				sum += i;
			}
			return sum;
		}
		`,
	},
	{
		section: 14,
		title: `Smallest Common Multiple`,
		exercise: `Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

		The range will be an array of two numbers that will not necessarily be in numerical order.

		For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.`,
		starterCode: `
		function smallestCommons(arr) {
			return arr;
		}

		smallestCommons([1,5]);
		`,
		solution: `
		function smallestCommons(arr) {
			// Setup
			const [min, max] = arr.sort((a, b) => a - b);
			const range = Array(max - min + 1)
				.fill(0)
				.map((_, i) => i + min);
			// Largest possible value for SCM
			const upperBound = range.reduce((prod, curr) => prod * curr);
			// Test all multiples of 'max'
			for (let multiple = max; multiple <= upperBound; multiple += max) {
				// Check if every value in range divides 'multiple'
				const divisible = range.every((value) => multiple % value === 0);
				if (divisible) {
				return multiple;
				}
			}
		}

		smallestCommons([1, 5]);
		`,
	},
	{
		section: 15,
		title: `Drop it`,
		exercise: `Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

		Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.`,
		starterCode: `
		function dropElements(arr, func) {
			return arr;
		}

		dropElements([1, 2, 3], function(n) {return n < 3; });
		`,
		solution: `
		function dropElements(arr, func) {

			let originalLen = arr.length;
			for (let i = 0; i < originalLen; i++) {
				if (func(arr[0])) {
				break;
				} else {
				arr.shift();
				}
			}
			return arr;
		}

		dropElements([1, 2, 3], function(n) {return n < 3; });
		`,
	},
	{
		section: 16,
		title: `SteamrollerPassed`,
		exercise: `Flatten a nested array. You must account for varying levels of nesting.`,
		starterCode: `
		function steamrollArray(arr) {
			return arr;
		}

		steamrollArray([1, [2], [3, [[4]]]]);
		`,
		solution: `
		function steamrollArray(val,flatArr=[]) {
			val.forEach(item => {
				if (Array.isArray(item)) steamrollArray(item, flatArr);
				else flatArr.push(item);
			});
			return flatArr;
		}

		steamrollArray([1, [2], [3, [[4]]]]);
		`,
	},
	{
		section: 17,
		title: `Binary Agents`,
		exercise: `Return an English translated sentence of the passed binary string.

		The binary string will be space separated.`,
		starterCode: `
		function binaryAgent(str) {
			return str;
		}

		binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
		`,
		solution: `
		function binaryAgent(str) {
  
			return str.split(" ").map(x => String.fromCharCode(parseInt(x, 2))).join("");;
		}

		binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
		`,
	},
	{
		section: 18,
		title: `Everything Be True`,
		exercise: `Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

		In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

		In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

		Remember, you can access object properties through either dot notation or [] notation.`,
		starterCode: `
		function truthCheck(collection, pre) {
			return pre;
		}

		truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
		`,
		solution: `
		function truthCheck(collection, pre) {
			return collection.map(item=>item.hasOwnProperty(pre)).every(item=>item===true)&&collection.map(item=>Boolean(item[pre])).every(item=>item===true)
		};


		truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
		`,
	},
	{
		section: 19,
		title: `Arguments Optional`,
		exercise: `Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

		For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

		Calling this returned function with a single argument will then return the sum:

		var sumTwoAnd = addTogether(2);
		sumTwoAnd(3) returns 5.

		If either argument isn't a valid number, return undefined.`,
		starterCode: `
		function addTogether() {
			return false;
		}

		addTogether(2,3);
		`,
		solution: `
		function addTogether(x, y) {
			if (typeof x !== 'number'){
				return undefined
			}else if(y === undefined){
				return (y)=>{
					if(typeof y !== 'number'){
					return undefined
					}else{
						return x+y
					}
				}
			}else if(typeof y !== 'number'){
				return undefined
			}
			return x+y
		}

		addTogether(2,3);
		`,
	},
	{
		section: 20,
		title: `Make a Person`,
		exercise: `Fill in the object constructor with the following methods below:

		getFirstName()
		getLastName()
		getFullName()
		setFirstName(first)
		setLastName(last)
		setFullName(firstAndLast)
		Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.`,
		starterCode: `
		const Person = function(firstAndLast) {
			// Only change code below this line
			// Complete the method below and implement the others similarly
			this.getFullName = function() {
				return "";
			};
			return firstAndLast;
		};

		const bob = new Person('Bob Ross');
		bob.getFullName();
		`,
		solution: `
		const Person = function(firstAndLast) {
			// Only change code below this line
			// Complete the method below and implement the others similarly
			let firstAndLastList = firstAndLast.split(' ')
			this.getFullName = function() {
				return firstAndLastList.join(' ');
			};
			this.getFirstName = function() {
				return firstAndLastList[0];
			};
			this.getLastName = function() {
				return firstAndLastList[1];
			};
			this.setFullName = function(fullName) {
				firstAndLastList = fullName.split(' ')
				return firstAndLastList;
			};
			this.setFirstName = function(firstName) {
				firstAndLastList[0]=firstName
				return firstAndLastList;
			};
			this.setLastName = function(lastName) {
					firstAndLastList[1]=lastName
				return firstAndLastList;
			};
			return firstAndLast;
		};
		
		const bob = new Person('Bob Ross');
		bob.getFullName();
		`,
	},
	{
		section: 21,
		title: `Map the Debris`,
		exercise: `Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

		The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

		You can read about orbital periods on Wikipedia.

		The values should be rounded to the nearest whole number. The body being orbited is Earth.

		The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.`,
		starterCode: `
		function orbitalPeriod(arr) {
			const GM = 398600.4418;
			const earthRadius = 6367.4447;
			return arr;
		}

		orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
		`,
		solution: `
		function orbitalPeriod(arr) {
			const GM = 398600.4418;
			const earthRadius = 6367.4447;
			return arr.map(({ name, avgAlt }) => {
				const earth = earthRadius + avgAlt;
				const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
				return { name, orbitalPeriod };
			});
		}

		orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
		`,
	},
];

iasResults(iasList);
