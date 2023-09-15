import React from 'react';

const ContactItem = ({ filter, contacts, handleDelete }) => {
  console.log(contacts);

  return (
    <ul>
      {(filter ?? contacts).map(el => {
        console.log(el);
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
