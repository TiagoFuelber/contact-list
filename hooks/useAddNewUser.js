import { ERROR_CODES } from '../constants';
import * as UserService from '../services/UserService';
import useAuth from './useAuth';
import useContactList from './useContactList';
import { useSnackBarContext } from './useSnackBar';

const useAddNewUser = () => {
  const { redoLogin } = useAuth();
  const { getContactList } = useContactList();
  const { createSnackBar } = useSnackBarContext();

  const addNewUser = async (user) => {
    try {
      const { success } = await UserService.addUser(user);
      getContactList();
      return success;
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

  return addNewUser;
};

export default useAddNewUser;
