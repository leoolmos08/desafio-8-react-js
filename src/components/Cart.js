import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import { Box } from "@mui/system";

const Cart = () =>{
    const useCtx = useContext(CartContext)
    return(
        <>
        <h1>CARRITO DE COMPRAS 🛒</h1>
        <Link to ='/' style={{textDecoration: 'none'}}><Button variant='contained' color='success'>CONTINUAR COMPRANDO</Button></Link>
        <Button variant="outlined" color="error" onClick={useCtx.clearCartList}>ELIMINAR TODO</Button>
        <Box>
            {
                (useCtx.cartList.length > 0 ) ?
                useCtx.cartList.map(item =>
                    <>
                    <h3>Producto: {item.itemName}</h3>
                    <img src={item.itemIMG} className="imgCart"/>
                    <p>Precio: {item.itemPrice}</p><p>Cantidad: {item.itemQty} items</p>
                    <Button variant="contained" color="error" onClick={()=>useCtx.removeItem(item.itemID)}>Eliminar producto</Button>
                    </>
                    )
                :<p>Tu carrito está vacío</p>
            }
        </Box>
        </>
    );
}
export default Cart;