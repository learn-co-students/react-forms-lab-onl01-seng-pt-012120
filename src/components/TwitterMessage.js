import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
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
          maxLength={this.props.maxChars}
          value={this.state.message}
          onChange={e => this.handleChange(e)}
        />
        <i>Remaining characters: {this.props.maxChars - this.state.message.length}</i>
      </div>
    );
  }
}

export default TwitterMessage;
