import ContactItem from 'components/ContactItem/ContactItem';
import FindName from 'components/Find/find';
import Form from 'components/Form/Form';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class UserList extends Component {
  state = {
    contacts: [],
    filter: null,
  };

  // createUser = body => {
  //   const isExistContact = this.state.contacts.find(
  //     el => el.name === body.name
  //   );
  //   if (isExistContact) return alert('Existing Contact');
  //   this.setState(prevState => {
  //     return this.state.contacts.push({
  //       ...prevState,
  //       name: body.name,
  //       id: body.id,
  //       number: body.number,
  //     });
  //   });
  // };

  createUser = body => {
    const isExistContact = this.state.contacts.find(
      el => el.name === body.name
    );

    if (isExistContact) return alert('Existing Contact');

    const newUserElement = {
      ...body,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newUserElement],
    }));
  };

  filterContacts = filterQuery => {
    this.setState(prev => ({
      filter: prev.contacts.filter(el =>
        el.name.toLowerCase().includes(filterQuery.toLowerCase())
      ),
    }));
  };

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form createUser={this.createUser} />

        <h2>Contacts</h2>
        <FindName filterContacts={this.filterContacts} />
        <ContactItem
          filter={this.state.filter}
          contacts={this.state.contacts}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default UserList;
