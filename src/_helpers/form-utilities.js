export const validateLoginFormValues = (formValues) => {
   const errors = {};

   const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

   //email
   if (!formValues.email) {
      errors.email = "Se necesita un correo electrónico.";
   } else if (!emailPattern.test(formValues.email)) {
      errors.email = "Formato de correo no válido.";
   }

   //password
   if (!formValues.password) {
      errors.password = "Se requiere una contraseña.";
   } else if (formValues.password.length < 6) {
      errors.password = "Se requiere una contraseña de más de 6 carácteres.";
   }

   return errors;
};
