import React from "react";
import PropTypes from "prop-types";
import "./ItemShop.scss";
import { useDispatch } from "react-redux";
import { environment } from "../../_environmets/environment";
import { removeMovies } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

function ItemShop({ movie }) {
   const dispatch = useDispatch();

   // handlers
   const removeItem = (movie) => {
      dispatch(removeMovies(movie));
      navigate(`/cart`);
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

ItemShop.propTypes = {
   name: PropTypes.object.isRequired,
};

export default ItemShop;
