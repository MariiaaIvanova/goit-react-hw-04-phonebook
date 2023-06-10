import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Form, InputBlock, InputLabel, Input, Button } from './ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleNameChange = event => {
    setName(event.currentTarget.value)
  };
  const handleNumberChange = event => {
    setNumber(event.currentTarget.value)
  };


const handleSubmit = event => {
   event.preventDefault();
   onSubmit({
      name,
      number,
    });
 
  };

    return (
      <Form onSubmit={handleSubmit}>
        <InputBlock>
          <InputLabel htmlFor={nameInputId}>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleNameChange}
              id={nameInputId}
              placeholder="Name"
            />
          </InputLabel>

          <InputLabel htmlFor={numberInputId}>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleNumberChange}
              id={numberInputId}
              placeholder="+0-00-00-00"
            />
          </InputLabel>
        </InputBlock>

        <Button type="submit">Add contact</Button>
      </Form>
    );
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};

