import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars
    };
  }

  handleChange = event => {
    let remainChar = this.state.maxChars
    this.setState({
      maxChars: remainChar - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
