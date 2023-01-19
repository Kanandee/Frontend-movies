import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ItemShop from "../../components/ItemShop/ItemShop";
import UserService from "../../_services/UserService";
import TokenStorageService from "../../_services/TokenStorageService";
import { useDispatch } from "react-redux";
import { clearMovies } from "../../redux/authSlice";

export default function ShoppingCart() {
   const dispatch = useDispatch();
   const movies = useSelector((state) => state.auth.movies);
   const id = TokenStorageService.getUser();
   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
   const token = TokenStorageService.getToken();
   const navigate = useNavigate();

   // functions definition
   const confirmRent = async () => {
      try {
         await UserService.rentAll(token, id, movies);
         dispatch(clearMovies());
         navigate("/profile"); 
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
         <div className="container pt-5">
            <h2 className="fw-bold">Películas alquiladas</h2>

            <div>
            <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
                  {movies.length > 0 &&
                     movies.map((movie) => <ItemShop movie={movie} />)}
               </div>
            </div>
            <button onClick={confirmRent} type="submit" class="btn btn-outline-success">Confirmar alquiler</button>
         </div>
      );
   }
}

 