import { CircularProgress } from '@mui/material';
import { useContext, useEffect } from 'react';
import { ContactListContext } from '../../context/contactList';
import useContactList from '../../hooks/useContactList';

const ContactList = () => {
  const { getContactList } = useContactList();
  const { contactList } = useContext(ContactListContext);

  useEffect(() => {
    getContactList();
  }, [getContactList]);

  return (
    <ul>
      {contactList.length ? (
        contactList.map((item) => <li key={item.id}>{item.Name}</li>)
      ) : (
        <CircularProgress />
      )}
    </ul>
  );
};

export default ContactList;
