// offline-cart.js

export function saveCartToOfflineStorage(product) {
    const offlineCart = JSON.parse(localStorage.getItem("offlineCart")) || [];
    offlineCart.push(product);
    localStorage.setItem("offlineCart", JSON.stringify(offlineCart));
    console.log("OfflineCart-a yazıldı:", product);
  }
  
  export function addProductSmart(product, dispatch, addToBasket) {
    if (navigator.onLine) {
      dispatch(addToBasket(product));
    } else {
      saveCartToOfflineStorage(product);
    }
  }
  
  export function setupOfflineCartSync(dispatch, addToBasket) {
    window.addEventListener("online", () => {
      const offlineCart = JSON.parse(localStorage.getItem("offlineCart"));
      if (offlineCart && offlineCart.length > 0) {
        offlineCart.forEach((product) => {
          dispatch(addToBasket(product));
        });
        localStorage.removeItem("offlineCart");
        console.log("Offline səbət sinxronizasiya olundu ✅");
      }
    });
  }
  