import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContact = (id) => {
    props.getContactId(id);
  };

  return (
    <div className="text-center">
      <hr className="container" />
      <h2>Contact List</h2>

      {/* ✅ Corrected Link usage */}
      <Link to="/add">
        <button type="button" className="btn btn-primary">Add Contact</button>
      </Link>

      {/* ✅ Use contacts from props, not hardcoded data */}
      {props.contacts.length > 0 ? (
        props.contacts.map((contact) => (
          <ContactCard
            contacts={contact}
            clickHandler={() => deleteContact(contact.id)}
            key={contact.id}
          />
        ))
      ) : (
        <p className="text-muted mt-3">No contacts available. Add one!</p>
      )}
    </div>
  );
};

export default ContactList;
