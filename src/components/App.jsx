import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
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
  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    let contact = {
      id: nanoid(),
      name: data.getAll('name')[0],
      number: data.getAll('number')[0],
    };
    if (
      !this.state.contacts.find(
        ({ name }) =>
          name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
      )
    ) {
      let contacts = this.state.contacts.push(contact);
      this.setState(prevState => [...prevState.contacts, contacts]);
      e.target.reset();
      return;
    } else {
      window.alert('This name is already in the list');
      return;
    }
  };
  filteredContacts = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
  };
  removeItem = (e) => {
    const index = this.state.contacts.findIndex(obj => (obj.id === e.target.id))
    const contacts = this.filteredContacts();
    contacts.splice(index, 1)
    this.setState({contacts})
  }
  render() {
    return (
      <Container>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm
          // name={this.state.name}
          // number={this.state.number}
          // handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleChange={this.handleChange} />
        <ContactList contacts={this.filteredContacts()} removeItem={this.removeItem} />
      </Container>
    );
  }
}
