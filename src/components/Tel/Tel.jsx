import React from 'react';
import { Component } from 'react';

class TelInput extends Component {
  state = { phoneNumber: '' };

  handleChangePhoneNum = ({ target: { value } }) => {
    this.setState({ phoneNumber: value });
  };

  render() {
    return (
      <div>
        <label htmlFor="phone"> Name </label>
        <input
          id="phone"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChangePhoneNum}
          value={this.state.phoneNumber}
        />
      </div>
    );
  }
}

export default TelInput;
