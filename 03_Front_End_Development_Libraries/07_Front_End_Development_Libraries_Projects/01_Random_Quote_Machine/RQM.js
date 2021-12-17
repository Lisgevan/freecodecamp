//function to create random rgb color
const randomRGB = () => {
	const randomR = Math.floor(Math.random() * 255);
	const randomG = Math.floor(Math.random() * 255);
	const randomB = Math.floor(Math.random() * 255);
	const randomColor = `rgb(${randomR},${randomG},${randomB})`;
	document.querySelector("body").style.backgroundColor = randomColor;
	document.querySelector("body").style.color = randomColor;
	document.querySelector("footer").style.color = randomColor;
	document.querySelectorAll(".js-bgc").forEach(el => {
		(el.style.backgroundColor = randomColor), (el.style.color = "white");
	});
	return;
};

// select elements to enter quote text and author
const quoteText = document.querySelector("#text");
const quoteAuthor = document.querySelector("#author");

// const responce = fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
// 	.then(response => response.json())
// 	.then(data => {
// 		(quoteText.innerHTML += data.quotes[0].text), (quoteAuthor.innerHTML = data.quotes[0].author);
// 	});

const button = document.querySelector("#new-quote");
button.addEventListener("click", () => {
	fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
		.then(response => response.json())
		.then(data => {
			(quoteText.innerHTML = data.quotes[0].text), (quoteAuthor.innerHTML = data.quotes[0].author);
		});
	randomRGB();
});
