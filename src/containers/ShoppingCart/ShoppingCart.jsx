import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ShoppingCart() {
   const items = useSelector((state) => state.auth.movies);

   return (
      <div className="container pt-5">
         <h2 className="fw-bold">Películas alquiladas</h2>

         <div>
               <p>{ items }</p>
         </div>

      </div>
   );
}

 