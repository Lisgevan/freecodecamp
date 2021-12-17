// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
	breaks: true,
	highlight: function (code) {
		return Prism.highlight(code, Prism.languages.javascript, "javascript");
	},
});

// INSERTS target="_blank" INTO HREF TAGS (required for Codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
	return `<a target="_blank" href="${href}">${text}</a>`;
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			markdownText: placeholder,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			markdownText: event.target.value,
		});
		console.log("changed", this.state.markdownText);
	}

	render() {
		return (
			<div className=" container">
				<div className="row">
					<InputArea markdown={this.state.markdownText} onChange={this.handleChange} />
				</div>
				<div className="row">
					<OutputArea markdown={this.state.markdownText} />
				</div>
			</div>
		);
	}
}

const InputArea = props => {
	return (
		<div className="mb-3">
			<label htmlFor="editor" className="btn btn-success d-block m-0 mt-5 form-label text-start">
				Editor:
			</label>
			<textarea
				type="text"
				className="form-control"
				id="editor"
				placeholder={"Write or paste your markdown code here."}
				value={props.markdown}
				onChange={props.onChange}
			/>
		</div>
	);
};

const OutputArea = props => {
	return (
		<div className="mb-3">
			<label htmlFor="preview" className="btn btn-success d-block m-0 mt-5 form-label text-start">
				Previewer:
			</label>
			<div
				className="form-control overflow-auto"
				dangerouslySetInnerHTML={{
					__html: marked.parse(props.markdown),
				}}
				id="preview"
			/>
		</div>
	);
};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
