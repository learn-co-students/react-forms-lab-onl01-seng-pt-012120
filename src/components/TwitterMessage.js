import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      currentChars: 0,
      tweetContent: ""
    };
  }

  handleChange = event => {
    this.setState({
       tweetContent: event.target.value,
       currentChars: event.target.value.length   
    })
  }

  charRemaining = () => {
    if (this.state.maxChars > this.state.currentChars) {
      return (this.state.maxChars - this.state.currentChars)
    } else {
      return 0
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>You have {this.charRemaining()} characters remaining.</p>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.tweetContent} />
      </div>
    );
  }
}

export default TwitterMessage;
