import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      numChars: 0,
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      numChars: event.target.value.length,
      message: event.target.value
    })
  }

  displayCharCount = () => {
    return this.props.maxChars - this.state.numChars
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} />
        Characters Remaining: {this.displayCharCount()}
        <h4>{"MaxChars: " + this.props.maxChars}</h4>
      </div>
    );
  }
}

export default TwitterMessage;