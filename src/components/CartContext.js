const { createContext, useState } = require("react");

 export const CartContext = createContext();

 const CartContextProvider = ({children})=>{
    const [cartList, setCartList] = useState([]);

     return(
        <CartContext.Provider value={{cartList}}>
        { children }
        </CartContext.Provider>
     );
 }
 export default CartContextProvider;
