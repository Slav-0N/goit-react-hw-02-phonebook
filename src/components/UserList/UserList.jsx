import FindName from 'components/Find/find';
import Form from 'components/Form/Form';
import { Component } from 'react';

class UserList extends Component {
  state = {
    contacts: [],
    filter: null,
  };

  createUser = body => {
    const isExistContact = this.state.contacts.find(
      el => el.name === body.name
    );
    if (isExistContact) return alert('Existing Contact');
    this.setState(prevState => {
      return this.state.contacts.push({
        ...prevState,
        name: body.name,
        id: body.id,
        number: body.number,
      });
    });
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
      <>
        <div>
          <h1>Phonebook</h1>
          <Form createUser={this.createUser} />

          <h2>Contacts</h2>
          <FindName filterContacts={this.filterContacts} />
          <ul>
            {(this.state.filter ?? this.state.contacts).map(el => {
              console.log(el);
              return (
                <>
                  <li key={el.id}>
                    {el.name}: {el.number}
                  </li>
                  <button onClick={() => this.handleDelete(el.id)}>
                    Delete{' '}
                  </button>
                </>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default UserList;
