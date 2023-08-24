import { Button, Container, Form } from "./ContactForm.styled"; 
import PropTypes from 'prop-types';

export function ContactForm({handleSubmit}) {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          // onChange={this.props.handleChange}
          type="text"
          name="name"
          // value={this.props.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <input
          id="number"
          // onChange={this.props.handleChange}
          type="tel"
          name="number"
          // value={this.props.number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    </Container>
  );
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};