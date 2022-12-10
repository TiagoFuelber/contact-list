import { createContext, useState } from 'react';

export const ContactListContext = createContext(undefined);

export const ContactListProvider = ({ children }) => {
  const [contactList, setContactList] = useState([]);

  return (
    <ContactListContext.Provider value={{ contactList, setContactList }}>
      {children}
    </ContactListContext.Provider>
  );
};
