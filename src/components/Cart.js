import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import Card from './Card';

const Cart = () =>{
    const useCtx = useContext(CartContext)
    return(
        <>
        <Link to ='/' style={{textDecoration: 'none'}}><Button variant='contained' color='success'>CONTINUAR COMPRANDO</Button></Link>
        <Card />
        </>
    );
}
export default Cart;