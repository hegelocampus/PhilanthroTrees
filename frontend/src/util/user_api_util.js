import axios from "axios";

export const fetchUser = userId => {
  return axios.get(`/api/users/${ userId }`);
};

//export const login = userData => {
//  return axios.get("/api/users/login", userData);
//};

export const userUpdate = (user) => {
  return axios.patch(`/api/users/${user.id}`, user);
}
