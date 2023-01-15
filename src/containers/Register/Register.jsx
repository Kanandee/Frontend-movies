import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../_services/AuthService";
import TokenStorageService from "../../_services/TokenStorageService";
import { validateLoginFormValues } from "../../_helpers/form-utilities";
import "./Register.scss";

export default function Register() {
   const initialValues = {
      email: "",
      password: "",
      name: "",
   };
   // hooks
   const navigate = useNavigate();

   const [formValues, setFormValues] = useState(initialValues);
   const [formErrors, setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);

   const user = {
    email: formValues.email,
    password: formValues.password,
    name: formValues.name
 };

   useEffect(() => {   
      // verificar que no hay error
      if (Object.keys(formErrors).length == 0 && isSubmit) {
         console.log("REGISTER...");
         register(user);
      }
      console.log("useEffect", formErrors);
   }, [formErrors]);

   const register = async (user) => {
      try {
         const res = await AuthService.register(user);
         console.log(res.data);
         navigate("/login");
      } catch (error) {
         console.log(error);
      }
   };

   // handlers
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
         ...formValues,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("submit");
      setFormErrors(validateLoginFormValues(formValues));
      console.log("handle", formErrors);
      setIsSubmit(true);
   };

   return (
      <div>
         <div className="container pt-5 col-lg-3">
            <h2>Registro</h2>

            <form className="text-start" noValidate onSubmit={handleSubmit}>
            <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                     type="name"
                     name="name"
                     className="form-control"
                     value={formValues.name}
                     onChange={handleChange}
                  />
                  <div className="form-text form-text-error">
                     {formErrors.name}
                  </div>
               </div>
               <div className="mb-3">
                  <label className="form-label">Dirección de correo</label>
                  <input
                     type="email"
                     name="email"
                     className="form-control"
                     value={formValues.email}
                     onChange={handleChange}
                  />
                  <div className="form-text form-text-error">
                     {formErrors.email}
                  </div>
               </div>
               <div className="mb-3">
                  <label className="form-label">Contraseña</label>
                  <input
                     type="password"
                     name="password"
                     className="form-control"
                     value={formValues.password}
                     onChange={handleChange}
                  />
                  <div className="form-text form-text-error">
                     {formErrors.password}
                  </div>
               </div>
               <div className="d-grid gap-2">
                  <button onClick={() => register(user)}
                     type="submit"
                     className="btn btn-primary text-white fw-bold"
                  >
                     Confirmar
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}
