import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import ContactList from "./Components/ContactList";
import ContactDetails from "./Components/ContactDetails";
import { v4 as uuidv4 } from "uuid";
import api from '../src/api/contacts';

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";

  const retreivedContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  // Load contacts from localStorage on initial render
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  // Add new contact
  const addContactHandler = (contact) => {
    const newContact = { id: uuidv4(), ...contact };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  // Remove contact by ID
  const removeContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  // useEffect(()=>{
  //     const getAllContacts = async() = {
  //       const allContacts = await retreivedContacts();
  //       if(allContacts) setContacts(allContacts);
  //     };

  //     getAllContacts();
  // },[]);

  // Store contacts in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Router>
      <Routes>
        <Route path="/add" element={<Header addContactHandler={addContactHandler} />} />
        <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContact} />} />
        <Route path="/contact/:id" element={<ContactDetails />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
