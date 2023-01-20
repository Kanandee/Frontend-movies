import React from "react";
import PropTypes from "prop-types";
import TokenStorageService from "../../_services/TokenStorageService";
import AdminMovie from "../AdminMovie/AdminMovie";
import UserService from "../../_services/UserService";

function UserInfo({ user}) {

   const token = TokenStorageService.getToken();

   // handlers
   const removeUser = (user) => {
      UserService.removeUser(token, user._id)
      console.log("user removed " + user)
   };

   if(user._id != TokenStorageService.getUser()){
      return (
         <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
               <div class="fw-bold">{user.name}</div>
               {user.email}
               <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
                  {user.movies.length > 0 &&
                     user.movies.map((movie) => <AdminMovie movie={movie} />)}
               </div>
            </div>
            <span class="badge bg-danger rounded-pill" type="submit" onClick={() => removeUser(user)}>Eliminar</span>
         </li>
      );
   }
}

UserInfo.propTypes = {
   user: PropTypes.object.isRequired,
};

export default UserInfo;
