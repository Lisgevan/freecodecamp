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
const basicJavaScript = document.querySelector(".js-basicJavaScript");
// const outcomeEL = document.querySelector("#js-outcome");
// const titleEL = document.querySelector("#js-title");

const basivJavaScriptResults = result => {
	// console.dir(result[0]["section"]);
	for (let item of result) {
		// console.dir(item["section"]);
		basicJavaScript.innerHTML += `
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

const basicJavaSciptList = [
	{
		section: 01,
		title: `Comment Your JavaScript Code`,
		exercise: `Try creating one of each type of comment.`,
		starterCode: ``,
		solution: `
        // This is an in-line comment.

        /* This is a
        multi-line comment */
        `,
	},
	{
		section: 02,
		title: `Declare JavaScript Variables`,
		exercise: `Use the var keyword to create a variable called myName.`,
		starterCode: ``,
		solution: `
        var myName;
        `,
	},
	{
		section: 03,
		title: `Storing Values with the Assignment Operator`,
		exercise: `Assign the value 7 to variable a.`,
		starterCode: ``,
		solution: `
        // Setup
        var a;

        // Only change code below this line
        `,
	},
	{
		section: 04,
		title: `Assigning the Value of One Variable to Another`,
		exercise: `Assign the contents of a to variable b.`,
		starterCode: ``,
		solution: `
        // Setup
        var a;
        a = 7;
        var b;

        // Only change code below this line
        `,
	},
	{
		section: 05,
		title: `Initializing Variables with the Assignment Operator`,
		exercise: `Define a variable a with var and initialize it to a value of 9.`,
		starterCode: ``,
		solution: `
        var a=9;
        `,
	},
	{
		section: 06,
		title: `Declare String Variables`,
		exercise: `Create two new string variables: myFirstName and myLastName and assign them the values of your first and last name, respectively.`,
		starterCode: ``,
		solution: `
        var myFirstName  = 'John';
        var myLastName = 'Doe';
        `,
	},
	{
		section: 07,
		title: `Understanding Uninitialized Variables`,
		exercise: `Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.`,
		starterCode: `
        // Only change code below this line
        var a;
        var b;
        var c;
        // Only change code above this line

        a = a + 1;
        b = b + 5;
        c = c + " String!";
        `,
		solution: `
        // Only change code below this line
        var a=5;
        var b=10;
        var c='I am a';
        // Only change code above this line

        a = a + 1;
        b = b + 5;
        c = c + " String!";
        `,
	},
	{
		section: 08,
		title: `Understanding Case Sensitivity in Variables`,
		exercise: `
        Modify the existing declarations and assignments so their names use camelCase.

        Do not create any new variables.
        `,
		starterCode: `
        // Variable declarations
        var StUdLyCapVaR;
        var properCamelCase;
        var TitleCaseOver;

        // Variable assignments
        STUDLYCAPVAR = 10;
        PRoperCAmelCAse = "A String";
        tITLEcASEoVER = 9000;
        `,
		solution: `
        // Variable declarations
        var studlyCapVar;
        var properCamelCase;
        var titleCaseOver;

        // Variable assignments
        studlyCapVar = 10;
        properCamelCase = "A String";
        titleCaseOver = 9000;
        `,
	},
	{
		section: 09,
		title: `Explore Differences Between the var and let Keywords`,
		exercise: `Update the code so it only uses the let keyword.`,
		starterCode: `
        var catName = "Oliver";
        var catSound = "Meow!";
        `,
		solution: `
        let catName = "Oliver";
        let catSound = "Meow!";
        `,
	},
	{
		section: 10,
		title: `Declare a Read-Only Variable with the const Keyword`,
		exercise: `Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices, meaning constants should be in all caps.`,
		starterCode: `
        var fCC = "freeCodeCamp"; // Change this line
        var fact = "is cool!"; // Change this line
        fact = "is awesome!";
        console.log(fCC, fact); // Change this line
        `,
		solution: `
        const FCC = "freeCodeCamp"; // Change this line
        let fact = "is cool!"; // Change this line
        fact = "is awesome!";
        console.log(FCC, fact); // Change this line
        `,
	},
	{
		section: 11,
		title: `Add Two Numbers with JavaScript`,
		exercise: `Change the 0 so that sum will equal 20.`,
		starterCode: `const sum = 10 + 0;`,
		solution: `
        const sum = 10 + 10;
        `,
	},
	{
		section: 12,
		title: `Subtract One Number from Another with JavaScript`,
		exercise: `Change the 0 so the difference is 12.`,
		starterCode: `const difference = 45 - 0;`,
		solution: `
        const difference = 45 - 33;
        `,
	},
	{
		section: 13,
		title: `Multiply Two Numbers with JavaScript`,
		exercise: `Change the 0 so that product will equal 80.`,
		starterCode: `const product = 8 * 0;`,
		solution: `
        const product = 8 * 10;
        `,
	},
	{
		section: 14,
		title: `Divide One Number by Another with JavaScript`,
		exercise: `Change the 0 so that the quotient is equal to 2.`,
		starterCode: `const quotient = 66 / 0;`,
		solution: `
        const quotient = 66 / 33;
        `,
	},
	{
		section: 15,
		title: `Increment a Number with JavaScript`,
		exercise: `Change the code to use the ++ operator on myVar.`,
		starterCode: `
        let myVar = 87;

        // Only change code below this line
        myVar = myVar + 1;
        `,
		solution: `
        let myVar = 87;

        // Only change code below this line
        myVar++;
        `,
	},
	{
		section: 16,
		title: `Decrement a Number with JavaScript`,
		exercise: `Change the code to use the -- operator on myVar.`,
		starterCode: `
        let myVar = 11;

        // Only change code below this line
        myVar = myVar - 1;
        `,
		solution: `
        let myVar = 11;

        // Only change code below this line
        myVar--;
        `,
	},
	{
		section: 17,
		title: `Create Decimal Numbers with JavaScript`,
		exercise: `Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).`,
		starterCode: `
        const ourDecimal = 5.7;

        // Only change code below this line

        `,
		solution: `
        const ourDecimal = 5.7;

        // Only change code below this line
        const myDecimal = 5.7;
        `,
	},
	{
		section: 18,
		title: `Multiply Two Decimals with JavaScript`,
		exercise: `Change the 0.0 so that product will equal 5.0.`,
		starterCode: `const product = 2.0 * 0.0;`,
		solution: `
        const product = 2.0 * 2.5;
        `,
	},
	{
		section: 19,
		title: `Divide One Decimal by Another with JavaScript`,
		exercise: `Change the 0.0 so that quotient will equal to 2.2.`,
		starterCode: `const quotient = 0.0 / 2.0; // Change this line`,
		solution: `
          const quotient = 4.4 / 2.0; // Change this line
          `,
	},
	{
		section: 20,
		title: `Finding a Remainder in JavaScript`,
		exercise: `Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.`,
		starterCode: `const remainder = 0;`,
		solution: `
        const remainder = 11%3;
        `,
	},
	{
		section: 21,
		title: `Compound Assignment With Augmented Addition`,
		exercise: `Convert the assignments for a, b, and c to use the += operator.`,
		starterCode: `
        let a = 3;
        let b = 17;
        let c = 12;

        // Only change code below this line
        a = a + 12;
        b = 9 + b;
        c = c + 7;
        `,
		solution: `
        let a = 3;
        let b = 17;
        let c = 12;

        // Only change code below this line
        a += 12;
        b += 9;
        c += 7;
        `,
	},
	{
		section: 22,
		title: `Compound Assignment With Augmented Subtraction`,
		exercise: `Convert the assignments for a, b, and c to use the -= operator.`,
		starterCode: `
        let a = 11;
        let b = 9;
        let c = 3;

        // Only change code below this line
        a = a - 6;
        b = b - 15;
        c = c - 1;
        `,
		solution: `let a = 11;
        let b = 9;
        let c = 3;

        // Only change code below this line
        a -= 6;
        b -= 15;
        c -= 1;
        `,
	},
	{
		section: 23,
		title: `Compound Assignment With Augmented Multiplication`,
		exercise: `Convert the assignments for a, b, and c to use the *= operator.`,
		starterCode: `
        let a = 5;
        let b = 12;
        let c = 4.6;

        // Only change code below this line
        a = a * 5;
        b = 3 * b;
        c = c * 10;
        `,
		solution: `
        let a = 5;
        let b = 12;
        let c = 4.6;

        // Only change code below this line
        a *= 5;
        b *= 3;
        c *= 10;
        `,
	},
	{
		section: 24,
		title: `Compound Assignment With Augmented Division`,
		exercise: `Convert the assignments for a, b, and c to use the /= operator.`,
		starterCode: `
        let a = 48;
        let b = 108;
        let c = 33;

        // Only change code below this line
        a = a / 12;
        b = b / 4;
        c = c / 11;
        `,
		solution: `
        let a = 48;
        let b = 108;
        let c = 33;

        // Only change code below this line
        a /= 12;
        b /= 4;
        c /= 11;
        `,
	},
	{
		section: 25,
		title: `Escaping Literal Quotes in Strings`,
		exercise: `Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:

        I am a "double quoted" string inside "double quotes".`,
		starterCode: `const myStr = ""; // Change this line`,
		solution: `
        const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
        `,
	},
	{
		section: 26,
		title: `Quoting Strings with Single Quotes`,
		exercise: `Change the provided string to a string with single quotes at the beginning and end and no escape characters.

        Right now, the <a> tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters.`,
		starterCode: `const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";`,
		solution: `
        const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
        `,
	},
	{
		section: 27,
		title: `Escape Sequences in Strings`,
		exercise: `Assign the following three lines of text into the single variable myStr using escape sequences.

        FirstLine
            \SecondLine
        ThirdLine

        You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.

        Note: The indentation for SecondLine is achieved with the tab escape character, not spaces.`,
		starterCode: `const myStr = ""; // Change this line`,
		solution: `
        const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
        `,
	},
	{
		section: 28,
		title: `Concatenating Strings with Plus Operator`,
		exercise: `Build myStr from the strings This is the start. and This is the end. using the + operator. Be sure to include a space between the two strings.`,
		starterCode: `const myStr = ""; // Change this line`,
		solution: `
        const myStr = "This is the start. " + "This is the end."; // Change this line
        `,
	},
	{
		section: 29,
		title: `Concatenating Strings with the Plus Equals Operator`,
		exercise: `Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr, then add on the second string.`,
		starterCode: `let myStr;`,
		solution: `
        let myStr;
        myStr = "This is the first sentence. ";
        myStr += "This is the second sentence.";
        `,
	},
	{
		section: 30,
		title: `Constructing Strings with Variables`,
		exercise: `Set myName to a string equal to your name and build myStr with myName between the strings My name is and and I am well!`,
		starterCode: `
        // Only change code below this line
        const myName = "";
        const myStr = "";
        `,
		solution: `
        // Only change code below this line
        const myName = "John";
        const myStr = "My name is " + myName + " and I am well!";
        `,
	},
	{
		section: 31,
		title: `Appending Variables to Strings`,
		exercise: `Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.`,
		starterCode: `
        // Change code below this line
        const someAdjective = "";
        let myStr = "Learning to code is ";
        `,
		solution: `// Change code below this line
        const someAdjective = "qwerty";
        let myStr = "Learning to code is "
        myStr += someAdjective;
        `,
	},
	{
		section: 32,
		title: `Find the Length of a String`,
		exercise: `Use the .length property to count the number of characters in the lastName variable and assign it to lastNameLength.`,
		starterCode: `
        // Setup
        let lastNameLength = 0;
        const lastName = "Lovelace";

        // Only change code below this line
        lastNameLength = lastName;
        `,
		solution: `
        // Setup
        let lastNameLength = 0;
        const lastName = "Lovelace";

        // Only change code below this line
        lastNameLength = lastName.length;
        `,
	},
	{
		section: 33,
		title: `Use Bracket Notation to Find the First Character in a String`,
		exercise: `Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.`,
		starterCode: `
        // Setup
        let firstLetterOfLastName = "";
        const lastName = "Lovelace";

        // Only change code below this line
        firstLetterOfLastName = lastName; // Change this line
        `,
		solution: `
        // Setup
        let firstLetterOfLastName = "";
        const lastName = "Lovelace";

        // Only change code below this line
        firstLetterOfLastName = lastName[0]; // Change this line
        `,
	},
	{
		section: 34,
		title: `Understand String Immutability`,
		exercise: `Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.`,
		starterCode: `
        // Setup
        let myStr = "Jello World";

        // Only change code below this line
        myStr[0] = "H"; // Change this line
        // Only change code above this line
        `,
		solution: `
        // Setup
        let myStr = "Jello World";

        // Only change code below this line
        myStr = "Hello World"; // Change this line
        // Only change code above this line
        `,
	},
	{
		section: 35,
		title: `Use Bracket Notation to Find the Nth Character in a String`,
		exercise: `Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.`,
		starterCode: `
        // Setup
        const lastName = "Lovelace";

        // Only change code below this line
        const thirdLetterOfLastName = lastName; // Change this line
        `,
		solution: `
        // Setup
        const lastName = "Lovelace";

        // Only change code below this line
        const thirdLetterOfLastName = lastName[2]; // Change this line
        `,
	},
	{
		section: 36,
		title: `Use Bracket Notation to Find the Last Character in a String`,
		exercise: `Use bracket notation to find the last character in the lastName variable.`,
		starterCode: `
        // Setup
        const lastName = "Lovelace";

        // Only change code below this line
        const lastLetterOfLastName = lastName; // Change this line
        `,
		solution: `
        // Setup
        const lastName = "Lovelace";

        // Only change code below this line
        const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
        `,
	},
	{
		section: 37,
		title: `Use Bracket Notation to Find the Nth-to-Last Character in a String`,
		exercise: `Use bracket notation to find the second-to-last character in the lastName string`,
		starterCode: `
        // Setup
        const lastName = "Lovelace";

        // Only change code below this line
        const secondToLastLetterOfLastName = lastName; // Change this line
        `,
		solution: `
        // Setup
        const lastName = "Lovelace";

        // Only change code below this line
        const secondToLastLetterOfLastName = lastName[lastName.length -2]; // Change this line
        `,
	},
	{
		section: 38,
		title: `Word Blanks`,
		exercise: `In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide. 

        You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed string to the wordBlanks variable. You should not change the words assigned to the variables. 

        You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.`,
		starterCode: `
        const myNoun = "dog";
        const myAdjective = "big";
        const myVerb = "ran";
        const myAdverb = "quickly";

        // Only change code below this line
        const wordBlanks = ""; // Change this line
        // Only change code above this line
        `,
		solution: `
        const myNoun = "dog";
        const myAdjective = "big";
        const myVerb = "ran";
        const myAdverb = "quickly";

        // Only change code below this line
        const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Change this line
        // Only change code above this line
        `,
	},
	{
		section: 39,
		title: `Store Multiple Values in one Variable using JavaScript Arrays`,
		exercise: `Modify the new array myArray so that it contains both a string and a number (in that order).`,
		starterCode: `
        // Only change code below this line
        const myArray = [];
        `,
		solution: `
        // Only change code below this line
        const myArray = ['asd', 123];
        `,
	},
	{
		section: 40,
		title: `Nest one Array within Another Array`,
		exercise: `Create a nested array called myArray.`,
		starterCode: `
        // Only change code below this line
        const myArray = [];
        `,
		solution: `
        // Only change code below this line
        const myArray = [[123]];
        `,
	},
	{
		section: 41,
		title: `Access Array Data with Indexes`,
		exercise: `Create a variable called myData and set it to equal the first value of myArray using bracket notation.`,
		starterCode: `const myArray = [50, 60, 70];`,
		solution: `
        const myArray = [50, 60, 70];
        const myData = myArray[0];
        `,
	},
	{
		section: 42,
		title: `Modify Array Data With Indexes`,
		exercise: `Modify the data stored at index 0 of myArray to a value of 45.`,
		starterCode: `
        // Setup
        const myArray = [18, 64, 99];

        // Only change code below this line

        `,
		solution: `
        // Setup
        const myArray = [18, 64, 99];
        myArray[0]=45;
        // Only change code below this line

        `,
	},
	{
		section: 43,
		title: `Access Multi-Dimensional Arrays With Indexes`,
		exercise: `Using bracket notation select an element from myArray such that myData is equal to 8.`,
		starterCode: `
        const myArray = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [[10, 11, 12], 13, 14],
        ];

        const myData = myArray[0][0];
        `,
		solution: `
        const myArray = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [[10, 11, 12], 13, 14],
        ];

        const myData = myArray[2][1];
        `,
	},
	{
		section: 44,
		title: `Manipulate Arrays With push()`,
		exercise: `Push ["dog", 3] onto the end of the myArray variable.`,
		starterCode: `
        // Setup
        const myArray = [["John", 23], ["cat", 2]];

        // Only change code below this line
        `,
		solution: `
        // Setup
        const myArray = [["John", 23], ["cat", 2]];

        // Only change code below this line
        myArray.push(["dog", 3])
        `,
	},
	{
		section: 45,
		title: `Manipulate Arrays With pop()`,
		exercise: `Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.`,
		starterCode: `
        // Setup
        const myArray = [["John", 23], ["cat", 2]];

        // Only change code below this line
        `,
		solution: `
        // Setup
        const myArray = [["John", 23], ["cat", 2]];

        // Only change code below this line
        const removedFromMyArray = myArray.pop()
        `,
	},
	{
		section: 46,
		title: `Manipulate Arrays With shift()`,
		exercise: `Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.`,
		starterCode: `
        // Setup
        const myArray = [["John", 23], ["dog", 3]];

        // Only change code below this line
        `,
		solution: `
        // Setup
        const myArray = [["John", 23], ["dog", 3]];

        // Only change code below this line
        const removedFromMyArray = myArray.shift()
        `,
	},
	{
		section: 47,
		title: `Manipulate Arrays With unshift()`,
		exercise: `Add ["Paul", 35] to the beginning of the myArray variable using unshift().`,
		starterCode: `
        // Setup
        const myArray = [["John", 23], ["dog", 3]];
        myArray.shift();

        // Only change code below this line
        `,
		solution: `
        // Setup
        const myArray = [["John", 23], ["dog", 3]];
        myArray.shift();

        // Only change code below this line
        myArray.unshift(["Paul", 35])
        `,
	},
	{
		section: 48,
		title: `Shopping List`,
		exercise: `Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays. 

        The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e. 

        ["Chocolate Bar", 15]
        There should be at least 5 sub-arrays in the list.`,
		starterCode: `const myList = [];`,
		solution: `
        const myList = [["Chocolate Bar", 15], ["Chocolate Bar", 15], ["Chocolate Bar", 15], ["Chocolate Bar", 15], ["Chocolate Bar", 15]];
        `,
	},
	{
		section: 49,
		title: `Write Reusable JavaScript with Functions`,
		exercise: `1. Create a function called reusableFunction which prints the string Hi World to the dev console. 
        2. Call the function.
        `,
		starterCode: ``,
		solution: `
        function reusableFunction () {
        console.log("Hi World");
        }
        reusableFunction()
        `,
	},
	{
		section: 50,
		title: `Passing Values to Functions with Arguments`,
		exercise: `1. Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
        2. Call the function with two numbers as arguments.
        `,
		starterCode: ``,
		solution: `
        function functionWithArgs(num1, num2) {
        console.log(num1 + num2);
        }
        functionWithArgs(1,2)
        `,
	},
	{
		section: 51,
		title: `Return a Value from a Function with Return`,
		exercise: `Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.`,
		starterCode: ``,
		solution: `
        function timesFive (num) {
        return num * 5;
        }
        `,
	},
	{
		section: 52,
		title: `Global Scope and Functions`,
		exercise: `Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10. 

        Inside function fun1, assign 5 to oopsGlobal without using the let or const keywords.`,
		starterCode: `
        // Declare the myGlobal variable below this line


        function fun1() {
        // Assign 5 to oopsGlobal Here

        }

        // Only change code above this line

        function fun2() {
        var output = "";
        if (typeof myGlobal != "undefined") {
            output += "myGlobal: " + myGlobal;
        }
        if (typeof oopsGlobal != "undefined") {
            output += " oopsGlobal: " + oopsGlobal;
        }
        console.log(output);
        } 
        `,
		solution: `
        // Declare the myGlobal variable below this line
        const myGlobal = 10;

        function fun1() {
        // Assign 5 to oopsGlobal Here
        oopsGlobal = 5;
        }

        // Only change code above this line

        function fun2() {
        var output = "";
        if (typeof myGlobal != "undefined") {
            output += "myGlobal: " + myGlobal;
        }
        if (typeof oopsGlobal != "undefined") {
            output += " oopsGlobal: " + oopsGlobal;
        }
        console.log(output);
        }
        `,
	},
	{
		section: 53,
		title: `Local Scope and Functions`,
		exercise: `The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.`,
		starterCode: `
        function myLocalScope() {
        // Only change code below this line

        console.log('inside myLocalScope', myVar);
        }
        myLocalScope();

        // Run and check the console
        // myVar is not defined outside of myLocalScope
        console.log('outside myLocalScope', myVar);
        `,
		solution: `
        function myLocalScope() {
        // Only change code below this line
        let myVar;
        console.log('inside myLocalScope', myVar);
        }
        myLocalScope();

        // Run and check the console
        // myVar is not defined outside of myLocalScope
        console.log('outside myLocalScope', myVar);
        `,
	},
	{
		section: 54,
		title: `Global vs. Local Scope in Functions`,
		exercise: `Add a local variable to myOutfit function to override the value of outerWear with the string sweater.`,
		starterCode: `
        // Setup
        const outerWear = "T-Shirt";

        function myOutfit() {
        // Only change code below this line

        // Only change code above this line
        return outerWear;
        }

        myOutfit();
        `,
		solution: `
        // Setup
        const outerWear = "T-Shirt";

        function myOutfit() {
        // Only change code below this line
        const outerWear = 'sweater'
        // Only change code above this line
        return outerWear;
        }

        myOutfit();
        `,
	},
	{
		section: 55,
		title: `Understanding Undefined Value returned from a Function`,
		exercise: `Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.`,
		starterCode: `
        // Setup
        let sum = 0;

        function addThree() {
        sum = sum + 3;
        }

        // Only change code below this line


        // Only change code above this line

        addThree();
        addFive();
        `,
		solution: `
        // Setup
        let sum = 0;

        function addThree() {
        sum = sum + 3;
        }

        // Only change code below this line
        function addFive() {
        sum = sum + 5;
        }

        // Only change code above this line

        addThree();
        addFive();
        `,
	},
	{
		section: 56,
		title: `Assignment with a Returned Value`,
		exercise: `Call the processArg function with an argument of 7 and assign its return value to the variable processed.`,
		starterCode: `
        // Setup
        let processed = 0;

        function processArg(num) {
        return (num + 3) / 5;
        }

        // Only change code below this line

        `,
		solution: `
        // Setup
        let processed = 0;

        function processArg(num) {
        return (num + 3) / 5;
        }

        // Only change code below this line
        processed = processArg(7);
        `,
	},
	{
		section: 57,
		title: `Stand in Line`,
		exercise: `n Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue. 

        Write a function nextInLine which takes an array (arr) and a number (item) as arguments. 

        Add the number to the end of the array, then remove the first element of the array. 

        The nextInLine function should then return the element that was removed.`,
		starterCode: `
        function nextInLine(arr, item) {
        // Only change code below this line
        
        return deleted;
        // Only change code above this line
        }

        // Setup
        const testArr = [1, 2, 3, 4, 5];

        // Display code
        console.log("Before: " + JSON.stringify(testArr));
        console.log(nextInLine(testArr, 6));
        console.log("After: " + JSON.stringify(testArr));
        `,
		solution: `
        function nextInLine(arr, item) {
        // Only change code below this line
        arr.push(item);
        const deleted = arr.shift()
        return deleted;
        // Only change code above this line
        }

        // Setup
        const testArr = [1, 2, 3, 4, 5];

        // Display code
        console.log("Before: " + JSON.stringify(testArr));
        console.log(nextInLine(testArr, 6));
        console.log("After: " + JSON.stringify(testArr));
        `,
	},
	{
		section: 58,
		title: `Understanding Boolean Values`,
		exercise: `Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.`,
		starterCode: `
        function welcomeToBooleans() {
        // Only change code below this line

        return false; // Change this line

        // Only change code above this line
        }
        `,
		solution: `
        function welcomeToBooleans() {
        // Only change code below this line

        return true; // Change this line

        // Only change code above this line
        }
        `,
	},
	{
		section: 59,
		title: `Use Conditional Logic with If Statements`,
		exercise: `Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.`,
		starterCode: `
        function trueOrFalse(wasThatTrue) {
        // Only change code below this line
        


        // Only change code above this line

        }`,
		solution: `
        function trueOrFalse(wasThatTrue) {
        // Only change code below this line
        if(wasThatTrue){
            return 'Yes, that was true'
        }return 'No, that was false'


        // Only change code above this line

        }`,
	},
	{
		section: 60,
		title: `Comparison with the Equality Operator`,
		exercise: `Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.`,
		starterCode: `
        // Setup
        function testEqual(val) {
        if (val) { // Change this line
            return "Equal";
        }
        return "Not Equal";
        }

        testEqual(10);
        `,
		solution: `
        // Setup
        function testEqual(val) {
        if (val==12) { // Change this line
            return "Equal";
        }
        return "Not Equal";
        }

        testEqual(10);
        `,
	},
	{
		section: 61,
		title: `Comparison with the Strict Equality Operator`,
		exercise: `Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.`,
		starterCode: `// Setup
        function testStrict(val) {
        if (val) { // Change this line
            return "Equal";
        }
        return "Not Equal";
        }

        testStrict(10);
        `,
		solution: `
        // Setup
        function testStrict(val) {
        if (val===7) { // Change this line
            return "Equal";
        }
        return "Not Equal";
        }

        testStrict(10);
        `,
	},
	{
		section: 62,
		title: `Practice comparing different values`,
		exercise: `The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.`,
		starterCode: `
        // Setup
        function compareEquality(a, b) {
        if (a == b) { // Change this line
            return "Equal";
        }
        return "Not Equal";
        }

        compareEquality(10, "10");
        `,
		solution: `
        // Setup
        function compareEquality(a, b) {
        if (a === b) { // Change this line
            return "Equal";
        }
        return "Not Equal";
        }

        compareEquality(10, "10");
        `,
	},
	{
		section: 63,
		title: `Comparison with the Inequality Operator`,
		exercise: `Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.`,
		starterCode: `
        // Setup
        function testNotEqual(val) {
        if (val) { // Change this line
            return "Not Equal";
        }
        return "Equal";
        }

        testNotEqual(10);
        `,
		solution: `
        // Setup
        function testNotEqual(val) {
        if (val!=99) { // Change this line
            return "Not Equal";
        }
        return "Equal";
        }

        testNotEqual(10);
        `,
	},
	{
		section: 64,
		title: `Comparison with the Strict Inequality Operator`,
		exercise: `Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17`,
		starterCode: `
        // Setup
        function testStrictNotEqual(val) {
        if (val) { // Change this line
            return "Not Equal";
        }
        return "Equal";
        }

        testStrictNotEqual(10); 
        `,
		solution: `
        // Setup
        function testStrictNotEqual(val) {
        if (val !== 17) { // Change this line
            return "Not Equal";
        }
        return "Equal";
        }

        testStrictNotEqual(10);
        `,
	},
	{
		section: 65,
		title: `Comparison with the Greater Than Operator`,
		exercise: `Add the greater than operator to the indicated lines so that the return statements make sense.`,
		starterCode: `
        function testGreaterThan(val) {
        if (val) {  // Change this line
            return "Over 100";
        }

        if (val) {  // Change this line
            return "Over 10";
        }

        return "10 or Under";
        }

        testGreaterThan(10);
        `,
		solution: `
        function testGreaterThan(val) {
        if (val>100) {  // Change this line
            return "Over 100";
        }

        if (val>10) {  // Change this lin>10
            return "Over 10";
        }

        return "10 or Under";
        }

        testGreaterThan(10);
        `,
	},
	{
		section: 66,
		title: `Comparison with the Greater Than Or Equal To Operator`,
		exercise: `Add the greater than or equal to operator to the indicated lines so that the return statements make sense.`,
		starterCode: `
        function testGreaterOrEqual(val) {
        if (val) {  // Change this line
            return "20 or Over";
        }

        if (val) {  // Change this line
            return "10 or Over";
        }

        return "Less than 10";
        }

        testGreaterOrEqual(10);
        `,
		solution: `
        function testGreaterOrEqual(val) {
        if (val>=20) {  // Change this line
            return "20 or Over";
        }

        if (val>=10) {  // Change this line
            return "10 or Over";
        }

        return "Less than 10";
        }

        testGreaterOrEqual(10);
        `,
	},
	{
		section: 67,
		title: `Comparison with the Less Than Operator`,
		exercise: `Add the less than operator to the indicated lines so that the return statements make sense.`,
		starterCode: `
        function testLessThan(val) {
        if (val) {  // Change this line
            return "Under 25";
        }

        if (val) {  // Change this line
            return "Under 55";
        }

        return "55 or Over";
        }

        testLessThan(10);
        `,
		solution: `
        function testLessThan(val) {
        if (val<25) {  // Change this line
            return "Under 25";
        }

        if (val<55) {  // Change this line
            return "Under 55";
        }

        return "55 or Over";
        }

        testLessThan(10);
        `,
	},
	{
		section: 68,
		title: `Comparison with the Less Than Or Equal To Operator`,
		exercise: `Add the less than or equal to operator to the indicated lines so that the return statements make sense.`,
		starterCode: `function testLessOrEqual(val) {
        if (val) {  // Change this line
            return "Smaller Than or Equal to 12";
        }

        if (val) {  // Change this line
            return "Smaller Than or Equal to 24";
        }

        return "More Than 24";
        }

        testLessOrEqual(10);
        `,
		solution: `function testLessOrEqual(val) {
        if (val<=12) {  // Change this line
            return "Smaller Than or Equal to 12";
        }

        if (val<=24) {  // Change this line
            return "Smaller Than or Equal to 24";
        }

        return "More Than 24";
        }

        testLessOrEqual(10);
        `,
	},
	{
		section: 69,
		title: `Comparisons with the Logical And Operator`,
		exercise: `Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.`,
		starterCode: `
        function testLogicalAnd(val) {
        // Only change code below this line

        if (val) {
            if (val) {
            return "Yes";
            }
        }

        // Only change code above this line
        return "No";
        }

        testLogicalAnd(10);
        `,
		solution: `
        function testLogicalAnd(val) {
        // Only change code below this line

        if (val<=50 && val >=25) {
            return "Yes";
            }
        

        // Only change code above this line
        return "No";
        }

        testLogicalAnd(10);
        `,
	},
	{
		section: 70,
		title: `Comparisons with the Logical Or Operator`,
		exercise: `Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.`,
		starterCode: `
         function testLogicalOr(val) {
        // Only change code below this line

        if (val) {
            return "Outside";
        }

        if (val) {
            return "Outside";
        }

        // Only change code above this line
        return "Inside";
        }

        testLogicalOr(15);
        `,
		solution: `
        function testLogicalOr(val) {
        // Only change code below this line

        if (val< 10 || val>20){
            return "Outside";
        }

        // Only change code above this line
        return "Inside";
        }

        testLogicalOr(15);
        `,
	},
	{
		section: 71,
		title: `Introducing Else Statements`,
		exercise: `Combine the if statements into a single if/else statement.`,
		starterCode: `
        function testElse(val) {
        let result = "";
        // Only change code below this line

        if (val > 5) {
            result = "Bigger than 5";
        }

        if (val <= 5) {
            result = "5 or Smaller";
        }

        // Only change code above this line
        return result;
        }

        testElse(4);
        `,
		solution: `
        function testElse(val) {
        let result = "";
        // Only change code below this line

        if (val > 5) {
            result = "Bigger than 5";
        }else {
            result = "5 or Smaller";
        }

        // Only change code above this line
        return result;
        }

        testElse(4);
        `,
	},
	{
		section: 72,
		title: `Introducing Else If Statements`,
		exercise: `Convert the logic to use else if statements.`,
		starterCode: `function testElseIf(val) {
        if (val > 10) {
            return "Greater than 10";
        }

        if (val < 5) {
            return "Smaller than 5";
        }

        return "Between 5 and 10";
        }

        testElseIf(7);
        `,
		solution: `
        function testElseIf(val) {
        if (val > 10) {
            return "Greater than 10";
        }else if (val < 5) {
            return "Smaller than 5";
        }else{
            return "Between 5 and 10";
        }
        }

        testElseIf(7);
        `,
	},
	{
		section: 73,
		title: `Logical Order in If Else Statements`,
		exercise: `Change the order of logic in the function so that it will return the correct statements in all cases.`,
		starterCode: `
        function orderMyLogic(val) {
        if (val < 10) {
            return "Less than 10";
        } else if (val < 5) {
            return "Less than 5";
        } else {
            return "Greater than or equal to 10";
        }
        }

        orderMyLogic(7);
        `,
		solution: `
        function orderMyLogic(val) {
        if (val < 5) {
            return "Less than 5";
        } else if (val < 10) {
            return "Less than 10";
        } else {
            return "Greater than or equal to 10";
        }
        }

        orderMyLogic(7);
        `,
	},
	{
		section: 74,
		title: `Chaining If Else Statements`,
		exercise: `
        Write chained if/else if statements to fulfill the following conditions:

        num < 5 - return Tiny
        num < 10 - return Small
        num < 15 - return Medium
        num < 20 - return Large
        num >= 20 - return Huge
        `,
		starterCode: `
        function testSize(num) {
        // Only change code below this line


        return "Change Me";
        // Only change code above this line
        }

        testSize(7);
        `,
		solution: `
        function testSize(num) {
        // Only change code below this line
        if (num<5) {
        return 'Tiny'
        } else if (num<10) {
            return 'Small'
        } else if (num<15) {
            return 'Medium'
        } else if (num<20) {
            return 'Large'
        } else {
            return 'Huge'
        }
        // Only change code above this line
        }

        testSize(7);
        `,
	},
	{
		section: 75,
		title: `Golf Code`,
		exercise: `
        In the game of golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname. 

        Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest): 

        Strokes	Return
        1	"Hole-in-one!"
        <= par - 2	"Eagle"
        par - 1	"Birdie"
        par	"Par"
        par + 1	"Bogey"
        par + 2	"Double Bogey"
        >= par + 3	"Go Home!"
        par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
        `,
		starterCode: `
         const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

        function golfScore(par, strokes) {
        // Only change code below this line


        return "Change Me";
        // Only change code above this line
        }

        golfScore(5, 4);
        `,
		solution: `
        const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

        function golfScore(par, strokes) {
        // Only change code below this line
        if (strokes===1){
            return "Hole-in-one!";
        }else if (strokes<= par-2){
            return "Eagle";
        }else if (strokes<= par-1){
            return "Birdie";
        }else if (strokes<= par){
            return "Par";
        }else if (strokes<= par+1){
            return "Bogey";
        }else if (strokes<= par+2){
            return "Double Bogey";
        }else{
            return  "Go Home!";
        }
        // Only change code above this line
        }

        golfScore(5, 4);
        `,
	},
	{
		section: 76,
		title: `Selecting from Many Options with Switch Statements`,
		exercise: `
        Write a switch statement which tests val and sets answer for the following conditions:
        1 - alpha
        2 - beta
        3 - gamma
        4 - delta
        `,
		starterCode: `function caseInSwitch(val) {
        let answer = "";
        // Only change code below this line



        // Only change code above this line
        return answer;
        }

        caseInSwitch(1);`,
		solution: `
        function caseInSwitch(val) {
        let answer = "";
        // Only change code below this line
        switch(val){
            case 1:
            answer = 'alpha';
            break;
            case 2:
            answer = 'beta';
            break;
            case 3:
            answer = 'gamma';
            break;
            case 4:
            answer = 'delta';
            break;
        }


        // Only change code above this line
        return answer;
        }

        caseInSwitch(1);
        `,
	},
	{
		section: 77,
		title: `Adding a Default Option in Switch Statements`,
		exercise: `Write a switch statement to set answer for the following conditions:
        a - apple
        b - bird
        c - cat
        default - stuff
        `,
		starterCode: `
        function switchOfStuff(val) {
        let answer = "";
        // Only change code below this line



        // Only change code above this line
        return answer;
        }

        switchOfStuff(1);
        `,
		solution: `
        function switchOfStuff(val) {
        let answer = "";
        // Only change code below this line
        switch (val) {
        case 'a':
            answer = 'apple';
            break;
        case 'b':
            answer = 'bird';
            break;
        case 'c':
            answer = 'cat';
            break;
        default:
            answer = 'stuff';
            break;
        }


        // Only change code above this line
        return answer;
        }

        switchOfStuff(1);
        `,
	},
	{
		section: 78,
		title: `Multiple Identical Options in Switch Statements`,
		exercise: `
        Write a switch statement to set answer for the following ranges:
        1-3 - Low
        4-6 - Mid
        7-9 - High

        Note: You will need to have a case statement for each number in the range.
        `,
		starterCode: `
        function sequentialSizes(val) {
        let answer = "";
        // Only change code below this line



        // Only change code above this line
        return answer;
        }

        sequentialSizes(1);
        `,
		solution: `
        function sequentialSizes(val) {
        let answer = "";
        // Only change code below this line
        let result = "";
        switch(val) {
        case 1:
        case 2:
        case 3:
            answer = 'Low';
            break;
        case 4:
        case 5:
        case 6:
            answer = 'Mid';
            break;
        case 7:
        case 8:
        case 9:
            answer = 'High';
            
        }


        // Only change code above this line
        return answer;
        }

        sequentialSizes(1);
        `,
	},
	{
		section: 79,
		title: `Replacing If Else Chains with Switch`,
		exercise: `Change the chained if/else if statements into a switch statement.`,
		starterCode: `
         function chainToSwitch(val) {
        let answer = "";
        // Only change code below this line

        if (val === "bob") {
            answer = "Marley";
        } else if (val === 42) {
            answer = "The Answer";
        } else if (val === 1) {
            answer = "There is no #1";
        } else if (val === 99) {
            answer = "Missed me by this much!";
        } else if (val === 7) {
            answer = "Ate Nine";
        }

        // Only change code above this line
        return answer;
        }

        chainToSwitch(7);
        `,
		solution: `
        function chainToSwitch(val) {
        let answer = "";
        // Only change code below this line

        switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
        }
        // Only change code above this line
        return answer;
        }

        chainToSwitch(7);
        `,
	},
	{
		section: 80,
		title: `Returning Boolean Values from Functions`,
		exercise: `Fix the function isLess to remove the if/else statements.`,
		starterCode: `function isLess(a, b) {
        // Only change code below this line
        if (a < b) {
            return true;
        } else {
            return false;
        }
        // Only change code above this line
        }

        isLess(10, 15);
        `,
		solution: `
        function isLess(a, b) {
        // Only change code below this line
        
            return a<b;
        
        // Only change code above this line
        }

        isLess(10, 15);
        `,
	},
	{
		section: 81,
		title: `Return Early Pattern for Functions`,
		exercise: `Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.`,
		starterCode: `
        // Setup
        function abTest(a, b) {
        // Only change code below this line



        // Only change code above this line

        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
        }

        abTest(2,2);
        `,
		solution: `
        // Setup
        function abTest(a, b) {
        // Only change code below this line
        if(a<0 ||b<0){
            return undefined
        }


        // Only change code above this line

        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
        }

        abTest(2,2);
        `,
	},
	{
		section: 82,
		title: `Counting Cards`,
		exercise: `
        In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting. 

        Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low. 

        Count Change	Cards
        +1	2, 3, 4, 5, 6
        0	7, 8, 9
        -1	10, 'J', 'Q', 'K', 'A'
        You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space. 

        Example Outputs: -3 Hold or 5 Bet 

        Hint
        Do NOT reset count to 0 when value is 7, 8, or 9.
        Do NOT return an array.
        Do NOT include quotes (single or double) in the output.
        `,
		starterCode: `
        let count = 0;

        function cc(card) {
        // Only change code below this line


        return "Change Me";
        // Only change code above this line
        }

        cc(2); cc(3); cc(7); cc('K'); cc('A');
        `,
		solution: `
        let count = 0;

        function cc(card) {
        // Only change code below this line
        switch(card){
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            count++;
            break;
            case 10:
            case 'J':
            case 'Q':
            case 'K':
            case 'A':
            count--;
            break;
        }
        if(count<=0){
            return count + " Hold"
        }
        return count + " Bet";
        // Only change code above this line
        }

        cc(2); cc(3); cc(7); cc('K'); cc('A');
        `,
	},
	{
		section: 83,
		title: `Build JavaScript Objects`,
		exercise: `Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.

        You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers, and friends is an array.
        `,
		starterCode: `
         const myDog = {
        // Only change code below this line


        // Only change code above this line
        };`,
		solution: `
        const myDog = {
        // Only change code below this line
        name: "Ford",
        legs: 4,
        tails:1,
        friends: [1, 2, 3],
        // Only change code above this line
        };
        `,
	},
	{
		section: 84,
		title: `Accessing Object Properties with Dot Notation`,
		exercise: `Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.`,
		starterCode: `
        // Setup
        const testObj = {
        "hat": "ballcap",
        "shirt": "jersey",
        "shoes": "cleats"
        };

        // Only change code below this line
        const hatValue = testObj;      // Change this line
        const shirtValue = testObj;    // Change this line
        `,
		solution: `
        // Setup
        const testObj = {
        "hat": "ballcap",
        "shirt": "jersey",
        "shoes": "cleats"
        };

        // Only change code below this line
        const hatValue = testObj.hat;      // Change this line
        const shirtValue = testObj.shirt;    // Change this line
        `,
	},
	{
		section: 85,
		title: `Accessing Object Properties with Bracket Notation`,
		exercise: `Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.`,
		starterCode: `
        // Setup
        const testObj = {
        "an entree": "hamburger",
        "my side": "veggies",
        "the drink": "water"
        };

        // Only change code below this line
        const entreeValue = testObj;   // Change this line
        const drinkValue = testObj;    // Change this line
        `,
		solution: `
        // Setup
        const testObj = {
        "an entree": "hamburger",
        "my side": "veggies",
        "the drink": "water"
        };

        // Only change code below this line
        const entreeValue = testObj['an entree'];   // Change this line
        const drinkValue = testObj['the drink'];    // Change this line
        `,
	},
	{
		section: 86,
		title: `Accessing Object Properties with Variables`,
		exercise: `Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.`,
		starterCode: `
        // Setup
        const testObj = {
        12: "Namath",
        16: "Montana",
        19: "Unitas"
        };

        // Only change code below this line
        const playerNumber = ;  // Change this line
        const player = testObj;   // Change this line
        `,
		solution: `
        // Setup
        const testObj = {
        12: "Namath",
        16: "Montana",
        19: "Unitas"
        };

        // Only change code below this line
        const playerNumber = 16;  // Change this line
        const player = testObj[playerNumber];   // Change this line
        `,
	},
	{
		section: 87,
		title: `Updating Object Properties`,
		exercise: `Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.`,
		starterCode: `// Setup
        const myDog = {
        "name": "Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["freeCodeCamp Campers"]
        };

        // Only change code below this line
        `,
		solution: `
        // Setup
        const myDog = {
        "name": "Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["freeCodeCamp Campers"]
        };

        // Only change code below this line
        myDog.name='Happy Coder';
        `,
	},
	{
		section: 88,
		title: `Add New Properties to a JavaScript Object`,
		exercise: `Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.`,
		starterCode: `const myDog = {
        "name": "Happy Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["freeCodeCamp Campers"]
        };

        `,
		solution: `
        const myDog = {
        "name": "Happy Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["freeCodeCamp Campers"]
        };

        myDog.bark='woof';
        `,
	},
	{
		section: 89,
		title: `Delete Properties from a JavaScript Object`,
		exercise: `Delete the tails property from myDog. You may use either dot or bracket notation.`,
		starterCode: `
        // Setup
        const myDog = {
        "name": "Happy Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["freeCodeCamp Campers"],
        "bark": "woof"
        };

        // Only change code below this line

        `,
		solution: `
        // Setup
        const myDog = {
        "name": "Happy Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["freeCodeCamp Campers"],
        "bark": "woof"
        };

        // Only change code below this line
        delete myDog.tails;
        `,
	},
	{
		section: 90,
		title: `Using Objects for Lookups`,
		exercise: `Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.`,
		starterCode: `
        // Setup
        function phoneticLookup(val) {
        let result = "";

        // Only change code below this line
        switch(val) {
            case "alpha":
            result = "Adams";
            break;
            case "bravo":
            result = "Boston";
            break;
            case "charlie":
            result = "Chicago";
            break;
            case "delta":
            result = "Denver";
            break;
            case "echo":
            result = "Easy";
            break;
            case "foxtrot":
            result = "Frank";
        }

        // Only change code above this line
        return result;
        }

        phoneticLookup("charlie");
        `,
		solution: `
        // Setup
        function phoneticLookup(val) {
        let result = "";

        // Only change code below this line
        const lookup = {
            "alpha": "Adams",
            "bravo": "Boston",
            "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
        }
        result = lookup[val];

        // Only change code above this line
        return result;
        }

        phoneticLookup("charlie");
        `,
	},
	{
		section: 91,
		title: `Testing Objects for Properties`,
		exercise: `Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".`,
		starterCode: `
        function checkObj(obj, checkProp) {
        // Only change code below this line
        return "Change Me!";
        // Only change code above this line
        }
        `,
		solution: `
        function checkObj(obj, checkProp) {
        // Only change code below this line
        if(obj.hasOwnProperty(checkProp)){
            return obj[checkProp]
        }else{
            return "Not Found";
            }
        
        // Only change code above this line
        }
        `,
	},
	{
		section: 92,
		title: `Manipulating Complex Objects`,
		exercise: `Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.`,
		starterCode: `
        const myMusic = [
        {
            "artist": "Billy Joel",
            "title": "Piano Man",
            "release_year": 1973,
            "formats": [
            "CD",
            "8T",
            "LP"
            ],
            "gold": true
        }
        ];
        `,
		solution: `
        const myMusic = [
        {
            "artist": "Billy Joel",
            "title": "Piano Man",
            "release_year": 1973,
            "formats": [
            "CD",
            "8T",
            "LP"
            ],
            "gold": true
        }
        ];

        myMusic.push({
            "artist": "Billy Joel",
            "title": "Piano Man",
            "release_year": 1973,
            "formats": [
            "CD",
            "8T",
            "LP"
            ],
        })
        `,
	},
	{
		section: 93,
		title: `Accessing Nested Objects`,
		exercise: `Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.`,
		starterCode: `
        const myStorage = {
        "car": {
            "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
            },
            "outside": {
            "trunk": "jack"
            }
        }
        };

        const gloveBoxContents = undefined;
        `,
		solution: `
        const myStorage = {
        "car": {
            "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
            },
            "outside": {
            "trunk": "jack"
            }
        }
        };

        const gloveBoxContents = myStorage.car.inside['glove box'];
        `,
	},
	{
		section: 94,
		title: `Accessing Nested Arrays`,
		exercise: `Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.`,
		starterCode: `
        const myPlants = [
        {
            type: "flowers",
            list: [
            "rose",
            "tulip",
            "dandelion"
            ]
        },
        {
            type: "trees",
            list: [
            "fir",
            "pine",
            "birch"
            ]
        }
        ];

        const secondTree = "";
        `,
		solution: `
        const myPlants = [
        {
            type: "flowers",
            list: [
            "rose",
            "tulip",
            "dandelion"
            ]
        },
        {
            type: "trees",
            list: [
            "fir",
            "pine",
            "birch"
            ]
        }
        ];

        const secondTree = myPlants[1].list[1];
        `,
	},
	{
		section: 95,
		title: `Record Collection`,
		exercise: `
        You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

        You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

        Your function must always return the entire record collection object.
        If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
        If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
        If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
        If value is an empty string, delete the given prop property from the album.
        Note: A copy of the recordCollection object is used for the tests.
        `,
		starterCode: `
        // Setup
        const recordCollection = {
        2548: {
            albumTitle: 'Slippery When Wet',
            artist: 'Bon Jovi',
            tracks: ['Let It Rock', 'You Give Love a Bad Name']
        },
        2468: {
            albumTitle: '1999',
            artist: 'Prince',
            tracks: ['1999', 'Little Red Corvette']
        },
        1245: {
            artist: 'Robert Palmer',
            tracks: []
        },
        5439: {
            albumTitle: 'ABBA Gold'
        }
        };

        // Only change code below this line
        function updateRecords(records, id, prop, value) {
        return records;
        }

        updateRecords(recordCollection, 5439, 'artist', 'ABBA');
        `,
		solution: `
        // Setup
        const recordCollection = {
        2548: {
            albumTitle: 'Slippery When Wet',
            artist: 'Bon Jovi',
            tracks: ['Let It Rock', 'You Give Love a Bad Name']
        },
        2468: {
            albumTitle: '1999',
            artist: 'Prince',
            tracks: ['1999', 'Little Red Corvette']
        },
        1245: {
            artist: 'Robert Palmer',
            tracks: []
        },
        5439: {
            albumTitle: 'ABBA Gold'
        }
        };

        // Only change code below this line
        function updateRecords(records, id, prop, value) {
        if(prop !== 'tracks' && value !==""){
            records[id][prop]=value;
        }else if (prop === 'tracks' && !records[id].hasOwnProperty('tracks')){
            records[id].tracks = [value];
        }else if (prop === 'tracks' && value !== ""){
            records[id].tracks.push(value);
        }else if (value === ""){
            delete records[id][prop];
        }
        return records;
        }

        updateRecords(recordCollection, 5439, 'artist', 'ABBA');
        `,
	},
	{
		section: 96,
		title: `Iterate with JavaScript While Loops`,
		exercise: `Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.`,
		starterCode: `
        // Setup
        const myArray = [];

        // Only change code below this line

        `,
		solution: `
        // Setup
        const myArray = [];

        // Only change code below this line
        let i=5;
        while(i>=0){
        myArray.push(i)
        i--
        }
        `,
	},
	{
		section: 97,
		title: `Iterate with JavaScript For Loops`,
		exercise: `Use a for loop to push the values 1 through 5 onto myArray.`,
		starterCode: `
        // Setup
        const myArray = [];

        // Only change code below this line

        `,
		solution: `
        // Setup
        const myArray = [];

        // Only change code below this line
        for (let i=1;i<6;i++){
        myArray.push(i)
        }
        `,
	},
	{
		section: 98,
		title: `Iterate Odd Numbers With a For Loop`,
		exercise: `Push the odd numbers from 1 through 9 to myArray using a for loop.`,
		starterCode: `
        // Setup
        const myArray = [];

        // Only change code below this line

        `,
		solution: `
        // Setup
        const myArray = [];

        // Only change code below this line
        for (let i = 1; i < 10; i += 2) {
        myArray.push(i);
        }
        `,
	},
	{
		section: 99,
		title: `Count Backwards With a For Loop`,
		exercise: `Push the odd numbers from 9 through 1 to myArray using a for loop.`,
		starterCode: `
        // Setup
        const myArray = [];

        // Only change code below this line

        `,
		solution: `
        // Setup
        const myArray = [];

        // Only change code below this line
        for (let i = 9; i > 0; i -= 2) {
        myArray.push(i);
        }
        `,
	},
	{
		section: 10,
		title: `Iterate Through an Array with a For Loop`,
		exercise: `Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.`,
		starterCode: `
        // Setup
        const myArr = [2, 3, 4, 5, 6];

        // Only change code below this line

        `,
		solution: `
        // Setup
        const myArr = [2, 3, 4, 5, 6];

        // Only change code below this line
        let total = 0;
        for (let i = 0; i < myArr.length; i++) {
        total += myArr[i];
        }
        `,
	},
	{
		section: 101,
		title: `Nesting For Loops`,
		exercise: `Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.`,
		starterCode: `
        function multiplyAll(arr) {
        let product = 1;
        // Only change code below this line

        // Only change code above this line
        return product;
        }

        multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
        `,
		solution: `
        function multiplyAll(arr) {
        let product = 1;
        // Only change code below this line
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
            }
        }
        // Only change code above this line
        return product;
        }

        multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
        `,
	},
	{
		section: 102,
		title: `Iterate with JavaScript Do...While Loops`,
		exercise: `Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.`,
		starterCode: `
        // Setup
        const myArray = [];
        let i = 10;

        // Only change code below this line
        while (i < 5) {
        myArray.push(i);
        i++;
        }
        `,
		solution: `
        // Setup
        const myArray = [];
        let i = 10;

        // Only change code below this line
        do{
        myArray.push(i)
        i++;
        }
        while (i < 11)
        `,
	},
	{
		section: 103,
		title: `Replace Loops using Recursion`,
		exercise: `Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.`,
		starterCode: `
        function sum(arr, n) {
        // Only change code below this line

        // Only change code above this line
        }
        `,
		solution: `
        function sum(arr, n) {
        // Only change code below this line
        if (n===0){
            return 0
        }else{
            return arr[n-1]+sum(arr, n-1)
        }
        // Only change code above this line
        }
        `,
	},
	{
		section: 104,
		title: `Profile Lookup`,
		exercise: `
        We have an array of objects representing different people in our contacts lists.

        A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

        The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

        If both are true, then return the "value" of that property.

        If name does not correspond to any contacts then return the string No such contact.

        If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
        `,
		starterCode: `
        // Setup
        const contacts = [
        {
            firstName: "Akira",
            lastName: "Laine",
            number: "0543236543",
            likes: ["Pizza", "Coding", "Brownie Points"],
        },
        {
            firstName: "Harry",
            lastName: "Potter",
            number: "0994372684",
            likes: ["Hogwarts", "Magic", "Hagrid"],
        },
        {
            firstName: "Sherlock",
            lastName: "Holmes",
            number: "0487345643",
            likes: ["Intriguing Cases", "Violin"],
        },
        {
            firstName: "Kristian",
            lastName: "Vos",
            number: "unknown",
            likes: ["JavaScript", "Gaming", "Foxes"],
        },
        ];

        function lookUpProfile(name, prop) {
        // Only change code below this line

        // Only change code above this line
        }

        lookUpProfile("Akira", "likes");
        `,
		solution: `// Setup
        const contacts = [
        {
            firstName: "Akira",
            lastName: "Laine",
            number: "0543236543",
            likes: ["Pizza", "Coding", "Brownie Points"],
        },
        {
            firstName: "Harry",
            lastName: "Potter",
            number: "0994372684",
            likes: ["Hogwarts", "Magic", "Hagrid"],
        },
        {
            firstName: "Sherlock",
            lastName: "Holmes",
            number: "0487345643",
            likes: ["Intriguing Cases", "Violin"],
        },
        {
            firstName: "Kristian",
            lastName: "Vos",
            number: "unknown",
            likes: ["JavaScript", "Gaming", "Foxes"],
        },
        ];

        function lookUpProfile(name, prop) {
        // Only change code below this line
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
            }
        }
        return "No such contact";
        // Only change code above this line
        }

        lookUpProfile("Akira", "likes");`,
	},
	{
		section: 105,
		title: `Generate Random Fractions with JavaScript`,
		exercise: `Change randomFraction to return a random number instead of returning 0.`,
		starterCode: `function randomFraction() {

        // Only change code below this line

        return 0;

        // Only change code above this line
        }`,
		solution: `
        function randomFraction() {

        // Only change code below this line

        return Math.random();

        // Only change code above this line
        }
        `,
	},
	{
		section: 106,
		title: `Generate Random Whole Numbers with JavaScript`,
		exercise: `Use this technique to generate and return a random whole number between 0 and 9.`,
		starterCode: `function randomWholeNum() {

        // Only change code below this line

        return Math.random();
        }`,
		solution: `
        function randomWholeNum() {

        // Only change code below this line

        return Math.floor(Math.random()*10);
        }
        `,
	},
	{
		section: 107,
		title: `Generate Random Whole Numbers within a Range`,
		exercise: `Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.`,
		starterCode: `
        function randomRange(myMin, myMax) {
        // Only change code below this line
        return 0;
        // Only change code above this line
        }
        `,
		solution: `
        function randomRange(myMin, myMax) {
        // Only change code below this line
        return Math.floor(Math.random()*(myMax-myMin+1))+myMin;
        // Only change code above this line
        }
        `,
	},
	{
		section: 108,
		title: `Use the parseInt Function`,
		exercise: `Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.`,
		starterCode: `
        function convertToInteger(str) {

        }

        convertToInteger("56");
        `,
		solution: `
        function convertToInteger(str) {
        return parseInt(str)
        }

        convertToInteger("56");
        `,
	},
	{
		section: 109,
		title: `Use the parseInt Function with a Radix`,
		exercise: `Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.`,
		starterCode: `
        let result = function convertToInteger(str) {
            const a = parseInt(str, 2);
            return a;
        };

        result("10011");
        console.log(result("10011")[0])
        `,
		solution: `
        function convertToInteger(str) {
        return parseInt(str, 2);
        }
        convertToInteger("10011");
        `,
	},
	{
		section: 110,
		title: `Use the Conditional (Ternary) Operator`,
		exercise: `Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.`,
		starterCode: `
        function checkEqual(a, b) {

        }

        checkEqual(1, 2);
        `,
		solution: `
        function checkEqual(a, b) {
        return a===b? 'Equal':'Not Equal';
        }

        checkEqual(1, 2);
        `,
	},
	{
		section: 111,
		title: `Use Multiple Conditional (Ternary) Operators`,
		exercise: `In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.`,
		starterCode: `
        function checkSign(num) {

        }

        checkSign(10);
        `,
		solution: `
        function checkSign(num) {
        return num>0?'positive':num<0?'negative':'zero';
        }

        checkSign(10);
        `,
	},
	{
		section: 112,
		title: `Use Recursion to Create a Countdown`,
		exercise: `We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.`,
		starterCode: `
        // Only change code below this line
        function countdown(n){
            return;
        }
        // Only change code above this line
        `,
		solution: `
        // Only change code below this line
        function countdown(n){
            if(n<1){
                return []
            }else{
            return [n].concat(countdown(n-1))
            }
        }
        // Only change code above this line
        `,
	},
	{
		section: 113,
		title: `Use Recursion to Create a Range of Numbers`,
		exercise: `We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.`,
		starterCode: `
        function rangeOfNumbers(startNum, endNum) {
        return [];
        };
        `,
		solution: `
        function rangeOfNumbers(startNum, endNum) {
            if(startNum===endNum){
                return [endNum]
            }else{
                return [startNum].concat(rangeOfNumbers(startNum+1,endNum))
            }
        };
        `,
	},
];

basivJavaScriptResults(basicJavaSciptList);
