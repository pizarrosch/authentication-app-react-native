import axios from "axios";

const API_KEY = 'AIzaSyAaPydZh9JO7QlYJ5V3xp1D_V-mmjvHtVQ'

export async function createUser(email, password) {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
  );
}