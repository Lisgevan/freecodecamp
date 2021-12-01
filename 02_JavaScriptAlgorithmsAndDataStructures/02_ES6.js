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
const es6 = document.querySelector(".js-ES6");
// const outcomeEL = document.querySelector("#js-outcome");
// const titleEL = document.querySelector("#js-title");

const es6Results = result => {
	// console.dir(result[0]["section"]);
	for (let item of result) {
		console.dir(item["section"]);
		es6.innerHTML += `
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

const es6List = [
	{
		section: 01,
		title: `Compare Scopes of the var and let Keywords`,
		exercise: `Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.`,
		starterCode: `
        function checkScope() {
        var i = 'function scope';
        if (true) {
            i = 'block scope';
            console.log('Block scope i is: ', i);
        }
        console.log('Function scope i is: ', i);
        return i;
        }
        `,
		solution: `
        function checkScope() {
        let i = 'function scope';
        if (true) {
            let i = 'block scope';
            console.log('Block scope i is: ', i);
        }
        console.log('Function scope i is: ', i);
        return i;
        }
        `,
	},
	{
		section: 02,
		title: `Mutate an Array Declared with const`,
		exercise: `An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.`,
		starterCode: `
        const s = [5, 7, 2];
        function editInPlace() {
        // Only change code below this line
        
        // Using s = [2, 5, 7] would be invalid

        // Only change code above this line
        }
        editInPlace();
        `,
		solution: `
        const s = [5, 7, 2];
        function editInPlace() {
        // Only change code below this line
        s[0]=2;
        s[1]=5;
        s[2]=7
        // Using s = [2, 5, 7] would be invalid

        // Only change code above this line
        }
        editInPlace();
        `,
	},
	{
		section: 03,
		title: `Prevent Object Mutation`,
		exercise: `In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.`,
		starterCode: `
        function freezeObj() {
        const MATH_CONSTANTS = {
            PI: 3.14
        };
        // Only change code below this line


        // Only change code above this line
        try {
            MATH_CONSTANTS.PI = 99;
        } catch(ex) {
            console.log(ex);
        }
        return MATH_CONSTANTS.PI;
        }
        const PI = freezeObj();
        `,
		solution: `
        function freezeObj() {
        const MATH_CONSTANTS = {
            PI: 3.14
        };
        // Only change code below this line

        Object.freeze(MATH_CONSTANTS)
        // Only change code above this line
        try {
            MATH_CONSTANTS.PI = 99;
        } catch(ex) {
            console.log(ex);
        }
        return MATH_CONSTANTS.PI;
        }
        const PI = freezeObj();
        `,
	},
	{
		section: 04,
		title: `Use Arrow Functions to Write Concise Anonymous Functions`,
		exercise: `Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var.`,
		starterCode: `
        var magic = function() {
        return new Date();
        };
        `,
		solution: `
        const magic = ()=>{
        return new Date();
        };
        `,
	},
	{
		section: 05,
		title: `Write Arrow Functions with Parameters`,
		exercise: `Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.`,
		starterCode: `
        var myConcat = function(arr1, arr2) {
        return arr1.concat(arr2);
        };

        console.log(myConcat([1, 2], [3, 4, 5]));
        `,
		solution: `
        const myConcat = (arr1, arr2)=>{
        return arr1.concat(arr2);
        };

        console.log(myConcat([1, 2], [3, 4, 5]));
        `,
	},
	{
		section: 06,
		title: `Set Default Parameters for Your Functions`,
		exercise: `Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.`,
		starterCode: `
        // Only change code below this line
        const increment = (number, value) => number + value;
        // Only change code above this line
        `,
		solution: `
        // Only change code below this line
        const increment = (number, value=1) => number + value;
        // Only change code above this line
        `,
	},
	{
		section: 07,
		title: `Use the Rest Parameter with Function Parameters`,
		exercise: `Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.`,
		starterCode: `
        const sum = (x, y, z) => {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
        }`,

		solution: `
        const sum = (...args) => {
        return args.reduce((a, b) => a + b, 0);
        }
        `,
	},
	{
		section: 08,
		title: `Use the Spread Operator to Evaluate Arrays In-Place`,
		exercise: `Copy all contents of arr1 into another array arr2 using the spread operator.`,
		starterCode: `
        const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
        let arr2;

        arr2 = [];  // Change this line

        console.log(arr2);
        `,
		solution: `
        const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
        let arr2;

        arr2 = [...arr1];  // Change this line

        console.log(arr2);
        `,
	},
	{
		section: 09,
		title: `Use Destructuring Assignment to Extract Values from Objects`,
		exercise: `Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.`,
		starterCode: `
        const HIGH_TEMPERATURES = {
            yesterday: 75,
            today: 77,
            tomorrow: 80
        };

        // Only change code below this line

        const today = HIGH_TEMPERATURES.today;
        const tomorrow = HIGH_TEMPERATURES.tomorrow;

        // Only change code above this line
        `,
		solution: `
        const HIGH_TEMPERATURES = {
            yesterday: 75,
            today: 77,
            tomorrow: 80
        };

        // Only change code below this line
        const {today, tomorrow} = HIGH_TEMPERATURES;

        // Only change code above this line
        `,
	},
	{
		section: 10,
		title: `Use Destructuring Assignment to Assign Variables from Objects`,
		exercise: `Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.`,
		starterCode: `
        const HIGH_TEMPERATURES = {
            yesterday: 75,
            today: 77,
            tomorrow: 80
        };

        // Only change code below this line
        
        const highToday = HIGH_TEMPERATURES.today;
        const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

        // Only change code above this line
        `,
		solution: `
        const HIGH_TEMPERATURES = {
            yesterday: 75,
            today: 77,
            tomorrow: 80
        };

        // Only change code below this line
        
        const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES; 

        // Only change code above this line
        `,
	},
	{
		section: 11,
		title: `Use Destructuring Assignment to Assign Variables from Nested Objects`,
		exercise: `Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.`,
		starterCode: `
        const LOCAL_FORECAST = {
            yesterday: { low: 61, high: 75 },
            today: { low: 64, high: 77 },
            tomorrow: { low: 68, high: 80 }
        };

        // Only change code below this line
        
        const lowToday = LOCAL_FORECAST.today.low;
        const highToday = LOCAL_FORECAST.today.high;

        // Only change code above this line
        `,
		solution: `
        const LOCAL_FORECAST = {
            yesterday: { low: 61, high: 75 },
            today: { low: 64, high: 77 },
            tomorrow: { low: 68, high: 80 }
        };

        // Only change code below this line
        
        const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;

        // Only change code above this line
        `,
	},
	{
		section: 12,
		title: `Use Destructuring Assignment to Assign Variables from Arrays`,
		exercise: `Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.`,
		starterCode: `
        let a = 8, b = 6;
        // Only change code below this line
        `,
		solution: `
        let a = 8, b = 6;
        // Only change code below this line
        [a, b]=[b, a];
        `,
	},
	{
		section: 13,
		title: `Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements`,
		exercise: `Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.`,
		starterCode: `
        const source = [1,2,3,4,5,6,7,8,9,10];
        function removeFirstTwo(list) {
            // Only change code below this line
            const arr = list; // Change this line
            // Only change code above this line
            return arr;
        }
        const arr = removeFirstTwo(source);
        `,
		solution: `
        const source = [1,2,3,4,5,6,7,8,9,10];
        function removeFirstTwo(list) {
            // Only change code below this line
            const [a, b, ...arr] = list; // Change this line
            // Only change code above this line
            return arr;
        }
        const arr = removeFirstTwo(source);
        `,
	},
	{
		section: 14,
		title: `Use Destructuring Assignment to Pass an Object as a Function's Parameters`,
		exercise: `Use destructuring assignment within the argument to the function half to send only max and min inside the function.`,
		starterCode: `
        const stats = {
            max: 56.78,
            standard_deviation: 4.34,
            median: 34.54,
            mode: 23.87,
            min: -0.75,
            average: 35.85
        };

        // Only change code below this line
        const half = (stats) => (stats.max + stats.min) / 2.0; 
        // Only change code above this line
        `,
		solution: `
        const stats = {
            max: 56.78,
            standard_deviation: 4.34,
            median: 34.54,
            mode: 23.87,
            min: -0.75,
            average: 35.85
        };

        // Only change code below this line
        const half = ({max, min}) => (max + min) / 2.0; 
        // Only change code above this line
        `,
	},
	{
		section: 15,
		title: `Create Strings using Template Literals`,
		exercise: `
        Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

        Use an iterator method (any kind of loop) to get the desired output (shown below).

        [
        '<li class="text-warning">no-var</li>',
        '<li class="text-warning">var-on-top</li>',
        '<li class="text-warning">linebreak</li>'
        ]
        `,
		starterCode: `
        const result = {
            success: ["max-length", "no-amd", "prefer-arrow-functions"],
            failure: ["no-var", "var-on-top", "linebreak"],
            skipped: ["no-extra-semi", "no-dup-keys"]
        };
        function makeList(arr) {
            // Only change code below this line
            const failureItems = [];
            // Only change code above this line

            return failureItems;
        }

        const failuresList = makeList(result.failure);
        `,
		solution: `'
        const result = {
            success: ["max-length", "no-amd", "prefer-arrow-functions"],
            failure: ["no-var", "var-on-top", "linebreak"],
            skipped: ["no-extra-semi", "no-dup-keys"]
        };
        function makeList(arr) {
            // Only change code below this line
            const failureItems = [];
            for (let item of result.failure){
                failureItems.push(
                //remove backshlashes bellow//
                \`<li class="text-warning">\${item}</li>\`
                )
            }
            // Only change code above this line

            return failureItems;
        }

        const failuresList = makeList(result.failure);
        '`,
	},
	{
		section: 16,
		title: `Write Concise Object Literal Declarations Using Object Property Shorthand`,
		exercise: `Use object property shorthand with object literals to create and return an object with name, age and gender properties.`,
		starterCode: `
        const createPerson = (name, age, gender) => {
            // Only change code below this line
            return {
                name: name,
                age: age,
                gender: gender
        };
        // Only change code above this line
        };
        `,
		solution: `
        const createPerson = (name, age, gender) => {
            // Only change code below this line
            return {
                name,
                age,
                gender,
            };
            // Only change code above this line
        };
        `,
	},
	{
		section: 17,
		title: `Write Concise Declarative Functions with ES6`,
		exercise: `Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.`,
		starterCode: `
        // Only change code below this line
        const bicycle = {
            gear: 2,
            setGear: function(newGear) {
                this.gear = newGear;
            }
        };
        // Only change code above this line
        bicycle.setGear(3);
        console.log(bicycle.gear);
        `,
		solution: `
        // Only change code below this line
        const bicycle = {
            gear: 2,
            setGear(newGear) {
                this.gear = newGear;
            }
        };
        // Only change code above this line
        bicycle.setGear(3);
        console.log(bicycle.gear);
        `,
	},
	{
		section: 18,
		title: `Use class Syntax to Define a Constructor Function`,
		exercise: `Use the class keyword and write a constructor to create the Vegetable class.

        The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.`,
		starterCode: `
        // Only change code below this line

        // Only change code above this line

        const carrot = new Vegetable('carrot');
        console.log(carrot.name); // Should display 'carrot'`,
		solution: `
        // Only change code below this line
        class Vegetable {
            constructor(name){
            this.name = name;
            }
        }
        // Only change code above this line

        const carrot = new Vegetable('carrot');
        console.log(carrot.name); // Should display 'carrot'
        `,
	},
	{
		section: 19,
		title: `Use getters and setters to Control Access to an Object`,
		exercise: `
        Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

        In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.

        Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.
        `,
		starterCode: `
        // Only change code below this line

        // Only change code above this line

        const thermos = new Thermostat(76); // Setting in Fahrenheit scale
        let temp = thermos.temperature; // 24.44 in Celsius
        thermos.temperature = 26;
        temp = thermos.temperature; // 26 in Celsius
        `,
		solution: `
        // Only change code below this line
        class Thermostat {
            constructor(fahrenheit ){
                this._fahrenheit = fahrenheit;
            }

            // getter
            get temperature() {
                return 5/9*(this._fahrenheit-32);
            }

            // setter
            set temperature(celcius) {
                this._fahrenheit =celcius*9.0/5+32;
            }
        }
        // Only change code above this line

        const thermos = new Thermostat(76); // Setting in Fahrenheit scale
        let temp = thermos.temperature; // 24.44 in Celsius
        thermos.temperature = 26;
        temp = thermos.temperature; // 26 in Celsius
        `,
	},
	{
		section: 20,
		title: `Create a Module Script`,
		exercise: `Add a script to the HTML document of type module and give it the source file of index.js`,
		starterCode: `
        <html>
            <body>
                <!-- Only change code below this line -->

                <!-- Only change code above this line -->
            </body>
        </html>
        `,
		solution: `
        <html>
            <body>
                <!-- Only change code below this line -->
                <script type="module" src="index.js"></script>
                <!-- Only change code above this line -->
            </body>
        </html>
        `,
	},
	{
		section: 21,
		title: `Use export to Share a Code Block`,
		exercise: `There are two string-related functions in the editor. Export both of them using the method of your choice.`,
		starterCode: `
        const uppercaseString = (string) => {
            return string.toUpperCase();
        }

        const lowercaseString = (string) => {
            return string.toLowerCase()
        }
        `,
		solution: `
        const uppercaseString = (string) => {
            return string.toUpperCase();
        }

        const lowercaseString = (string) => {
            return string.toLowerCase()
        }

        export{uppercaseString, lowercaseString}
        `,
	},
	{
		section: 22,
		title: `Reuse JavaScript Code Using import`,
		exercise: `Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in the same directory as the current file.`,
		starterCode: `
          
        // Only change code above this line

        uppercaseString("hello");
        lowercaseString("WORLD!");
        `,
		solution: `
        import {uppercaseString, lowercaseString} from './string_functions.js'
        // Only change code above this line

        uppercaseString("hello");
        lowercaseString("WORLD!");
        `,
	},
	{
		section: 23,
		title: `Use * to Import Everything from a File`,
		exercise: `The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. Use the import * as syntax to import everything from the file into an object called stringFunctions.`,
		starterCode: `
        
        // Only change code above this line

        stringFunctions.uppercaseString("hello");
        stringFunctions.lowercaseString("WORLD!");
        `,
		solution: `
        import * as stringFunctions from './string_functions.js'
        // Only change code above this line

        stringFunctions.uppercaseString("hello");
        stringFunctions.lowercaseString("WORLD!");
        `,
	},
	{
		section: 24,
		title: `Create an Export Fallback with export default`,
		exercise: `The following function should be the fallback value for the module. Please add the necessary code to do so.`,
		starterCode: `
        function subtract(x, y) {
            return x - y;
        }
        `,
		solution: `
        export default function subtract(x, y) {
            return x - y;
        }
        `,
	},
	{
		section: 25,
		title: `Import a Default Export`,
		exercise: `In the following code, import the default export from the math_functions.js file, found in the same directory as this file. Give the import the name subtract.`,
		starterCode: `
          
        // Only change code above this line

        subtract(7,4);
        `,
		solution: `
        import subtract from './math_functions.js'
        // Only change code above this line

        subtract(7,4);
        `,
	},
	{
		section: 26,
		title: `Create a JavaScript Promise`,
		exercise: `Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters to the constructor.`,
		starterCode: ``,
		solution: `
        const makeServerRequest = new Promise((resolve, reject)=>{})
        `,
	},
	{
		section: 27,
		title: `Complete a Promise with resolve and reject`,
		exercise: `Make the promise handle success and failure. If responseFromServer is true, call the resolve method to successfully complete the promise. Pass resolve a string with the value We got the data. If responseFromServer is false, use the reject method instead and pass it the string: Data not received.`,
		starterCode: `
        const makeServerRequest = new Promise((resolve, reject) => {
            // responseFromServer represents a response from a server
            let responseFromServer;
                
            if(responseFromServer) {
                // Change this line
            } else {  
                // Change this line
            }
        });
        `,
		solution: `
        const makeServerRequest = new Promise((resolve, reject) => {
            // responseFromServer represents a response from a server
            let responseFromServer;
                
            if(responseFromServer) {
                resolve('We got the data');// Change this line
            } else {  
                reject("Data not received");// Change this line
        }
        });
        `,
	},
	{
		section: 28,
		title: `Handle a Fulfilled Promise with then`,
		exercise: `Add the then method to your promise. Use result as the parameter of its callback function and log result to the console.`,
		starterCode: `
        const makeServerRequest = new Promise((resolve, reject) => {
            // responseFromServer is set to true to represent a successful response from a server
            let responseFromServer = true;
                
            if(responseFromServer) {
                resolve("We got the data");
            } else {  
                reject("Data not received");
            }
        });
        `,
		solution: `
        const makeServerRequest = new Promise((resolve, reject) => {
            // responseFromServer is set to true to represent a successful response from a server
            let responseFromServer = true;
                
            if(responseFromServer) {
                resolve("We got the data");
            } else {  
                reject("Data not received");
            }
        }).then(result=>{console.log(result)});
        `,
	},
	{
		section: 29,
		title: `Handle a Rejected Promise with catch`,
		exercise: `Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.`,
		starterCode: `
        const makeServerRequest = new Promise((resolve, reject) => {
            // responseFromServer is set to false to represent an unsuccessful response from a server
            let responseFromServer = false;
                
            if(responseFromServer) {
                resolve("We got the data");
            } else {  
                reject("Data not received");
            }
        });

        makeServerRequest.then(result => {
        console.log(result);
        });
        `,
		solution: `
        const makeServerRequest = new Promise((resolve, reject) => {
            // responseFromServer is set to false to represent an unsuccessful response from a server
            let responseFromServer = false;
                
            if(responseFromServer) {
                resolve("We got the data");
            } else {  
                reject("Data not received");
            }
            });

            makeServerRequest.then(result => {
            console.log(result);
        }).catch(error=>{console.log(error)});
        `,
	},
];

es6Results(es6List);
