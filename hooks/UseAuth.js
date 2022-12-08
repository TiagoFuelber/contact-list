import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as AuthService from '../services/AuthService';
import hashToObj from '../utils/hasToObj';

const useAuth = () => {
  const { asPath, push } = useRouter();

  const doLogin = () => {
    AuthService.login();
  };

  useEffect(() => {
    const hash = asPath.split('#')[1];
    if (!AuthService.isLoggedIn() && !hash) {
      doLogin();
    } else if (hash) {
      const auth = hashToObj(hash);
      if (auth.refresh_token) {
        AuthService.setLoggedIn(auth.refresh_token);
        push('/');
      }
    }
  }, [asPath, push]);

  return null;
};

export default useAuth;
