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
const regex = document.querySelector(".js-regex");
// const outcomeEL = document.querySelector("#js-outcome");
// const titleEL = document.querySelector("#js-title");

const regexResults = result => {
	// console.dir(result[0]["section"]);
	for (let item of result) {
		console.dir(item["section"]);
		regex.innerHTML += `
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

const regexList = [
	{
		section: 01,
		title: `Using the Test Method`,
		exercise: `Apply the regex myRegex on the string myString using the .test() method.`,
		starterCode: `
        let myString = "Hello, World!";
        let myRegex = /Hello/;
        let result = myRegex; // Change this line
        `,
		solution: `
        let myString = "Hello, World!";
        let myRegex = /Hello/;
        let result = myRegex.test(myString); // Change this line
        `,
	},
	{
		section: 02,
		title: `Match Literal Strings`,
		exercise: `Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.`,
		starterCode: `
        let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
        let waldoRegex = /search/; // Change this line
        let result = waldoRegex.test(waldoIsHiding);
        `,
		solution: `
        let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
        let waldoRegex = /Waldo/; // Change this line
        let result = waldoRegex.test(waldoIsHiding);
        `,
	},
	{
		section: 03,
		title: `Match a Literal String with Different Possibilities`,
		exercise: `Complete the regex petRegex to match the pets dog, cat, bird, or fish.`,
		starterCode: `
        let petString = "James has a pet cat.";
        let petRegex = /change/; // Change this line
        let result = petRegex.test(petString);
        `,
		solution: `
        let petString = "James has a pet cat.";
        let petRegex = /dog|cat|bird|fish/; // Change this line
        let result = petRegex.test(petString);
        `,
	},
	{
		section: 04,
		title: `Ignore Case While Matching`,
		exercise: `Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.`,
		starterCode: `
        let myString = "freeCodeCamp";
        let fccRegex = /change/; // Change this line
        let result = fccRegex.test(myString);
        `,
		solution: `
        let myString = "freeCodeCamp";
        let fccRegex = /freeCodeCamp/i; // Change this line
        let result = fccRegex.test(myString);
        `,
	},
	{
		section: 05,
		title: `Extract Matches`,
		exercise: `Apply the .match() method to extract the string coding.`,
		starterCode: `
        let extractStr = "Extract the word 'coding' from this string.";
        let codingRegex = /change/; // Change this line
        let result = extractStr; // Change this line
        `,
		solution: `
        let extractStr = "Extract the word 'coding' from this string.";
        let codingRegex = /coding/; // Change this line
        let result = extractStr.match(codingRegex); // Change this line
        `,
	},
	{
		section: 06,
		title: `Find More Than the First Match`,
		exercise: `Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.`,
		starterCode: `
        let twinkleStar = "Twinkle, twinkle, little star";
        let starRegex = /change/; // Change this line
        let result = twinkleStar; // Change this line
        `,
		solution: `
        let twinkleStar = "Twinkle, twinkle, little star";
        let starRegex = /Twinkle/gi; // Change this line
        let result = twinkleStar.match(starRegex); // Change this line
        `,
	},
	{
		section: 07,
		title: `Match Anything with Wildcard Period`,
		exercise: `Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.`,
		starterCode: `
        let exampleStr = "Let's have fun with regular expressions!";
        let unRegex = /change/; // Change this line
        let result = unRegex.test(exampleStr);
        `,
		solution: `
        let exampleStr = "Let's have fun with regular expressions!";
        let unRegex = /.un/; // Change this line
        let result = unRegex.test(exampleStr);
        `,
	},
	{
		section: 08,
		title: `Match Single Character with Multiple Possibilities`,
		exercise: `Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

        Note: Be sure to match both upper- and lowercase vowels.`,
		starterCode: `
        let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
        let vowelRegex = /change/; // Change this line
        let result = vowelRegex; // Change this line
        `,
		solution: `
        let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
        let vowelRegex = /[aeoiu]/gi; // Change this line
        let result = quoteSample.match(vowelRegex); // Change this line
        `,
	},
	{
		section: 09,
		title: `Match Letters of the Alphabet`,
		exercise: `Match all the letters in the string quoteSample.

        Note: Be sure to match both uppercase and lowercase letters.`,
		starterCode: `
        let quoteSample = "The quick brown fox jumps over the lazy dog.";
        let alphabetRegex = /change/; // Change this line
        let result = alphabetRegex; // Change this line
        `,
		solution: `
        let quoteSample = "The quick brown fox jumps over the lazy dog.";
        let alphabetRegex = /[a-z]/gi; // Change this line
        let result = quoteSample.match(alphabetRegex); // Change this line
        `,
	},
	{
		section: 10,
		title: `Match Numbers and Letters of the Alphabet`,
		exercise: `Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.`,
		starterCode: `
        let quoteSample = "Blueberry 3.141592653s are delicious.";
        let myRegex = /change/; // Change this line
        let result = myRegex; // Change this line
        `,
		solution: `
        let quoteSample = "Blueberry 3.141592653s are delicious.";
        let myRegex = /[h-s2-6]/gi; // Change this line
        let result = quoteSample.match(myRegex); // Change this line
        `,
	},
	{
		section: 11,
		title: `Match Single Characters Not Specified`,
		exercise: `Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.`,
		starterCode: `
        let quoteSample = "3 blind mice.";
        let myRegex = /change/; // Change this line
        let result = myRegex; // Change this line
        `,
		solution: `
        let quoteSample = "3 blind mice.";
        let myRegex = /[^0-9aeoiu]/gi; // Change this line
        let result = quoteSample.match(myRegex); // Change this line
        `,
	},
	{
		section: 12,
		title: `Match Characters that Occur One or More Times`,
		exercise: `You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.`,
		starterCode: `
        let difficultSpelling = "Mississippi";
        let myRegex = /change/; // Change this line
        let result = difficultSpelling.match(myRegex);
        `,
		solution: `
        let difficultSpelling = "Mississippi";
        let myRegex = /s+/g; // Change this line
        let result = difficultSpelling.match(myRegex);
        `,
	},
	{
		section: 13,
		title: `Match Characters that Occur Zero or More Times`,
		exercise: `For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.`,
		starterCode: `
        // Only change code below this line
        let chewieRegex = /change/; // Change this line
        // Only change code above this line

        let result = chewieQuote.match(chewieRegex);
        `,
		solution: `
        // Only change code below this line
        let chewieRegex = /Aa*/; // Change this line
        // Only change code above this line

        let result = chewieQuote.match(chewieRegex);
        `,
	},
	{
		section: 14,
		title: `Find Characters with Lazy Matching`,
		exercise: `Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.`,
		starterCode: `
        let text = "<h1>Winter is coming</h1>";
        let myRegex = /<.*>/; // Change this line
        let result = text.match(myRegex);
        `,
		solution: `
        let text = "<h1>Winter is coming</h1>";
        let myRegex = /<.*?>/; // Change this line
        let result = text.match(myRegex);
        `,
	},
	{
		section: 15,
		title: `Find One or More Criminals in a Hunt`,
		exercise: `Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.`,
		starterCode: `
        let reCriminals = /./; // Change this line
        `,
		solution: `
        let reCriminals = /C+/; // Change this line
        `,
	},
	{
		section: 16,
		title: `Match Beginning String Patterns`,
		exercise: `Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.`,
		starterCode: `
        let rickyAndCal = "Cal and Ricky both like racing.";
        let calRegex = /change/; // Change this line
        let result = calRegex.test(rickyAndCal);
        `,
		solution: `
        let rickyAndCal = "Cal and Ricky both like racing.";
        let calRegex = /^Cal/; // Change this line
        let result = calRegex.test(rickyAndCal);
        `,
	},
	{
		section: 17,
		title: `Match Ending String Patterns`,
		exercise: `Use the anchor character ($) to match the string caboose at the end of the string caboose.`,
		starterCode: `
        let caboose = "The last car on a train is the caboose";
        let lastRegex = /change/; // Change this line
        let result = lastRegex.test(caboose);
        `,
		solution: `
        let caboose = "The last car on a train is the caboose";
        let lastRegex = /caboose$/; // Change this line
        let result = lastRegex.test(caboose);
        `,
	},
	{
		section: 18,
		title: `Match All Letters and Numbers`,
		exercise: `Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.`,
		starterCode: `
        let quoteSample = "The five boxing wizards jump quickly.";
        let alphabetRegexV2 = /change/; // Change this line
        let result = quoteSample.match(alphabetRegexV2).length;
        `,
		solution: `
        let quoteSample = "The five boxing wizards jump quickly.";
        let alphabetRegexV2 = /\w/g; // Change this line
        let result = quoteSample.match(alphabetRegexV2).length;
        `,
	},
	{
		section: 19,
		title: `Match Everything But Letters and Numbers`,
		exercise: `Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.`,
		starterCode: `
        let quoteSample = "The five boxing wizards jump quickly.";
        let nonAlphabetRegex = /change/; // Change this line
        let result = quoteSample.match(nonAlphabetRegex).length;
        `,
		solution: `
        let quoteSample = "The five boxing wizards jump quickly.";
        let nonAlphabetRegex = /\W/g; // Change this line
        let result = quoteSample.match(nonAlphabetRegex).length;
        `,
	},
	{
		section: 20,
		title: `Match All Numbers`,
		exercise: `Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.`,
		starterCode: `
        let movieName = "2001: A Space Odyssey";
        let numRegex = /change/; // Change this line
        let result = movieName.match(numRegex).length;
        `,
		solution: `
        let movieName = "2001: A Space Odyssey";
        let numRegex = /\d/g; // Change this line
        let result = movieName.match(numRegex).length;
        `,
	},
	{
		section: 21,
		title: `Match All Non-Numbers`,
		exercise: `Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.`,
		starterCode: `
        let movieName = "2001: A Space Odyssey";
        let noNumRegex = /change/; // Change this line
        let result = movieName.match(noNumRegex).length;
        `,
		solution: `
        let movieName = "2001: A Space Odyssey";
        let noNumRegex = /\D/g; // Change this line
        let result = movieName.match(noNumRegex).length;
        `,
	},
	{
		section: 22,
		title: `Restrict Possible Usernames`,
		exercise: `Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

        You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

        1. Usernames can only use alpha-numeric characters.

        2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

        3. Username letters can be lowercase and uppercase.

        4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

        Change the regex userCheck to fit the constraints listed above.`,
		starterCode: `
        let username = "JackOfAllTrades";
        let userCheck = /change/; // Change this line
        let result = userCheck.test(username);
        `,
		solution: `
        let username = "JackOfAllTrades";
        let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i // Change this line
        let result = userCheck.test(username);
        `,
	},
	{
		section: 23,
		title: `Match Whitespace`,
		exercise: `Change the regex countWhiteSpace to look for multiple whitespace characters in a string.`,
		starterCode: `
        let sample = "Whitespace is important in separating words";
        let countWhiteSpace = /change/; // Change this line
        let result = sample.match(countWhiteSpace);
        `,
		solution: `
        let sample = "Whitespace is important in separating words";
        let countWhiteSpace = /\s/g; // Change this line
        let result = sample.match(countWhiteSpace);
        `,
	},
	{
		section: 24,
		title: `Match Non-Whitespace Characters`,
		exercise: `Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.`,
		starterCode: `
        let sample = "Whitespace is important in separating words";
        let countNonWhiteSpace = /change/; // Change this line
        let result = sample.match(countNonWhiteSpace);
        `,
		solution: `
        let sample = "Whitespace is important in separating words";
        let countNonWhiteSpace = /\S/g; // Change this line
        let result = sample.match(countNonWhiteSpace);
        `,
	},
	{
		section: 25,
		title: `Specify Upper and Lower Number of Matches`,
		exercise: `Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.`,
		starterCode: `
        let ohStr = "Ohhh no";
        let ohRegex = /change/; // Change this line
        let result = ohRegex.test(ohStr);
        `,
		solution: `
        let ohStr = "Ohhh no";
        let ohRegex = /Oh{3,6} no/; // Change this line
        let result = ohRegex.test(ohStr);
        `,
	},
	{
		section: 26,
		title: `Specify Only the Lower Number of Matches`,
		exercise: `Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.`,
		starterCode: `
        let haStr = "Hazzzzah";
        let haRegex = /change/; // Change this line
        let result = haRegex.test(haStr);
        `,
		solution: `
        let haStr = "Hazzzzah";
        let haRegex = /Haz{4,}ah/; // Change this line
        let result = haRegex.test(haStr);
        `,
	},
	{
		section: 27,
		title: `Specify Exact Number of Matches`,
		exercise: `Change the regex timRegex to match the word Timber only when it has four letter m's.`,
		starterCode: `
        let timStr = "Timmmmber";
        let timRegex = /change/; // Change this line
        let result = timRegex.test(timStr);
        `,
		solution: `
        let timStr = "Timmmmber";
        let timRegex = /Tim{4}ber/; // Change this line
        let result = timRegex.test(timStr);
        `,
	},
	{
		section: 28,
		title: `Check for All or None`,
		exercise: `Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.`,
		starterCode: `
        let favWord = "favorite";
        let favRegex = /change/; // Change this line
        let result = favRegex.test(favWord);
        `,
		solution: `
        let favWord = "favorite";
        let favRegex = /favou?rite/; // Change this line
        let result = favRegex.test(favWord);
        `,
	},
	{
		section: 29,
		title: `Positive and Negative Lookahead`,
		exercise: `Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.`,
		starterCode: `
        let sampleWord = "astronaut";
        let pwRegex = /change/; // Change this line
        let result = pwRegex.test(sampleWord);
        `,
		solution: `
        let sampleWord = "astronaut";
        let pwRegex = /(?=.{6,})(?=\D*\d{2,})/; // Change this line
        let result = pwRegex.test(sampleWord);
        `,
	},
	{
		section: 30,
		title: `Check For Mixed Grouping of Characters`,
		exercise: `Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

        Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.`,
		starterCode: `
        let myString = "Eleanor Roosevelt";
        let myRegex = /False/; // Change this line
        let result = false; // Change this line
        // After passing the challenge experiment with myString and see how the grouping works
        `,
		solution: `
        let myString = "Eleanor Roosevelt";
        let myRegex = /(Franklin|Eleanor)\s*.* Roosevelt/i; // Change this line
        let result = myRegex.test(myString); // Change this line
        // After passing the challenge experiment with myString and see how the grouping works
        `,
	},
	{
		section: 31,
		title: `Reuse Patterns Using Capture Groups`,
		exercise: `Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.`,
		starterCode: `
        let repeatNum = "42 42 42";
        let reRegex = /change/; // Change this line
        let result = reRegex.test(repeatNum);
        `,
		solution: `
        let repeatNum = "42 42 42";
        let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
        let result = reRegex.test(repeatNum);
        `,
	},
	{
		section: 32,
		title: `Use Capture Groups to Search and Replace`,
		exercise: `Write a regex fixRegex using three capture groups that will search for each word in the string one two three. Then update the replaceText variable to replace one two three with the string three two one and assign the result to the result variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.`,
		starterCode: `
        let str = "one two three";
        let fixRegex = /change/; // Change this line
        let replaceText = ""; // Change this line
        let result = str.replace(fixRegex, replaceText);
        `,
		solution: `
        let str = "one two three";
        let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
        let replaceText = '$3 $2 $1'; // Change this line
        let result = str.replace(fixRegex, replaceText);
        `,
	},
	{
		section: 33,
		title: `Remove Whitespace from Start and End`,
		exercise: `Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.`,
		starterCode: `
        let hello = "   Hello, World!  ";
        let wsRegex = /change/; // Change this line
        let result = hello; // Change this line
        `,
		solution: `
        let hello = "   Hello, World!  ";
        let wsRegex = /(^\s+)|(\s+$)/g; // Change this line
        let result = hello.replace(wsRegex, ''); // Change this line

        console.log(result)
        `,
	},
];

regexResults(regexList);
