import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemShop from "../../components/ItemShop/ItemShop";

export default function ShoppingCart() {
   const movies = useSelector((state) => state.auth.movies);

   return (
      <div className="container pt-5">
         <h2 className="fw-bold">Películas alquiladas</h2>

         <div>
         <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
               {movies.length > 0 &&
                  movies.map((movie) => <ItemShop movie={movie} />)}
            </div>
         </div>

      </div>
   );
}

 