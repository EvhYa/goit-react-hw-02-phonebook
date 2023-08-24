import { Container, List } from "./ContactList.styled";

export function ContactList({ contacts, removeItem}) {
  return (
    <Container>
      {contacts.length ? (
        <List>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name} tel: {number}
              <button id={id} type="button" onClick={removeItem}>Delete</button>
            </li>
          ))}
        </List>
      ) : (
        <p>Contact is not found</p>
      )}
    </Container>
  );
}
