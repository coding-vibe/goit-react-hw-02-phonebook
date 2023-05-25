import React from 'react';
import PropTypes from "prop-types";
import { Button} from './ContactList.styled.js';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>{contacts.map(({id, name, number}) => (
          <li key={id}>
              <p>{name}: {number}</p>
              <Button
                  type='button'
                  onClick={() => onDeleteContact(id)}>Delete</Button>
          </li>
      ))}
          </ul>
      </div>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

export default ContactList;