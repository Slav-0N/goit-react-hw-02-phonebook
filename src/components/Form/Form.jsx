import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    id: '',
    number: '',
    name: '',
  };

  createId = () => nanoid();

  // handleChange = ({ target: { value } }) => {
  //   this.setState({ inputValue: value, id: this.createId() });
  // };

  handleChange = event => {
    // console.log(event);
    const { value, name } = event.target;
    this.setState({ [name]: value, id: this.createId() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createUser(this.state);
    this.setState({ name: '' });
  };

  render() {
    // console.log('inputValue >>>', this.state.inputValue);
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name"> Name </label>
            <input
              id="name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div>
            <label htmlFor="phone"> Number </label>
            <input
              id="phone"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              value={this.state.phoneNumber}
            />
          </div>

          <button type="submit"> Add contact </button>
        </form>
      </section>
    );
  }
}

export default Form;
