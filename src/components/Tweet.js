import React from 'react';
 
class Tweet extends React.Component {
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
            type="text" 
            name="message" 
            id="message" 
            onChange={this.props.handleChange}
        />
      </div>
    )
  }
}
 
export default Form;