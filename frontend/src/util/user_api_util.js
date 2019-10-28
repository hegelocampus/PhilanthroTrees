import axios from "axios";

export const fetchUser = userId => {
  return axios.get(`/api/users/${ userId }`);
};

//export const login = userData => {
//  return axios.get("/api/users/login", userData);
//};

export const updateUser = (user) => {
  return axios.patch(`/api/users/${user.id}`, user);
}

export const userInvite = (emailAddress, pendingInvite) =>{
  return axios.patch(`/api/users/invite/${emailAddress}`, pendingInvite);
}
