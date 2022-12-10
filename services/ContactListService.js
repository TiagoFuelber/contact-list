import axios from './axios';

const getList = async () => {
  const { data } = await axios.get(`/query/?q=SELECT+name+from+Account`);
  return data;
};

export { getList };
