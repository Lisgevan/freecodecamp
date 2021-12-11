function returnDay(num) {
	const days = ["monday", "tuesday", "wenesday", "thursday", "friday", "saturady", "sunday"];
	const day = days[num - 1];
	return day ? day : null;
}

let result = returnDay(1);
console.log(result);
alert(result);
