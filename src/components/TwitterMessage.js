import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      message: "",
      maxChars: this.props.maxChars
      
    };
    
  }
   handleChange = event => {
    this.setState({
      message: event.target.value
    })
   }

  render() {
    return (
      <div>
        <strong>Your message:</strong> 
        <input type="text" name="message" id="message" onChange={event => {this.handleChange(event)} } value={this.state.message}/>
     <h1> {this.state.message}</h1>
     <p> Characters left: {this.state.maxChars - this.state.message.length}</p>
      </div>
    )
  }
}

export default TwitterMessage;
