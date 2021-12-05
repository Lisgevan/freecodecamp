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
const jadsp = document.querySelector(".js-jadsp");
// const outcomeEL = document.querySelector("#js-outcome");
// const titleEL = document.querySelector("#js-title");

const jadspResults = result => {
	// console.dir(result[0]["section"]);
	for (let item of result) {
		console.dir(item["section"]);
		jadsp.innerHTML += `
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

const jadspList = [
	{
		section: 01,
		title: `Palindrome Checker`,
		exercise: `Return true if the given string is a palindrome. Otherwise, return false.

		A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

		Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

		We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

		We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.`,
		starterCode: `
		function palindrome(str) {
			return true;
		}

		palindrome("eye");
		`,
		solution: `
		function palindrome(str) {
			console.log(str)
			str = str.toLowerCase().replace(/\W|_/g, "")
			console.log(str)
			const rts = str.split("").reverse().join("")

			return str===rts;
		}

		palindrome("ey,e");
		`,
	},
	{
		section: 02,
		title: `Roman Numeral Converter`,
		exercise: `Convert the given number into a roman numeral.

		All roman numerals answers should be provided in upper-case.`,
		starterCode: `
		function convertToRoman(num) {
			return num;
		}

		convertToRoman(36);
		`,
		solution: `
		function convertToRoman(num) {
			const romanNum = {
				1000:"M",
				900:"CM",
				500:"D",
				400:"CD",
				100:"C",
				90:"XC",
				50:"L",
				40:"XL",
				10:"X",
				9:"IX",   
				4:"IV",
				5:"V",
				1:"I",
			};

			let result = ""
			const romanKeys = Object.keys(romanNum).reverse()
			console.log(romanKeys)
			const romanKeysLength = romanKeys.length;

			while(num>0){
				for (let i=0 ; i<romanKeysLength ; i++){
				if(num >= romanKeys[i]){
					result += romanNum[romanKeys[i]]; 
					console.log(romanKeys[i])       
					num -= +romanKeys[i];
					break;
				}
				}
			}    

		return result;
		}

		convertToRoman(36);
		`,
	},
	{
		section: 03,
		title: `Caesars Cipher`,
		exercise: `One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

		A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

		Write a function which takes a ROT13 encoded string as input and returns a decoded string.

		All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.`,
		starterCode: `
		function rot13(str) {
			return str;
		}

		rot13("SERR PBQR PNZC");
		`,
		solution: `
		function rot13(str) {
			const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
			const code = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
			const strList = str.split('');

			for (let i=0; i<str.length; i++){
				if(abc.indexOf(strList[i])===-1){
				strList[i] = strList[i]
				}else{
				strList[i] = code[abc.indexOf(strList[i])]
				}
			}
			return strList.join('');
			}
			rot13("SERR PBQR PNZC");
		`,
	},
	{
		section: 04,
		title: `Telephone Number Validator`,
		exercise: `Return true if the passed string looks like a valid US phone number.

		The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

		555-555-5555
		(555)555-5555
		(555) 555-5555
		555 555 5555
		5555555555
		1 555 555 5555
		For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.`,
		starterCode: `
		function telephoneCheck(str) {
			return true;
		}

		telephoneCheck("555-555-5555");
		`,
		solution: `
		function telephoneCheck(str) {
			const regex = /^1?(\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/gm
			return regex.test(str);
		}

		telephoneCheck("555-555-5555");
		`,
	},
	{
		section: 05,
		title: `Cash Register`,
		exercise: `Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

		cid is a 2D array listing available currency.

		The checkCashRegister() function should always return an object with a status key and a change key.

		Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

		Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

		Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

		Currency Unit	Amount
		Penny	$0.01 (PENNY)
		Nickel	$0.05 (NICKEL)
		Dime	$0.1 (DIME)
		Quarter	$0.25 (QUARTER)
		Dollar	$1 (ONE)
		Five Dollars	$5 (FIVE)
		Ten Dollars	$10 (TEN)
		Twenty Dollars	$20 (TWENTY)
		One-hundred Dollars	$100 (ONE HUNDRED)
		See below for an example of a cash-in-drawer array:

		[
		["PENNY", 1.01],
		["NICKEL", 2.05],
		["DIME", 3.1],
		["QUARTER", 4.25],
		["ONE", 90],
		["FIVE", 55],
		["TEN", 20],
		["TWENTY", 60],
		["ONE HUNDRED", 100]
		]`,
		starterCode: `
		function checkCashRegister(price, cash, cid) {
			let change;
			return change;
			}

			checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
		`,
		solution: `
		function checkCashRegister(price, cash, cid) {

			const coinExpln = [
				["ONE HUNDRED", 100],
				["TWENTY", 20],
				["TEN", 10],
				["FIVE", 5],
				["ONE", 1],
				["QUARTER", 0.25],
				["DIME", 0.1],
				["NICKEL", 0.05],
				["PENNY", 0.01],
			];

			const totalCid = +cid.reduce((acc, item) => acc + item[1], 0).toFixed(2);

			const change = cash - price;

			let cidCopy = cid.map(inner => inner.slice()).reverse();

			let changeCopy = change;

			for (let i in cidCopy) {
				// console.log("i", i, cidCopy[i][1], cidCopy[i][0], changeCopy);
				while (changeCopy >= coinExpln[i][1] && cidCopy[i][1] !== 0) {
					changeCopy -= coinExpln[i][1];
					changeCopy = +changeCopy.toFixed(2);
					cidCopy[i][1] -= coinExpln[i][1];
					cidCopy[i][1] = +cidCopy[i][1].toFixed(2);
					// console.log("i2", cidCopy[i][1], cidCopy[i][0], changeCopy, cidCopy);
				}
			}
			cidCopy = cidCopy.reverse();

			const counterOutcome = {
				funds: { status: "INSUFFICIENT_FUNDS", change: [] },
				closed: { status: "CLOSED", change: cid },
				open: { status: "OPEN", change: [] },
			};

			for (let i = 0; i < cid.length; i++) {
				+(cid[i][1] - cidCopy[i][1]).toFixed(2)
					? counterOutcome.open.change.unshift([cid[i][0], +(cid[i][1] - cidCopy[i][1]).toFixed(2)])
					: "";
			}
			// CASES:
			const updateState = () => {
				// totalCid < change ==> {status: "INSUFFICIENT_FUNDS", change: []}
				if (totalCid < change) {
					return counterOutcome.funds;
					// !exactChange ==> {status: "INSUFFICIENT_FUNDS", change: []}
				} else if (changeCopy) {
					return counterOutcome.funds;

					// cid = change ==> {status: "CLOSED", change: [cid]}
				} else if (totalCid === change) {
					return counterOutcome.closed;
					// ELSE ==> {status: "OPEN", change: [sorted]}
				} else {
					return counterOutcome.open;
				}
			};

			return updateState();
		}

		checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
		`,
	},
];

jadspResults(jadspList);
