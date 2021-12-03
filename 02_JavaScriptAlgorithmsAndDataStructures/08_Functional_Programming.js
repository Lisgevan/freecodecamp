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
const fp = document.querySelector(".js-fp");
// const outcomeEL = document.querySelector("#js-outcome");
// const titleEL = document.querySelector("#js-title");

const fpResults = result => {
	// console.dir(result[0]["section"]);
	for (let item of result) {
		console.dir(item["section"]);
		fp.innerHTML += `
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

const fpList = [
	{
		section: 01,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 02,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 03,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 04,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 05,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 06,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 07,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 08,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 09,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 10,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 11,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 12,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 13,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 14,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 15,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 16,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 17,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 18,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 19,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 20,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 21,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 22,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 23,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
	{
		section: 24,
		title: ``,
		exercise: ``,
		starterCode: `
		
		`,
		solution: `
		
		`,
	},
];

fpResults(fpList);
