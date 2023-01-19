import React from "react";
import PropTypes from "prop-types";
import UserService from "../../_services/UserService";
import TokenStorageService from "../../_services/TokenStorageService";

function MovieRent({ movie }) {

   const id = TokenStorageService.getUser();
   const token = TokenStorageService.getToken();

   // handlers
   const removeItem = (movie) => {
      UserService.removeRentMovie(token, id, movie)
      console.log("movie removed " + movie)
   };

   return (
      <div className="">
         <div class="list-group">
            <a class="list-group-item list-group-item-action active" aria-current="true">
               <div class="d-flex w-100 justify-content-between">
               </div>
               <p class="mb-1">{movie} <button type="submit" onClick={() => removeItem(movie)} class="btn btn-outline-danger">X</button></p>
            </a> 
         </div>
      </div>
   );
}

MovieRent.propTypes = {
   movie: PropTypes.object.isRequired,
};

export default MovieRent;
