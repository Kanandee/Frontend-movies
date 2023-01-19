import React, { useEffect, useState } from "react";
import UserService from "../../_services/UserService";
import TokenStorageService from "../../_services/TokenStorageService";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MovieRent from "../../components/MovieRent/MovieRent";

export default function Profile() {
   const token = TokenStorageService.getToken();
   const id = TokenStorageService.getUser();
   const [movies, setMovies] = useState([]);
   const [user, setUser] = useState([]);
   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

   useEffect(() => {
      getUserInfo(token);
   }, []);

   // functions definition
   const getUserInfo = async () => {
      try {
         const res = await UserService.getUserInfo(token, id);
         setUser(res.data.results);
         setMovies(res.data.results.movies);
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
         <h2 className="fw-bold">Información del usuario</h2>

         <div>
               <div key={user._id}>
                {user.name}
                <br />
                {user.email}
                <br />
                <br />
                  <div className="container pt-5">
                     <h2 className="fw-bold">Películas alquiladas</h2>
                  </div>
                  <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
                  {movies.length > 0 &&
                     movies.map((movie) => <MovieRent movie={movie} />)}
               </div>
               </div>
            
         </div>
      </div>

      
   );
   }
}
