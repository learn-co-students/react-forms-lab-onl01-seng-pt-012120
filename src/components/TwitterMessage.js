import React from "react";


class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
       
      message: " ",
      chars_left: props.maxChars
    };
  }


  handleChange = event => {
    this.setState({
      message: event.target.value,
      chars_left: this.props.maxChars - event.target.value.length
    })
  }


  render() {
    
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        onChange={event => this.handleChange(event)}
        value={this.state.message}/>
        
        <p>Characters Left: {this.state.chars_left}</p>
      </div>
    );
  }
}

export default TwitterMessage;
