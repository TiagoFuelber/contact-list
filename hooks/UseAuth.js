import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as AuthService from '../services/AuthService';
import hashToObj from '../utils/hasToObj';

const useAuth = () => {
  const { asPath, push } = useRouter();

  const redoLogin = () => {
    AuthService.redoLogin();
  };

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
        AuthService.setRefreshToken(auth.refresh_token);
        AuthService.setAccessToken(auth.access_token);
        push('/');
      }
    }
  }, [asPath, push]);

  return { redoLogin };
};

export default useAuth;
