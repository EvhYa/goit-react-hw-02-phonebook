import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
// import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = contact => {
    const isExist = this.state.contacts.find(
      ({ name }) =>
        name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
    );
    if (isExist) {
      window.alert('This name is already in the list');
      return;
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  filteredContacts = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
  };

  removeItem = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const items = this.filteredContacts();
    return (
      <Container>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleChange={this.handleChange} />
        <ContactList contacts={items} removeItem={this.removeItem} />
      </Container>
    );
  }
}
