const TOKEN_KEY = "auth-token";

const TokenStorageService = {};

TokenStorageService.logOut = () => {
   sessionStorage.clear();
};

TokenStorageService.saveToken = (token, email) => {
   sessionStorage.removeItem(TOKEN_KEY);
   sessionStorage.setItem(TOKEN_KEY, token);
   // save current user email
   sessionStorage.removeItem("email");
   sessionStorage.setItem("email", email);
};

TokenStorageService.getToken = () => {
   return sessionStorage.getItem(TOKEN_KEY);
};

TokenStorageService.getEmail = () => {
   return sessionStorage.getItem("email");
};

export default TokenStorageService;
