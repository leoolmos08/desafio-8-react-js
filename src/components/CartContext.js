const { createContext, useState } = require("react");

 export const CartContext = createContext();

 const CartContextProvider = ({children})=>{
   const [cartList, setCartList] = useState([]);
   const addToCart = (item, qty) =>{
      let productFind = cartList.find(product=> product.itemID === item.id);
      if(productFind===undefined){setCartList([
         ...cartList,
          {
             itemID: item.id,
             itemName: item.name,
             itemIMG: item.image,
             itemPrice: item.price,
             itemQty: qty,
          }
         ])} else {
            productFind.itemQty += qty;
         }
   }
   const removeItem = (id)=>{
      const remove = cartList.filter(item => item.itemID !== id);
      setCartList(remove);
   }
   const clearCartList = ()=>{
      setCartList([]);
   }
   
     return(
        <CartContext.Provider value={{cartList, addToCart, removeItem, clearCartList}}>
        { children }
        </CartContext.Provider>
     );
 }
 export default CartContextProvider;
