import React, { useEffect, useState } from "react";
import MovieService from "../../_services/MovieService";
import "./MovieList.scss";

import Movie from "../../components/Movie/Movie";
import NavPage from "../../components/NavPage/NavPage";
import { useSelector } from "react-redux";

export default function MovieList() {
   // state
   const [movies, setMovies] = useState([]);
   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

   useEffect(() => {
      getAllMovies();
   }, []);

   // functions definition
   const getAllMovies = async () => {
      try {
         const res = await MovieService.getAllMovies();
         setMovies(res.data.results);
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
       
      );
   } else{
      return (
         <div className="movie-list">
            <div className="container pt-5 pb-5">
               <h1 className="h1  mb-5 ">Películas</h1>

               <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
                  {movies.length > 0 &&
                     movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
               </div>
            </div>
         </div>
      );
   }
}
