import React from "react";
import '../styles/cards.css';

const Cards = ({item, handleClick}) => {
    const {title, description, price, img}= item;
    return (
        <div className="cards">
            <div className="image_box">
                <img src={img} alt="Image" />
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{description}</p>
                <p>R${price}</p>
                <button onClick={()=>handleClick(item)}>Add to Cart</button>

            </div>
        </div>
    )
}

export default Cards;