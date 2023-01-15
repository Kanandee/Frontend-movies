import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import TokenStorageService from "../../_services/TokenStorageService";
import { useState } from "react";

export default function Navbar() {
   // ocultar botones
   const [showLogin, setshowLogin] = useState(true)
   const [showLogout, setshowLogout] = useState(false)
   const onClick = () => {
      if(TokenStorageService.getToken()){
         setshowLogout(true)
         setshowLogin(false)
      }
      else{
         setshowLogout(false)
         setshowLogin(true)
      }
   }
   const Logout = () => (
      <li className="nav-item">
         <NavLink to="/logout" onClick={tokenLogout} className={setNavLinkClassName}>
            Cerrar sesión 
         </NavLink>
      </li>
   )

   const Login = () => (
      <li className="nav-item">
         <NavLink to="/login" onClick={onClick} className={setNavLinkClassName}>
            Iniciar sesión
         </NavLink>
      </li>
   )

   let activeClassName = "activeNav";

   const setNavLinkClassName = ({ isActive }) => {
      const className = [
         "nav-link",
         isActive ? activeClassName : undefined,
      ].join(" ");

      return className;
   };

   const tokenLogout = () => {
      TokenStorageService.logOut();
      onClick();
   };

   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-6">
            <div className="container">
               <a className="navbar-brand" href="/">
                  <img
                     src={logo}
                     alt=""
                     width="40"
                     height="40"
                     className="d-inline-block align-text-top"
                  />
               </a>
               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
               >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <NavLink
                           to="/movies"
                           className={setNavLinkClassName}
                           end
                        >
                           Películas
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/about" className={setNavLinkClassName}>
                           Sobre Nosotros
                        </NavLink>
                     </li>
                  </ul>
                  <form className="d-flex">
                     <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Buscar"
                        aria-label="Search"
                     />
                     <button className="btn btn-outline-light" type="submit">
                        Buscar
                     </button>
                  </form>
                  <ul className="navbar-nav navbar-right  me-auto mb-2 mb-lg-0">
                     { showLogin ? <Login /> : null}
                     { showLogout ? <Logout /> : null}
                     <li className="nav-item">
                        <NavLink to="/register" className={setNavLinkClassName}>
                           Registro 
                        </NavLink>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
}
