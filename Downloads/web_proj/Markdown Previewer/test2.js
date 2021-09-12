// React:
class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Markdown Input</h2>
          <input
            value={this.state.input}
            onChange={this.handleChange} />
        <hr></hr>

        <h2>Markdown Output</h2>
        <ul>
        <li>{this.state.input}</li>
        </ul>
      </div>
    );
  }
};

//ReactDOM.render(<AppWrapper />, document.getElementById('markdown-container'));