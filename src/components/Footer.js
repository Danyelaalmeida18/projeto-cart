import React from "react";
import '../styles/footer.css';
import { Tiktok } from 'react-bootstrap-icons';
import { Facebook } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';

const Footer = () => {
    return (
   
        <footer>
            <div className="box_footer">
                <p>CNPJ: 12.345.678/0001-91</p>
                Av. Rio de Janeiro 678A, Centro, 1º Andar loja 02
                <p>Rio de Janeiro - RJ </p>
                fytshoes@gmail.com            
                 <span className="rede_sociais">
                 <Tiktok />
                 <Facebook />
                 <Twitter />
                 <Instagram />
                </span>
                 </div>
         
        </footer>
    )
}

export default Footer;
