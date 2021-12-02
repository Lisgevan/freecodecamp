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
const bds = document.querySelector(".js-bds");
// const outcomeEL = document.querySelector("#js-outcome");
// const titleEL = document.querySelector("#js-title");

const bdsResults = result => {
	// console.dir(result[0]["section"]);
	for (let item of result) {
		console.dir(item["section"]);
		bds.innerHTML += `
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

const bdsList = [
	{
		section: 01,
		title: `Use an Array to Store a Collection of Data`,
		exercise: `We have defined a variable called yourArray. Complete the statement by assigning an array of at least 5 elements in length to the yourArray variable. Your array should contain at least one string, one number, and one boolean.`,
		starterCode: `
       	let yourArray; // Change this line
        `,
		solution: `
        let yourArray = [1, '2', true, 4, 5]; // Change this line
        `,
	},
	{
		section: 02,
		title: `Access an Array's Contents Using Bracket Notation`,
		exercise: `In order to complete this challenge, set the 2nd position (index 1) of myArray to anything you want, besides the letter b.`,
		starterCode: `
       let myArray = ["a", "b", "c", "d"];
		// Only change code below this line

		// Only change code above this line
		console.log(myArray);
        `,
		solution: `
        let myArray = ["a", "b", "c", "d"];
		// Only change code below this line
		myArray[1]=12
		// Only change code above this line
		console.log(myArray);
        `,
	},
	{
		section: 03,
		title: `Add Items to an Array with push() and unshift()`,
		exercise: `We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.`,
		starterCode: `
       function mixedNumbers(arr) {
		// Only change code below this line

		// Only change code above this line
		return arr;
		}

		console.log(mixedNumbers(['IV', 5, 'six']));
        `,
		solution: `
        function mixedNumbers(arr) {
		// Only change code below this line
		arr.push(7, 'VIII', 9)
		arr.unshift('I', 2, 'three')
		// Only change code above this line
		return arr;
		}

		console.log(mixedNumbers(['IV', 5, 'six']));
        `,
	},
	{
		section: 04,
		title: `Remove Items from an Array with pop() and shift()`,
		exercise: `We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.`,
		starterCode: `
       function popShift(arr) {
		let popped; // Change this line
		let shifted; // Change this line
		return [shifted, popped];
		}

		console.log(popShift(['challenge', 'is', 'not', 'complete']));
        `,
		solution: `
        function popShift(arr) {
		let popped = arr.pop(); // Change this line
		let shifted = arr.shift(); // Change this line
		return [shifted, popped];
		}

		console.log(popShift(['challenge', 'is', 'not', 'complete']));
        `,
	},
	{
		section: 05,
		title: `Remove Items Using splice()`,
		exercise: `We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.`,
		starterCode: `
       const arr = [2, 4, 5, 1, 7, 5, 2, 1];
		// Only change code below this line

		// Only change code above this line
		console.log(arr);
        `,
		solution: `
        const arr = [2, 4, 5, 1, 7, 5, 2, 1];
		// Only change code below this line
		arr.splice(1,4)
		// Only change code above this line
		console.log(arr);
        `,
	},
	{
		section: 06,
		title: `Add Items Using splice()`,
		exercise: `We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.`,
		starterCode: `
       function htmlColorNames(arr) {
			// Only change code below this line

			// Only change code above this line
			return arr;
		}

		console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
        `,
		solution: `
        function htmlColorNames(arr) {
			// Only change code below this line
			arr.splice(0,2, 'DarkSalmon','BlanchedAlmond')
			// Only change code above this line
			return arr;
		}

		console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
        `,
	},
	{
		section: 07,
		title: `Copy Array Items Using slice()`,
		exercise: `We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny.`,
		starterCode: `
       function forecast(arr) {
			// Only change code below this line

			return arr;
		}

		// Only change code above this line
		console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
        `,
		solution: `
        function forecast(arr) {
			// Only change code below this line
			const arr2 = arr.slice(2,4)
			return arr2;
		}

		// Only change code above this line
		console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
        `,
	},
	{
		section: 08,
		title: `Copy an Array with the Spread Operator`,
		exercise: `We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).`,
		starterCode: `
       function copyMachine(arr, num) {
			let newArr = [];
			while (num >= 1) {
				// Only change code below this line

				// Only change code above this line
				num--;
			}
			return newArr;
		}

		console.log(copyMachine([true, false, true], 2));
        `,
		solution: `
        function copyMachine(arr, num) {
			let newArr = [];
			while (num >= 1) {
				// Only change code below this line
			newArr.push([...arr])
				// Only change code above this line
				num--; 
			}
			return newArr;
		}

		console.log(copyMachine([true, false, true], 2));
        `,
	},
	{
		section: 09,
		title: `Combine Arrays with the Spread Operator`,
		exercise: `We have defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].`,
		starterCode: `
       function spreadOut() {
			let fragment = ['to', 'code'];
			let sentence; // Change this line
			return sentence;
		}

		console.log(spreadOut());
        `,
		solution: `
        function spreadOut() {
			let fragment = ['to', 'code'];
			let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
			return sentence;
		}

		console.log(spreadOut());
        `,
	},
	{
		section: 10,
		title: `Check For The Presence of an Element With indexOf()`,
		exercise: `indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.`,
		starterCode: `
       function quickCheck(arr, elem) {
			// Only change code below this line

			// Only change code above this line
		}

		console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
        `,
		solution: `
        function quickCheck(arr, elem) {
			// Only change code below this line
			return arr.indexOf(elem)!=-1
			// Only change code above this line
		}

		console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
        `,
	},
	{
		section: 11,
		title: `Iterate Through All an Array's Items Using For Loops`,
		exercise: `We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.`,
		starterCode: `
       	function filteredArray(arr, elem) {
			let newArr = [];
			// Only change code below this line

			// Only change code above this line
		return newArr;
		}

		console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
        `,
		solution: `
        function filteredArray(arr, elem) {
			let newArr = [];
			// Only change code below this line
			for (let item of arr){
				if(item.indexOf(elem)===-1){
				newArr.push(item)
				}
		}
		// Only change code above this line
		return newArr;
		} 

		console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
        `,
	},
	{
		section: 12,
		title: `Create complex multi-dimensional arrays`,
		exercise: `We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string deep, on the fourth level, include the string deeper, and on the fifth level, include the string deepest.`,
		starterCode: `
		let myNestedArray = [
			// Only change code below this line
			['unshift', false, 1, 2, 3, 'complex', 'nested'],
			['loop', 'shift', 6, 7, 1000, 'method'],
			['concat', false, true, 'spread', 'array'],
			['mutate', 1327.98, 'splice', 'slice', 'push'],
			['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
			// Only change code above this line
		];
        `,
		solution: `
        let myNestedArray = [
			// Only change code below this line
			[
				['deep', [
					'deeper', [
						'deepest', 'unshift', false, 1, 2, 3, 'complex', 'nested'],
			['loop', 'shift', 6, 7, 1000, 'method'],
			['concat', false, true, 'spread', 'array'],
			['mutate', 1327.98, 'splice', 'slice', 'push'],
			['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
					]
				]
			]
			// Only change code above this line
		];
        `,
	},
	{
		section: 13,
		title: `Add Key-Value Pairs to JavaScript Objects`,
		exercise: `A foods object has been created with three entries. Using the syntax of your choice, add three more entries to it: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.`,
		starterCode: `
		let foods = {
			apples: 25,
			oranges: 32,
			plums: 28
		};

		// Only change code below this line

		// Only change code above this line

		console.log(foods);
        `,
		solution: `
        let foods = {
			apples: 25,
			oranges: 32,
			plums: 28
		};

		// Only change code below this line
		foods.bananas=13;
		foods.strawberries =27;
		foods.grapes =35;
		// Only change code above this line

		console.log(foods);
        `,
	},
	{
		section: 14,
		title: `Modify an Object Nested Within an Object`,
		exercise: `Here we've defined an object userActivity, which includes another object nested within it. Set the value of the online key to 45.`,
		starterCode: `
		let userActivity = {
			id: 23894201352,
			date: 'January 1, 2017',
			data: {
				totalUsers: 51,
				online: 42
			}
		};

		// Only change code below this line

		// Only change code above this line

		console.log(userActivity);
        `,
		solution: `
        let userActivity = {
			id: 23894201352,
			date: 'January 1, 2017',
			data: {
				totalUsers: 51,
				online: 42
			}
		};

		// Only change code below this line
		userActivity.data.online=45
		// Only change code above this line

		console.log(userActivity);
        `,
	},
	{
		section: 15,
		title: `Access Property Names with Bracket Notation`,
		exercise: `We've defined a function, checkInventory, which receives a scanned item as an argument. Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory.`,
		starterCode: `
		let foods = {
			apples: 25,
			oranges: 32,
			plums: 28,
			bananas: 13,
			grapes: 35,
			strawberries: 27
		};

		function checkInventory(scannedItem) {
			// Only change code below this line

			// Only change code above this line
		}

		console.log(checkInventory("apples"));
        `,
		solution: `
        let foods = {
			apples: 25,
			oranges: 32,
			plums: 28,
			bananas: 13,
			grapes: 35,
			strawberries: 27
		};

		function checkInventory(scannedItem) {
			// Only change code below this line
			return foods[scannedItem]
			// Only change code above this line
		}

		console.log(checkInventory("apples"));
        `,
	},
	{
		section: 16,
		title: `Use the delete Keyword to Remove Object Properties`,
		exercise: `Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.`,
		starterCode: `
		let foods = {
			apples: 25,
			oranges: 32,
			plums: 28,
			bananas: 13,
			grapes: 35,
			strawberries: 27
		};

		// Only change code below this line

		// Only change code above this line

		console.log(foods);
        `,
		solution: `
        let foods = {
			apples: 25,
			oranges: 32,
			plums: 28,
			bananas: 13,
			grapes: 35,
			strawberries: 27
		};

		// Only change code below this line
		delete foods.oranges
		delete foods.plums
		delete foods.strawberries
		// Only change code above this line

		console.log(foods);
        `,
	},
	{
		section: 17,
		title: `Check if an Object has a Property`,
		exercise: `Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.`,
		starterCode: `
		let users = {
			Alan: {
				age: 27,
				online: true
			},
			Jeff: {
				age: 32,
				online: true
			},
			Sarah: {
				age: 48,
				online: true
			},
			Ryan: {
				age: 19,
				online: true
			}
		};

		function isEveryoneHere(userObj) {
		// Only change code below this line
		
		// Only change code above this line
		}

		console.log(isEveryoneHere(users));
        `,
		solution: `
        let users = {
			Alan: {
				age: 27,
				online: true
			},
			Jeff: {
				age: 32,
				online: true
			},
			Sarah: {
				age: 48,
				online: true
			},
			Ryan: {
				age: 19,
				online: true
			}
		};

		function isEveryoneHere(userObj) {
			// Only change code below this line
			return userObj.hasOwnProperty('Alan')&&userObj.hasOwnProperty('Jeff')&&userObj.hasOwnProperty('Sarah')&&userObj.hasOwnProperty('Ryan')
			// Only change code above this line
		}

		console.log(isEveryoneHere(users));
        `,
	},
	{
		section: 18,
		title: `Iterate Through the Keys of an Object with a for...in Statement`,
		exercise: `We've defined a function countOnline which accepts one argument (a users object). Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to true. An example of a users object which could be passed to countOnline is shown below. Each user will have an online property with either a true or false value.

		{
			Alan: {
				online: false
			},
			Jeff: {
				online: true
			},
			Sarah: {
				online: false
			}
		}
		`,
		starterCode: `
		function countOnline(usersObj) {
			// Only change code below this line

			// Only change code above this line
		}
        `,
		solution: `
        function countOnline(usersObj) {
			// Only change code below this line
			let count=0;
			for(let user in usersObj){
				usersObj[user].online===true?count++:count;
			}
			return count;
			// Only change code above this line
		}
        `,
	},
	{
		section: 19,
		title: `Generate an Array of All Object Keys with Object.keys()`,
		exercise: `Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.`,
		starterCode: `
		let users = {
			Alan: {
				age: 27,
				online: false
			},
			Jeff: {
				age: 32,
				online: true
			},
			Sarah: {
				age: 48,
				online: false
			},
			Ryan: {
				age: 19,
				online: true
			}
		};

		function getArrayOfUsers(obj) {
		// Only change code below this line

		// Only change code above this line
		}

		console.log(getArrayOfUsers(users));
        `,
		solution: `
        let users = {
			Alan: {
				age: 27,
				online: false
			},
			Jeff: {
				age: 32,
				online: true
			},
			Sarah: {
				age: 48,
				online: false
			},
			Ryan: {
				age: 19,
				online: true
			}
		};

		function getArrayOfUsers(obj) {
			// Only change code below this line
			return Object.keys(obj)
			// Only change code above this line
		}

		console.log(getArrayOfUsers(users));
        `,
	},
	{
		section: 20,
		title: `Modify an Array Stored in an Object`,
		exercise: `Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.`,
		starterCode: `
		let user = {
			name: 'Kenneth',
			age: 28,
			data: {
				username: 'kennethCodesAllDay',
				joinDate: 'March 26, 2016',
				organization: 'freeCodeCamp',
				friends: [
				'Sam',
				'Kira',
				'Tomo'
				],
				location: {
				city: 'San Francisco',
				state: 'CA',
				country: 'USA'
				}
			}
		};

		function addFriend(userObj, friend) {
			// Only change code below this line

			// Only change code above this line
		}

		console.log(addFriend(user, 'Pete'));
        `,
		solution: `
        let user = {
			name: 'Kenneth',
			age: 28,
			data: {
				username: 'kennethCodesAllDay',
				joinDate: 'March 26, 2016',
				organization: 'freeCodeCamp',
				friends: [
				'Sam',
				'Kira',
				'Tomo'
				],
				location: {
				city: 'San Francisco',
				state: 'CA',
				country: 'USA'
				}
			}
		};

		function addFriend(userObj, friend) {
			// Only change code below this line
			userObj.data.friends.push(friend)
			return userObj.data.friends
			// Only change code above this line
		}

		console.log(addFriend(user, 'Pete'));
        `,
	},
];

bdsResults(bdsList);
