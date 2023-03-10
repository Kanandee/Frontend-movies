import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import TokenStorageService from "../../_services/TokenStorageService";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import UserService from "../../_services/UserService";


export default function Navbar() {

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
   const role = TokenStorageService.getRole();
   const user = useSelector((state) => state.auth.user);
   const [userinfo, setUser] = useState([]);
   const token = TokenStorageService.getToken();
   const id = TokenStorageService.getUser();
   
   useEffect(() => {
      getUserInfo(token, userinfo, id);
   }, [userinfo, token, id]);

   // functions definition
   const getUserInfo = async () => {
      try {
         const res = await UserService.getUserInfo(token, id);
         setUser(res.data.results);
      } catch (error) {
         console.log(error.message || error);
      }
   };

   // mostrar u ocultar botones
   const showUserName = () => {
      if(isLoggedIn){
         return( <li className="nav-item">
         <NavLink className={setNavLinkClassName}>
           {userinfo.name}
         </NavLink>
      </li>   
      );
      }
   }

   // mostrar u ocultar botones
   const showLoginButtons = () => {
      if(isLoggedIn){
         return( <li className="nav-item">
         <NavLink to="/logout" onClick={tokenLogout} className={setNavLinkClassName}>
            Cerrar sesión
         </NavLink>
      </li>);
      } else {
         return( <li className="nav-item">
         <NavLink to="/login" className={setNavLinkClassName}>
            Iniciar sesión
         </NavLink>
      </li>);
      }
   }

   // mostrar u ocultar botones
    const showShoppingButtons = () => {
      if(isLoggedIn){
         return( <li className="nav-item">
         <NavLink to="/cart" className={setNavLinkClassName}>
         🛒
         </NavLink>
      </li>);
      }
   }

   // mostrar u ocultar botones
   const showProfileButtons = () => {
      if(isLoggedIn){
         return( <li className="nav-item">
         <NavLink to="/profile" className={setNavLinkClassName}>
         Mi Perfil
         </NavLink>
      </li>);
      }
   }

   // mostrar u ocultar botones
   const showRegisterButtons = () => {
      if(!isLoggedIn){
         return( <li className="nav-item">
         <NavLink to="/register" className={setNavLinkClassName}>
            Registro 
         </NavLink>
      </li>);
      }
   }

   
   // mostrar u ocultar botones
   const showMoviesButtons = () => {
      if(isLoggedIn){
         return( <li className="nav-item">
         <NavLink
            to="/movies"
            className={setNavLinkClassName}
            end
         >
            Películas
         </NavLink>
      </li>);
      }
   }

    
   // mostrar u ocultar botones
   const showAdminButtons = () => {
      if(isLoggedIn && role!="user"){
         return( <li className="nav-item">
         <NavLink
            to="/admin"
            className={setNavLinkClassName}
            end
         >
            Panel de Admin
         </NavLink>
      </li>);
      }
   }




   // accion de logout
   const tokenLogout = () => {
      TokenStorageService.logOut();
      dispatch(logout());
      navigate('/');
   };

   let activeClassName = "activeNav";

   const setNavLinkClassName = ({ isActive }) => {
      const className = [
         "nav-link",
         isActive ? activeClassName : undefined,
      ].join(" ");

      return className;
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
                        <NavLink to="/about" className={setNavLinkClassName}>
                           Sobre Nosotros
                        </NavLink>
                     </li>
                     {showMoviesButtons()}
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
                     {showLoginButtons()}
                     {showRegisterButtons()}
                     {showProfileButtons()}
                     {showAdminButtons()}
                     {showShoppingButtons()}
                     {showUserName()}
                     <div> 
                     </div>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
}
