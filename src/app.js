import React, { Component } from 'react';
import './sass/main.scss';
import Contact from './Components/Contact';
import Filter from './Components/Filter';
import InputForm from './Components/InputForm';
import { v1 as uuidv1 } from 'uuid';
let key = '';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', nam: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', nam: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', nam: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', nam: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }

  handleDelete = key => {
    const newContacts = this.state.contacts.filter(el => el.id !== key);
    this.setState({ contacts: newContacts });
  };

  getKey = () => {
    return (key = uuidv1());
  };

  checkContact = (array, name) => {
    return array.find(element => element.nam === name);
  };

  handleFilter = valueToFind => {
    this.setState({ filter: valueToFind });
  };
  handleSubmit = (event, name, number) => {
    this.getKey();
    event.preventDefault();
    if (this.checkContact(this.state.contacts, name) === undefined) {
      if (name !== '' && number !== '') {
        this.setState({
          contacts: [
            ...this.state.contacts,
            { nam: name, id: key, number: number },
          ],
        });
      }
    } else return alert(name + ' is already exist!');
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <InputForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} />
        <Contact
          deleteCon={this.handleDelete}
          contacts={this.state.contacts}
          filterValue={this.state.filter}
        />
      </div>
    );
  }
}

export default App;
