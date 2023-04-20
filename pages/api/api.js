
import axios from 'axios';

const url = "http://localhost:3000/api"


export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export async function login(username, password) {
  const res = await axios.post(`${url}/login`, {
    username: username,
    password: password
  });
  return res.data;
}

export async function signup(form) {
  const res = await axios.post(`${url}/users`, form);
  return res.data;
}


export async function fetchSingleEvent(id){
  const res = await axios.get(
      `${url}/events/${id}`
  );
  
  return res.data;
};


export async function registerEvent(event_id, user_id){
  const res = await axios.post(`${url}/eventRegistrations`,
  {
      "event": {
        "id": "string"
      },
      "user": {
        "id": "string"
      }
  }
  );
  
  return res.data;
}

