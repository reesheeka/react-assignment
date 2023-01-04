import React from 'react';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      showParagraph: false,
    };
  }
  render() {
    return (
      <>
        <textarea
          value={this.state.input}
          onChange={(e) => this.setState({ input: e.target.value })}
        />
        <br />
        <button
          onClick={() => {
            this.setState({
              showParagraph: !this.state.showParagraph,
            });
          }}
        >
          Display in uppercase
        </button>
        {this.state.showParagraph && <p>{this.state.input.toUpperCase()}</p>}
        
      </>
    );
  }
}

export default App;
