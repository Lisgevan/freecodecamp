const bookPages = [
	{
		name: "1",
		content: [
			{
				name: "1.1",
				content: [
					{
						name: "1.1.1",
						content: [],
					},
				],
			},
			{
				name: "1.2",
				content: [],
			},
		],
	},
	{
		name: "2",
		content: [
			{
				name: "2.1",
				content: [],
			},
		],
	},
];

const arr = [];

for (let item of bookPages) arr.push(item.name);

console.log(arr);
