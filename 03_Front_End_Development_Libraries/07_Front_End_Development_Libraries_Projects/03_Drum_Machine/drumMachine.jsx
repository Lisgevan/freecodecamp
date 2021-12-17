//Objects for the 2 banks
const bankOne = [
	{
		keyCode: 81,
		keyTrigger: "Q",
		id: "Heater-1",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
	},
	{
		keyCode: 87,
		keyTrigger: "W",
		id: "Heater-2",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
	},
	{
		keyCode: 69,
		keyTrigger: "E",
		id: "Heater-3",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
	},
	{
		keyCode: 65,
		keyTrigger: "A",
		id: "Heater-4",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
	},
	{
		keyCode: 83,
		keyTrigger: "S",
		id: "Clap",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
	},
	{
		keyCode: 68,
		keyTrigger: "D",
		id: "Open-HH",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
	},
	{
		keyCode: 90,
		keyTrigger: "Z",
		id: "Kick-n'-Hat",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
	},
	{
		keyCode: 88,
		keyTrigger: "X",
		id: "Kick",
		url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
	},
	{
		keyCode: 67,
		keyTrigger: "C",
		id: "Closed-HH",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
	},
];

const bankTwo = [
	{
		keyCode: 81,
		keyTrigger: "Q",
		id: "Chord-1",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
	},
	{
		keyCode: 87,
		keyTrigger: "W",
		id: "Chord-2",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
	},
	{
		keyCode: 69,
		keyTrigger: "E",
		id: "Chord-3",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
	},
	{
		keyCode: 65,
		keyTrigger: "A",
		id: "Shaker",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
	},
	{
		keyCode: 83,
		keyTrigger: "S",
		id: "Open-HH",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
	},
	{
		keyCode: 68,
		keyTrigger: "D",
		id: "Closed-HH",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
	},
	{
		keyCode: 90,
		keyTrigger: "Z",
		id: "Punchy-Kick",
		url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
	},
	{
		keyCode: 88,
		keyTrigger: "X",
		id: "Side-Stick",
		url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
	},
	{
		keyCode: 67,
		keyTrigger: "C",
		id: "Snare",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
	},
];

//main application
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			power: true,
			keyPressed: "",
			display: "  ",
			bank: true, //true for bank-01 and false for bank-02
			volume: 0.5,
		};
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handlePower = this.handlePower.bind(this);
		this.handleBank = this.handleBank.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.adjustVolume = this.adjustVolume.bind(this);
	}

	componentDidMount() {
		window.addEventListener("keydown", this.handleKeyPress);
	}
	componentWillUnmount() {
		window.removeEventListener("keydown", this.handleKeyPress);
	}

	handlePower() {
		this.setState({
			power: !this.state.power,
		});
	}

	handleBank() {
		this.setState({
			bank: !this.state.bank,
		});
	}

	handleKeyPress(event) {
		if (this.state.power) {
			if ("qweasdzxcQWEASDZXC".includes(event.key)) {
				this.setState({
					keyPressed: event.key.toUpperCase(),
					display: this.state.bank
						? bankOne.filter(item => item.keyTrigger === event.key.toUpperCase())[0].id
						: bankTwo.filter(item => item.keyTrigger === event.key.toUpperCase())[0].id,
				});
				const sound = document.getElementById(event.key.toUpperCase());
				sound.currentTime = 0;
				sound.play();
			}
		}
	}

	handleClick(event) {
		if (this.state.power) {
			this.setState({
				keyPressed: event.key,
				display: this.state.bank
					? bankOne.filter(item => item.keyTrigger === event.target.innerText)[0].id
					: bankTwo.filter(item => item.keyTrigger === event.target.innerText)[0].id,
			});
			const sound = document.getElementById(event.target.innerText);
			sound.currentTime = 0;
			sound.play();
		}
	}

	adjustVolume(event) {
		if (this.state.power) {
			this.setState({
				volume: event.target.value,
				display: "Volume: " + Math.round(event.target.value * 100),
			});
		}
	}

	render() {
		return (
			<div id="drum-machine" className="row h-100 d-flex align-items-center">
				<div id="keypad" className="col-lg-6 text-center">
					<KeyPad onClick={this.handleClick} bank={this.state.bank} sliderVal={this.state.volume} />
				</div>
				<div className="col-lg-6 text-center">
					<div>
						<p className="m-0 fw-bold">Click to power:</p>
						<button
							onClick={this.handlePower}
							className={`btn ${!this.state.power ? "btn-success" : "btn-danger"} mb-3`}>
							{!this.state.power ? "ON" : "OFF"}
						</button>
					</div>
					<div id="display">
						<p>{this.state.display}</p>
					</div>
					<div className="volume-slider">
						<input
							max="1"
							min="0"
							onChange={this.adjustVolume}
							step="0.01"
							type="range"
							value={this.state.sliderVal}
						/>
					</div>
					<div>
						<p className="m-0 fw-bold">Select Bank</p>
						<button onClick={this.handleBank} className="btn btn-primary mb-3">
							{this.state.bank ? "01" : "02"}
						</button>
					</div>
				</div>
			</div>
		);
	}
}

const KeyPad = props => {
	{
		const clips = [].slice.call(document.getElementsByClassName("clip"));
		clips.forEach(sound => {
			sound.volume = props.sliderVal;
		});
	}
	return (
		<div>
			{props.bank
				? bankOne.map(item => {
						return (
							<a
								key={item.id}
								id={item.id}
								className="drum-pad btn col-3 m-2 p-2"
								onClick={props.onClick}>
								{item.keyTrigger} <audio id={item.keyTrigger} src={item.url} className="clip"></audio>
							</a>
						);
				  })
				: bankTwo.map(item => {
						return (
							<a
								key={item.id}
								id={item.id}
								className="drum-pad btn col-3 m-2 p-2"
								onClick={props.onClick}>
								{item.keyTrigger} <audio id={item.keyTrigger} src={item.url} className="clip"></audio>
							</a>
						);
				  })}
		</div>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
