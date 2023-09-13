import Form from 'components/Form/Form';
import { Component } from 'react';

class UserList extends Component {
  state = {
    contacts: [],
    name: '',
  };

  createUser = body => {
    this.setState(prevState => {
      return this.state.contacts.push({ ...prevState, name: body.inputValue });
    });
  };

  render() {
    return (
      <div>
        <Form createUser={this.createUser} />
        <ul>
          {' '}
          <h1>Contacts</h1>
          {this.state.contacts.map(el => {
            return <li>{el.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default UserList;
