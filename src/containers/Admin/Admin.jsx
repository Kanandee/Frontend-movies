import React, { useEffect, useState } from "react";
import UserService from "../../_services/UserService";
import TokenStorageService from "../../_services/TokenStorageService";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserInfo from "../../components/UserInfo/UserInfo";

export default function Admin() {
   const navigate = useNavigate();
   const token = TokenStorageService.getToken();
   const [users, setUsers] = useState([]);
   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


   useEffect(() => {
      getAllUsers(token);
   }, [users]);

   // functions definition
   const getAllUsers = async () => {
      try {
         const res = await UserService.getAllUsers(token);
         setUsers(res.data.results);
      } catch (error) {
         console.log(error.message || error);
      }
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
            <h2>Panel de administración</h2>

            <ol class="list-group">
                  {users.length > 0 &&
                     users.map((user) => <UserInfo user={user} />)}
               </ol>
         </div>
      );
   }
}
