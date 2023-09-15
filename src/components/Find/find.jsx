import React from 'react';
import FindSection from './Fnd.styled';

const FindName = ({ filterContacts }) => {
  const handleChange = ({ target: { value } }) => {
    filterContacts(value);
  };
  return (
    <FindSection>
      <label htmlFor="search"> Find </label>
      <input
        id="search"
        type="text"
        name="search"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Search name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
    </FindSection>
  );
};

export default FindName;