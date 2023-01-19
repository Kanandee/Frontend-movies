import React, { useEffect, useState } from "react";
import UserService from "../../_services/UserService";
import TokenStorageService from "../../_services/TokenStorageService";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Admin() {
   const navigate = useNavigate();
   const token = TokenStorageService.getToken();
   const [users, setUsers] = useState([]);
   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


   useEffect(() => {
      getAllUsers(token);
   }, []);

   // functions definition
   const getAllUsers = async () => {
      try {
         const res = await UserService.getAllUsers(token);
         setUsers(res.data.results);
      } catch (error) {
         console.log(error.message || error);
      }
   };

   const handleLogout = () => {
      TokenStorageService.logOut();
      navigate("/");
   };
   if(!isLoggedIn){
      return(
         <div>
            <div class="alert alert-danger" role="alert">
            ¡No estás logeado!
            </div>
            <img src="src\assets\no-puedes.gif" alt="this slowpoke moves"/>
         </div>
       
      );}
    else{
      return (
         <div>
            <h2>Admin panel</h2>

            <div>
               {users.map((user) => (
                  <div key={user._id}>{user.name}</div>
               ))}
            </div>

            <button onClick={handleLogout}>Logout </button>
         </div>
      );
   }
}
