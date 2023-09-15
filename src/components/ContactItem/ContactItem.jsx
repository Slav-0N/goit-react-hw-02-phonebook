import React from 'react';

const ContactItem = ({ filter, contacts, handleDelete }) => {
  return (
    <ul>
      {(filter ?? contacts).map(el => {
        return (
          <li key={el.id}>
            {el.name}: {el.number}
            <button onClick={() => handleDelete(el.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactItem;
