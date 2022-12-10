const KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFESH_TOKEN: 'refresh_token',
};

const redoLogin = () => {
  sessionStorage.clear();
  login();
};

const login = () => {
  window.location.href = `${process.env.LOGIN_BASE_URL}?response_type=token&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&scopes=chatter_api`;
};

const isLoggedIn = () => {
  return !!sessionStorage.getItem(KEYS.REFESH_TOKEN);
};

const setRefreshToken = (refresh_token) =>
  sessionStorage.setItem(KEYS.REFESH_TOKEN, refresh_token);

const setAccessToken = (accessToken) =>
  sessionStorage.setItem(KEYS.ACCESS_TOKEN, accessToken);

const getAccessToken = () => sessionStorage.getItem(KEYS.ACCESS_TOKEN);

export {
  login,
  isLoggedIn,
  setRefreshToken,
  getAccessToken,
  setAccessToken,
  redoLogin,
};
