const TOKEN_KEY = "auth-token";

const TokenStorageService = {};

TokenStorageService.logOut = () => {
   sessionStorage.clear();
};

TokenStorageService.saveToken = (token, id, role) => {
   sessionStorage.removeItem(TOKEN_KEY);
   sessionStorage.setItem(TOKEN_KEY, token);
   // save current user id
   sessionStorage.removeItem("id");
   sessionStorage.setItem("id", id);
   // save current user role
   sessionStorage.removeItem("role");
   sessionStorage.setItem("role", role);
   console.log("saved token: " + token + ", saved userid: " + id + ", saved role: " + role)
};

TokenStorageService.getToken = () => {
   return sessionStorage.getItem(TOKEN_KEY);
};

TokenStorageService.getUser = () => {
   return sessionStorage.getItem("id");
};

TokenStorageService.getRole = () => {
   return sessionStorage.getItem("role");
};


export default TokenStorageService;
