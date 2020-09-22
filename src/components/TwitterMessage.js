import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars
    };
  }

  calculateRemaining = (event) => {
    return (
      this.props.maxChars - event.target.value.length
    )
  }

  handleChange = event => {
    this.setState({ 
      maxChars: this.calculateRemaining(event),
      input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <div>
          <p>You have <span>{this.state.maxChars}</span> characters left.</p>
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
