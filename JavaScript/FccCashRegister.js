function checkCashRegister(price, cash, cid) {
	console.log("start", ...arguments);

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
	console.log("total cid", totalCid);

	const change = cash - price;
	console.log("change", change);

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
	console.log("1", cid, "2", cidCopy, "3");

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

console.log(
	"final: ",
	checkCashRegister(3.26, 100, [
		["PENNY", 1.01],
		["NICKEL", 2.05],
		["DIME", 3.1],
		["QUARTER", 4.25],
		["ONE", 90],
		["FIVE", 55],
		["TEN", 20],
		["TWENTY", 60],
		["ONE HUNDRED", 100],
	])
);
