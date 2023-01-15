import React, { useEffect, useState } from "react";
import UserService from "../../_services/UserService";
import TokenStorageService from "../../_services/TokenStorageService";
import ShoppingStorageService from "../../_services/ShoppingStorageService";
import { Navigate, useNavigate } from "react-router-dom";

export default function ShoppingCart() {
   const token = TokenStorageService.getToken();
   let items = []

   useEffect(() => {
      getShoppingCart();
   }, []);

   // functions definition
   function getShoppingCart (){
      try {
        items = ShoppingStorageService.getallItems();
       
      } catch (error) {
         console.log(error.message || error);
      }
   };

   return (
      <div className="container pt-5">
         <h2 className="fw-bold">Películas alquiladas</h2>

         <div>
               <h1>{items}</h1>
         </div>

      </div>
   );
}

 