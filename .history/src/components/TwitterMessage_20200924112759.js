import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars
    };
  }

  handleChange = event => {
    console.log(event.value)
    // this.setState({
    //   [event.target.name]: event.target.value
    // })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
