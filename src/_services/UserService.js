import axios from "axios";
import { environment } from "../_environmets/environment";

const UserService = {};

UserService.getAllUsers = async (token) => {
   const apiUrl = environment.BASE_API_URL + "/users";

   const config = {
      headers: { Authorization: `Bearer ${token}` },
   };

   return await axios.get(apiUrl, config);
};

UserService.getUserInfo = async (token, id) => {
   const apiUrl = environment.BASE_API_URL + "/users/" + id;

   const config = {
      headers: { Authorization: `Bearer ${token}` },
   };

   return await axios.get(apiUrl, config);
};


UserService.rentAll = async (token, id, movies) => {
   const apiUrl = environment.BASE_API_URL + "/users/" + id + "/rent";

   const config = {
      headers: { Authorization: `Bearer ${token}` },
   };

   const body = { "movies": movies };

   return await axios.post(apiUrl, body, config);
};

UserService.removeRentMovie = async (token, id, movie) => {
   const apiUrl = environment.BASE_API_URL + "/users/" + id + "/delete/" + movie;

   const config = {
      headers: { Authorization: `Bearer ${token}` },
   };

   return await axios.get(apiUrl, config);
};

UserService.removeUser = async (token, id) => {
   const apiUrl = environment.BASE_API_URL + "/users/" + id + "/delete";

   const config = {
      headers: { Authorization: `Bearer ${token}` },
   };

   return await axios.get(apiUrl, config);
};

export default UserService;
