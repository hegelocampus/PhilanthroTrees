import axios from "axios";

export const fetchUser = userId => axios
  .get(`/api/users/${ userId }`);

//export const login = userData => {
//  return axios.get("/api/users/login", userData);
//};

export const updateUser = (user) => axios
  .patch(`/api/users/${user.id}`, user);

export const userInvite = (emailAddress, pendingInvite) => axios
  .patch(`/api/users/invite/${emailAddress}`, pendingInvite);

