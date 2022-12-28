import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import '../styles/navbar.css';

const Navbar = ({size, setShow}) => {
    return (
     
       <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                <h1>FytShoes</h1>
            </span>
            <div className="home">
                <p>Home</p>
                <p>Quem somos</p>
                <p>Produtos</p>
                <p>Promoções</p>
                <p>Contato</p>
            </div>
           
            <div className="cart" onClick={()=>setShow(false)} >
                <BsFillCartPlusFill />
                <span>{size}</span>
            </div>
        </div>
       </nav>
 
    )
}

export default Navbar;
