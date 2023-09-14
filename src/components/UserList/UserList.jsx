import FindName from 'components/Form/Find/find';
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

  render() {
    return (
      <>
        <div>
          <h2>Phonebook</h2>
          <Form createUser={this.createUser} />
          <h2>Contacts</h2>
          <FindName filterContacts={this.filterContacts} />
          <ul>
            {(this.state.filter ?? this.state.contacts).map(el => {
              console.log(el);
              return (
                <li key={el.id}>
                  {el.name}: {el.number}
                </li>
              );
            })}
            {console.log('state--->>>', this.state.contacts)}
          </ul>
        </div>
      </>
    );
  }
}

export default UserList;
