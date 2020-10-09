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

  handleMaxChar = () => {
    return this.props.maxChars - this.state.numChars
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        {/* You'll find an <input type="text"> in this component. Make this a controlled component by adding the attributes to the <input> element. Its value should be saved in the component's state and should update on every change to the input. */}
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} />
        {/* Show the remaining characters in the component. It doesn't matter how you render it, as long as the number is correct. No need to guard against input that is too long — you can let the counter reach negative values. */}
        Characters Remaining: {this.handleMaxChar()}
        {/* This component takes one prop: maxChars which is a number — the maximum amount of characters a message can have. This prop is being passed in from the App component with the value 280. */}
        <h4>{"MaxChars: " + this.props.maxChars}</h4>
      </div>
    );
  }
}

export default TwitterMessage;
