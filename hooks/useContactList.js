import { useContext } from 'react';
import { ERROR_CODES } from '../constants';
import { ContactListContext } from '../context/contactList';
import * as ContactListService from '../services/ContactListService';
import useAuth from './useAuth';
import { useSnackBarContext } from './useSnackBar';

const useContactList = () => {
  const { setContactList } = useContext(ContactListContext);
  const { redoLogin } = useAuth();
  const { createSnackBar } = useSnackBarContext();

  const getContactList = async () => {
    try {
      const { records } = await ContactListService.getList();
      const list = records.map((record) => ({
        id: record.attributes.url,
        Name: record.Name,
      }));
      setContactList(list);
    } catch (error) {
      const { message, errorCode } = error?.response?.data[0];
      createSnackBar({
        content: message,
        severity: 'error',
      });
      if (errorCode === ERROR_CODES.INVALID_SESSION_ID) {
        redoLogin();
      }
    }
  };

  return { getContactList };
};

export default useContactList;
