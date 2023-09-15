import React from 'react';
import Contacts from './ContactItem.syled';
const ContactItem = ({ filter, contacts, handleDelete }) => {
  return (
    <Contacts>
      {(filter ?? contacts).map(el => {
        return (
          <li key={el.id}>
            {el.name}: {el.number}
            <button onClick={() => handleDelete(el.id)}>Delete</button>
          </li>
        );
      })}
    </Contacts>
  );
};

export default ContactItem;
