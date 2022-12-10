import axios from './axios';

const addUser = async (user) => {
  const { data } = await axios.post(`/sobjects/Account/`, { Name: user.name });

  return data;
};

export { addUser };
