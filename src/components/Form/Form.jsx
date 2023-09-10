import React from 'react';
import { Component } from 'react';

class Form extends Component {
  state = {
    inputValue: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  };
  render() {
    console.log('inputValue >>>', this.state.inputValue);
    return (
      <section>
        <h1>Phonebook</h1>
        <form>
          <label htmlFor="name"> Name </label>
          <input
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.inputValue}
          />

          <button type="submit"> Add contact </button>
        </form>
      </section>
    );
  }
}

export default Form;
