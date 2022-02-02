//TODO:fix multiple zeros at top display
//TODO:fix calculator's width display
//TODO:fix max numbers to display
//TODO:fix top display multiple dots adding

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			power: false,
			displayTop: "READY TO CALCULATE",
			displayBottom: "0",
			input: 0,
			total: 0,
		};

		this.numberClick = this.numberClick.bind(this);
		this.clearClick = this.clearClick.bind(this);
		this.operatorClick = this.operatorClick.bind(this);
		this.dotClick = this.dotClick.bind(this);
		this.equalClick = this.equalClick.bind(this);
		this.onOffClick = this.onOffClick.bind(this);
	}

	numberClick(e) {
		this.setState({
			displayBottom:
				this.state.displayBottom === "0" ||
				this.state.displayBottom.endsWith("/") ||
				this.state.displayBottom.endsWith("*") ||
				this.state.displayBottom.endsWith("+")
					? e.target.value
					: this.state.displayBottom + e.target.value,
			displayTop:
				this.state.displayTop === "READY TO CALCULATE"
					? e.target.value
					: this.state.displayTop + e.target.value,
			input: Number(this.state.displayBottom),
		});
	}

	clearClick() {
		this.setState({
			displayTop: "READY TO CALCULATE",
			displayBottom: "0",
			input: 0,
			total: 0,
		});
		console.log("cleared");
	}

	operatorClick(e) {
		//calculate and display bottom
		if (/[*+/]$|[-]$/.test(e.target.value)) {
			this.setState({
				displayBottom: e.target.value,
			});
		}
		if (this.state.displayBottom === "-") {
			this.setState({
				displayBottom: this.state.displayBottom + e.target.value,
			});
		} else if (
			this.state.displayBottom.endsWith("/") ||
			this.state.displayBottom.endsWith("*") ||
			this.state.displayBottom.endsWith("+")
		) {
			this.setState({
				displayBottom: e.target.value,
			});
		}

		// Set top display
		if (this.state.displayTop === "READY TO CALCULATE") {
			switch (e.target.value) {
				case "+":
				case "*":
				case "/":
					this.setState({
						displayTop: "READY TO CALCULATE",
					});
					break;
				case "-":
					this.setState({
						displayTop: "-",
					});
					break;
			}
		} else if (this.state.displayTop === "-") {
			switch (e.target.value) {
				case "+":
				case "*":
				case "/":
				case "-":
					this.setState({
						displayTop: "-",
					});
					break;
			}
		} else if (
			this.state.displayTop.endsWith("/") ||
			this.state.displayTop.endsWith("*") ||
			this.state.displayTop.endsWith("-") ||
			this.state.displayTop.endsWith("+")
		) {
			this.setState({
				displayTop: /[*+/]$/g.test(e.target.value)
					? this.state.displayTop.replace(/[*+/-]{2,}$/g, e.target.value)
					: this.state.displayTop + e.target.value,
			});
		} else {
			this.setState({
				displayTop: this.state.displayTop + e.target.value,
			});
		}
	}

	dotClick(e) {
		this.setState({
			displayBottom:
				this.state.displayBottom === "0" ||
				this.state.displayBottom.endsWith("/") ||
				this.state.displayBottom.endsWith("*") ||
				this.state.displayBottom.endsWith("+") ||
				this.state.displayBottom.endsWith("-")
					? "0" + e.target.value
					: this.state.displayBottom.indexOf(".") === -1
					? this.state.displayBottom + e.target.value
					: this.state.displayBottom,
			displayTop:
				this.state.displayTop === "READY TO CALCULATE"
					? "0" + e.target.value
					: this.state.displayTop.endsWith("/") ||
					  this.state.displayTop.endsWith("*") ||
					  this.state.displayTop.endsWith("+") ||
					  this.state.displayTop.endsWith("-")
					? this.state.displayTop + "0" + e.target.value
					: this.state.displayTop + e.target.value,
			input: Number(this.state.displayBottom),
		});
		console.log("dot");
	}

	equalClick() {
		this.setState({
			displayBottom: String(eval(this.state.displayTop)),
			displayTop: String(eval(this.state.displayTop)),
		});
		console.log("equals", String(eval(this.state.displayTop)));
	}

	onOffClick() {
		this.setState({
			power: !this.state.power,
		});
		console.log("ON / OFF");
	}

	render() {
		return (
			<div>
				<h1 className="text-white border-bottom">My Calculator</h1>
				<Screens power={this.state.power} top={this.state.displayTop} bottom={this.state.displayBottom} />
				<Keypad
					numberClick={this.numberClick}
					clearClick={this.clearClick}
					operatorClick={this.operatorClick}
					dotClick={this.dotClick}
					equalClick={this.equalClick}
					onOffClick={this.onOffClick}
					power={this.state.power}
				/>
			</div>
		);
	}
}

class Keypad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-6 d-grid gap-2 my-2">
						<button
							id="clear"
							type="button"
							className="btn btn-lg btn-outline-danger"
							onClick={this.props.clearClick}>
							CLEAR
						</button>
					</div>
					<div className="col-3 d-grid gap-2 my-2">
						<button
							type="button"
							className={`btn btn-lg ${this.props.power ? "btn-outline-info" : "btn-outline-danger"}`}
							onClick={this.props.onOffClick}>
							{this.props.power ? "ON" : "OFF"}
						</button>
					</div>
					<div className="col-3 d-grid gap-2 my-2">
						<button
							id="divide"
							type="button"
							value="/"
							className="btn btn-lg btn-outline-info"
							onClick={this.props.operatorClick}>
							/
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col-3 d-grid gap-2 my-2">
						<button
							id="seven"
							value="7"
							type="button"
							className="btn btn-lg btn-outline-light"
							onClick={this.props.numberClick}>
							7
						</button>
					</div>
					<div className="col-3 d-grid gap-2 my-2">
						<button
							id="eight"
							value="8"
							type="button"
							className="btn btn-lg btn-outline-light"
							onClick={this.props.numberClick}>
							8
						</button>
					</div>
					<div className="col-3 d-grid gap-2 my-2">
						<button
							id="nine"
							value="9"
							type="button"
							className="btn btn-lg btn-outline-light"
							onClick={this.props.numberClick}>
							9
						</button>
					</div>
					<div className="col-3 d-grid gap-2 my-2">
						<button
							id="multiply"
							type="button"
							value="*"
							className="btn btn-lg btn-outline-info"
							onClick={this.props.operatorClick}>
							*
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col d-grid gap-2 my-2">
						<button
							id="four"
							value="4"
							type="button"
							className="btn btn-lg btn-outline-light"
							onClick={this.props.numberClick}>
							4
						</button>
					</div>
					<div className="col d-grid gap-2 my-2">
						<button
							id="five"
							value="5"
							type="button"
							className="btn btn-lg btn-outline-light"
							onClick={this.props.numberClick}>
							5
						</button>
					</div>
					<div className="col d-grid gap-2 my-2">
						<button
							id="six"
							value="6"
							type="button"
							className="btn btn-lg btn-outline-light"
							onClick={this.props.numberClick}>
							6
						</button>
					</div>
					<div className="col d-grid gap-2 my-2">
						<button
							id="subtract"
							type="button"
							value="-"
							className="btn btn-lg btn-outline-info"
							onClick={this.props.operatorClick}>
							-
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col d-grid gap-2 my-2">
						<button
							id="one"
							value="1"
							type="button"
							className="btn btn-lg btn-outline-light"
							onClick={this.props.numberClick}>
							1
						</button>
					</div>
					<div className="col d-grid gap-2 my-2">
						<button
							id="two"
							value="2"
							type="button"
							className="btn btn-lg btn-outline-light"
							onClick={this.props.numberClick}>
							2
						</button>
					</div>
					<div className="col d-grid gap-2 my-2">
						<button
							id="three"
							value="3"
							type="button"
							className="btn btn-lg btn-outline-light"
							onClick={this.props.numberClick}>
							3
						</button>
					</div>
					<div className="col d-grid gap-2 my-2">
						<button
							id="add"
							type="button"
							value="+"
							className="btn btn-lg btn-outline-info"
							onClick={this.props.operatorClick}>
							+
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col d-grid gap-2 mt-2 mb-3">
						<button
							id="zero"
							value="0"
							type="button"
							className="btn btn-lg btn-outline-light"
							onClick={this.props.numberClick}>
							0
						</button>
					</div>
					<div className="col d-grid gap-2 mt-2 mb-3">
						<button
							id="decimal"
							type="button"
							value="."
							className="btn btn-lg btn-outline-info"
							onClick={this.props.dotClick}>
							.
						</button>
					</div>
					<div className="col-6 d-grid gap-2 mt-2 mb-3">
						<button
							id="equals"
							type="button"
							value="="
							className="btn btn-lg btn-outline-success"
							onClick={this.props.equalClick}>
							=
						</button>
					</div>
				</div>
			</div>
		);
	}
}

class Screens extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<div className="border-bottom ">
					<p
						className={`${
							!this.props.power
								? "text-dark"
								: this.props.top === "READY TO CALCULATE"
								? "text-success"
								: "text-warning"
						} text-end mt-3 align-self-center`}>
						{this.props.top}
					</p>
				</div>
				<div className="border-bottom">
					<p
						id="display"
						className={`${!this.props.power ? "text-dark" : "text-primary"} text-end mt-3 align-center`}>
						{this.props.bottom}
					</p>
				</div>
			</div>
		);
	}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
