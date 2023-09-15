import React from 'react';

const ContactItem = ({ filter, contacts, handleDelete }) => {
  return (
    <ul>
      {(filter ?? contacts).map(el => {
        console.log(el);
        return (
          <>
            <li key={el.id}>
              {el.name}: {el.number}
            </li>
            <button onClick={() => handleDelete(el.id)}>Delete </button>
          </>
        );
      })}
    </ul>
  );
};

export default ContactItem;
