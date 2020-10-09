import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      words: ""
    };
  }

  handleWordChange = event => {
    this.setState({
      words: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleWordChange(event)} value={this.state.words} name="message" id="message" />
        <br></br>
        <strong>{this.props.maxChars - this.state.words.length} characters left</strong>
      </div>
    );
  }
}

export default TwitterMessage;
