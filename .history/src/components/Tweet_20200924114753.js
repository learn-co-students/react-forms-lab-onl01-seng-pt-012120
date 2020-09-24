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
        <form>
          <input
            type="text"
            name="firstName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            name="lastName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.lastName} />
        </form>
      </div>
    )
  }
}
 
export default Form;