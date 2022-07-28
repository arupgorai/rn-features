const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Register user
const getUsers = async () => {
  const jsonResp = await fetch(API_URL);
  const response = await jsonResp.json();
  return response;
};

const userService = {getUsers};

export default userService;
