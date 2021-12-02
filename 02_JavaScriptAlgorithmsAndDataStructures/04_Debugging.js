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
const debug = document.querySelector(".js-debug");
// const outcomeEL = document.querySelector("#js-outcome");
// const titleEL = document.querySelector("#js-title");

const debugResults = result => {
	// console.dir(result[0]["section"]);
	for (let item of result) {
		// console.dir(item["section"]);
		debug.innerHTML += `
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

const debugList = [
	{
		section: 01,
		title: `Use the JavaScript Console to Check the Value of a Variable`,
		exercise: `Use the console.log() method to print the value of the variable a where noted in the code.`,
		starterCode: `
        let a = 5;
        let b = 1;
        a++;
        // Only change code below this line


        let sumAB = a + b;
        console.log(sumAB);
        `,
		solution: `
        let a = 5;
        let b = 1;
        a++;
        // Only change code below this line
        console.log(a)

        let sumAB = a + b;
        console.log(sumAB);
        `,
	},
	{
		section: 02,
		title: `Understanding the Differences between the freeCodeCamp and Browser Console`,
		exercise: `First, open your browser console so you can see the logs. To do that, you can right-click the freeCodeCamp navigation bar at the top and click inspect on most browsers. Then find the console tab in the window that opens.

        After that, use console.log to log the output variable. View the two consoles to see the log. Finally, use console.clear after your log to clear the browser console. View the difference in the two consoles.`,
		starterCode: `
        let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
        `,
		solution: `
        let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
        console.log(output)
        console.clear()
        `,
	},
	{
		section: 03,
		title: `Use typeof to Check the Type of a Variable`,
		exercise: `Add two console.log() statements to check the typeof each of the two variables seven and three in the code.`,
		starterCode: `
        let seven = 7;
        let three = "3";
        console.log(seven + three);
        // Only change code below this line
        `,
		solution: `
        let seven = 7;
        let three = "3";
        console.log(seven + three);
        // Only change code below this line
        console.log(typeof seven)
        console.log(typeof three)
        `,
	},
	{
		section: 04,
		title: `Catch Misspelled Variable and Function Names`,
		exercise: `Fix the two spelling errors in the code so the netWorkingCapital calculation works.`,
		starterCode:
			"\n let receivables = 10;\n let payables = 8;\n let netWorkingCapital = recievables - payable;\n console.log('Net working capital is: $\n{netWorkingCapital}');\n ",
		solution:
			"\n let receivables = 10;\n let payables = 8;\n let netWorkingCapital = receivables - payables;\n console.log(``Net working capital is: $\n  {netWorkingCapital}`);\n ",
	},
	{
		section: 05,
		title: `Catch Unclosed Parentheses, Brackets, Braces and Quotes`,
		exercise: `Fix the two pair errors in the code.`,
		starterCode:
			"\n let myArray = [1, 2, 3;\n let arraySum = myArray.reduce((previous, current =>  previous + current);\n console.log(`Sum of array values is: ${arraySum}``);\n ",
		solution:
			"\n let myArray = [1, 2, 3];\n let arraySum = myArray.reduce((previous, current) =>  previous + current);\n console.log(`Sum of array values is: ${arraySum}``);\n ",
	},
	{
		section: 06,
		title: `Catch Mixed Usage of Single and Double Quotes`,
		exercise: `Fix the string so it either uses different quotes for the href value, or escape the existing ones. Keep the double quote marks around the entire string.`,
		starterCode: `
        let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
        console.log(innerHtml);
        `,
		solution: `
        let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
        console.log(innerHtml);
        `,
	},
	{
		section: 07,
		title: `Catch Use of Assignment Operator Instead of Equality Operator`,
		exercise: `Fix the condition so the program runs the right branch, and the appropriate value is assigned to result.`,
		starterCode: `
        let x = 7;
        let y = 9;
        let result = "to come";

        if(x = y) {
            result = "Equal!";
        } else {
            result = "Not equal!";
        }

        console.log(result);
        `,
		solution: `
        let x = 7;
        let y = 9;
        let result = "to come";

        if(x === y) {
            result = "Equal!";
        } else {
            result = "Not equal!";
        }

        console.log(result);
        `,
	},
	{
		section: 08,
		title: `Catch Missing Open and Closing Parenthesis After a Function Call`,
		exercise: `Fix the code so the variable result is set to the value returned from calling the function getNine.`,
		starterCode: `
        function getNine() {
            let x = 6;
            let y = 3;
            return x + y;
        }

        let result = getNine;
        console.log(result);
        `,
		solution: `
        function getNine() {
            let x = 6;
            let y = 3;
            return x + y;
        }

        let result = getNine();
        console.log(result);
        `,
	},
	{
		section: 09,
		title: `Catch Arguments Passed in the Wrong Order When Calling a Function`,
		exercise: `The function raiseToPower raises a base to an exponent. Unfortunately, it's not called properly - fix the code so the value of power is the expected 8.`,
		starterCode: `
        function raiseToPower(b, e) {
            return Math.pow(b, e);
        }

        let base = 2;
        let exp = 3;
        let power = raiseToPower(exp, base);
        console.log(power);
        `,
		solution: `
        function raiseToPower(b, e) {
            return Math.pow(b, e);
        }

        let base = 2;
        let exp = 3;
        let power = raiseToPower(base, exp );
        console.log(power);
        `,
	},
	{
		section: 10,
		title: `Catch Off By One Errors When Using Indexing`,
		exercise: `Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.`,
		starterCode: `
            function countToFive() {
            let firstFive = "12345";
            let len = firstFive.length;
            // Only change code below this line
            for (let i = 1; i <= len; i++) {
            // Only change code above this line
                console.log(firstFive[i]);
            }
        }

        countToFive();
        `,
		solution: `
        function countToFive() {
            let firstFive = "12345";
            let len = firstFive.length;
            // Only change code below this line
            for (let i = 0; i < len; i++) {
            // Only change code above this line
                console.log(firstFive[i]);
            }
        }

        countToFive();
        `,
	},
	{
		section: 11,
		title: `Use Caution When Reinitializing Variables Inside a Loop`,
		exercise: `The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes. Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].`,
		starterCode: `
        function zeroArray(m, n) {
            // Creates a 2-D array with m rows and n columns of zeroes
            let newArray = [];
            let row = [];
            for (let i = 0; i < m; i++) {
                // Adds the m-th row into newArray

                for (let j = 0; j < n; j++) {
                // Pushes n zeroes into the current row to create the columns
                row.push(0);
                }
                // Pushes the current row, which now has n zeroes in it, to the array
                newArray.push(row);
        }
        return newArray;
        }

        let matrix = zeroArray(3, 2);
        console.log(matrix);
        `,
		solution: `
        function zeroArray(m, n) {
            // Creates a 2-D array with m rows and n columns of zeroes
            let newArray = [];
            for (let i = 0; i < m; i++) {
                // Adds the m-th row into newArray
            let row = [];
                for (let j = 0; j < n; j++) {
                // Pushes n zeroes into the current row to create the columns
                row.push(0);
                }
                // Pushes the current row, which now has n zeroes in it, to the array
                newArray.push(row);
        }
        return newArray;
        }

        let matrix = zeroArray(3, 2);
        console.log(matrix);
        `,
	},
	{
		section: 12,
		title: `Prevent Infinite Loops with a Valid Terminal Condition`,
		exercise: `The myFunc() function contains an infinite loop because the terminal condition i != 4 will never evaluate to false (and break the looping) - i will increment by 2 each pass, and jump right over 4 since i is odd to start. Fix the comparison operator in the terminal condition so the loop only runs for i less than or equal to 4.`,
		starterCode: `
        function myFunc() {
            for (let i = 1; i != 4; i += 2) {
                console.log("Still going!");
            }
        }
        `,
		solution: `
        function myFunc() {
            for (let i = 1; i <= 4; i += 2) {
                console.log("Still going!");
            }
        }
        `,
	},
];

debugResults(debugList);
