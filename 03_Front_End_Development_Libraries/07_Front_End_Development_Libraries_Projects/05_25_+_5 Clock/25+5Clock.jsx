class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			b_length: 5,
			s_length: 25,
			timer: 1500,
			timerRunning: true,
			countdown: "",
			breakSession: "Session",
		};
		this.incrementOne = this.incrementOne.bind(this);
		this.decrementOne = this.decrementOne.bind(this);
		this.makeClock = this.makeClock.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this.pauseTimer = this.pauseTimer.bind(this);
		this.resetTimer = this.resetTimer.bind(this);
	}

	incrementOne(e) {
		let target = e.target.previousSibling.id;
		target === "break-length"
			? this.state.b_length < 60
				? this.setState({ b_length: this.state.b_length + 1 })
				: this.state.b_length
			: this.state.s_length < 60
			? this.setState({
					s_length: this.state.s_length + 1,
					timer: (this.state.s_length + 1) * 60,
			  })
			: this.state.s_length;
		this.makeClock();

		console.log("add 1: ");
	}

	decrementOne(e) {
		let target = e.target.nextSibling.id;
		target === "break-length"
			? this.state.b_length > 1
				? this.setState({ b_length: this.state.b_length - 1 })
				: this.state.b_length
			: this.state.s_length > 1
			? this.setState({
					s_length: this.state.s_length - 1,
					timer: (this.state.s_length - 1) * 60,
			  })
			: this.state.s_length;
		this.makeClock();

		console.log("reduce 1: ");
	}

	makeClock() {
		let mins = Math.floor(this.state.timer / 60);
		mins = mins < 10 ? "0" + mins : mins;
		let secs = this.state.timer - mins * 60;
		secs = secs < 10 ? "0" + secs : secs;
		console.log("clock");
		return mins + ":" + secs;
	}

	startTimer() {
		this.setState({
			timerRunning: !this.state.timerRunning,

			countdown: setInterval(() => {
				this.setState({
					timer: this.state.timer - 1,
				});
				if (this.state.timer === 0) {
					this.buzzer();
					this.toggleSession();
				}
			}, 1000),
		});
		console.log("counting down");
	}

	toggleSession() {
		clearInterval(this.state.countdown);
		setTimeout(() => {
			this.state.breakSession === "Session"
				? this.setState({
						timer: this.state.b_length * 60,
						breakSession: "Break",
				  })
				: this.setState({
						timer: this.state.s_length * 60,
						breakSession: "Session",
				  });
		}, 2000);
		this.startTimer();
	}

	pauseTimer() {
		this.setState({
			timerRunning: !this.state.timerRunning,
		});
		clearInterval(this.state.countdown);

		console.log("counting down");
	}

	resetTimer() {
		this.setState({
			b_length: 5,
			s_length: 25,
			timer: 1500,
			timerRunning: true,
			countdown: "",
			breakSession: "Session",
		});
		clearInterval(this.state.countdown);
		this.audioBeep.pause();
		this.audioBeep.currentTime = 0;
		console.log("counting reset");
	}

	buzzer() {
		if (this.state.timer === 0) {
			this.audioBeep.play();
		}
	}

	render() {
		return (
			<div className="posotion-relative w-100 h-100 d-flex flex-column">
				<div className="row">
					<h1 className="text-center">25 + 5 Clock</h1>
				</div>
				<div className="row">
					<BreakLabel
						b_length={this.state.b_length}
						incrementOne={this.incrementOne}
						decrementOne={this.decrementOne}
					/>
					<SessionLabel
						s_length={this.state.s_length}
						incrementOne={this.incrementOne}
						decrementOne={this.decrementOne}
					/>
				</div>
				<Session makeClock={this.makeClock} breakSession={this.state.breakSession} />
				<SessionControls
					timerRunning={this.state.timerRunning}
					startTimer={this.startTimer}
					pauseTimer={this.pauseTimer}
					resetTimer={this.resetTimer}
				/>
				<audio
					id="beep"
					preload="auto"
					ref={audio => {
						this.audioBeep = audio;
					}}
					src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
				/>
			</div>
		);
	}
}

class Session extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="row text-center border rounded-pill w-50 align-self-center m-4">
				<div className="col-12">
					<h1 id="timer-label">{this.props.breakSession}</h1>
				</div>
				<div className="col-12">
					<time id="time-left" className="fs-1">
						{this.props.makeClock()}
					</time>
				</div>
			</div>
		);
	}
}

class SessionControls extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="row text-center w-50 align-self-center my-2">
				<div className="d-flex flex-row justify-content-center">
					<div
						id="start_stop"
						onClick={this.props.timerRunning ? this.props.startTimer : this.props.pauseTimer}>
						{this.props.timerRunning ? (
							<i className="fa fa-play mx-3 fs-4" aria-hidden="true"></i>
						) : (
							<i className="fa fa-pause mx-3 fs-4" aria-hidden="true"></i>
						)}
					</div>
					<i
						id="reset"
						className="fa fa-refresh mx-3 fs-4"
						aria-hidden="true"
						onClick={this.props.resetTimer}></i>
				</div>
			</div>
		);
	}
}

class BreakLabel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div id="break-label" className="col-6 text-center">
				<h3>Break Length</h3>
				<div className="d-flex justify-content-center">
					<i
						id="break-decrement"
						className="fa fa-arrow-down mx-3 fs-4"
						aria-hidden="true"
						onClick={this.props.decrementOne}></i>
					<p id="break-length">{this.props.b_length}</p>
					<i
						id="break-increment"
						className="fa fa-arrow-up mx-3 fs-4"
						aria-hidden="true"
						onClick={this.props.incrementOne}></i>
				</div>
			</div>
		);
	}
}

class SessionLabel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div id="session-label" className="col-6 text-center">
				<h3>Session Length</h3>
				<div className="d-flex justify-content-center">
					<i
						id="session-decrement"
						className="fa fa-arrow-down mx-3 fs-4"
						aria-hidden="true"
						onClick={this.props.decrementOne}></i>
					<p id="session-length">{this.props.s_length}</p>
					<i
						id="session-increment"
						className="fa fa-arrow-up mx-3 fs-4"
						aria-hidden="true"
						onClick={this.props.incrementOne}></i>
				</div>
			</div>
		);
	}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
