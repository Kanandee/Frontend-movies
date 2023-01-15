
const ShoppingStorageService = {};

ShoppingStorageService.clear = () => {
   sessionStorage.clear();
};

ShoppingStorageService.addItem = (id, item) => {
   sessionStorage.setItem(id, item);
};

ShoppingStorageService.getItem = (id) => {
   return sessionStorage.getItem(id);
};

ShoppingStorageService.getallItems = () => {
    const items = []
    Object.keys(sessionStorage).forEach((key) => {
        items[key] = sessionStorage.getItem(key)
    })

    return items;
 };

ShoppingStorageService.removeItem = (id) => {
    return sessionStorage.removeItem(id);
 };

export default ShoppingStorageService;
