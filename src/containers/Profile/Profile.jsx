import React, { useEffect, useState } from "react";
import UserService from "../../_services/UserService";
import TokenStorageService from "../../_services/TokenStorageService";
import { Navigate, useNavigate } from "react-router-dom";

export default function Profile() {
   const token = TokenStorageService.getToken();
   const email = TokenStorageService.getEmail();
   const [user, setUser] = useState([]);

   useEffect(() => {
      getUserInfo(token);
   }, []);

   // functions definition
   const getUserInfo = async () => {
      try {
         const res = await UserService.getUserInfo(token, email);
       
         setUser(res.data.results);
      } catch (error) {
         console.log(error.message || error);
      }
   };

   return (
      <div className="container pt-5">
         <h2 className="fw-bold">Información del usuario</h2>

         <div>
               <div key={user._id}>
                {user.name}
                <br />
                {user.email}
               </div>
         </div>

      </div>
   );
}
