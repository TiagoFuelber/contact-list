const KEYS = {
  REFESH_TOKEN: 'refresh_token',
};

const login = () => {
  window.location.href = `${process.env.BASE_URL}?response_type=token&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&scopes=chatter_api`;
};

const isLoggedIn = () => {
  return !!sessionStorage.getItem(KEYS.REFESH_TOKEN);
};

const setLoggedIn = (refresh_token) =>
  sessionStorage.setItem(KEYS.REFESH_TOKEN, refresh_token);

export { login, isLoggedIn, setLoggedIn };
