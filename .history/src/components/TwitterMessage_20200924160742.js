import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxchars: this.props.maxchars,
      remChars: this.props.maxchars,
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      text: e.target.value,
      remChars: this.state.maxchars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.text} maxchars={this.state.remChars}/>
        <p>remaining character count: {this.state.remChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
