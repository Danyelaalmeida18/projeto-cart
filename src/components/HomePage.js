import React from "react";
import list from '../data';
import '../styles/homepage.css';
import Cards from "./Cards";


const HomePage = ({handleClick}) => {
    return (
        <section>
            {
                list.map((item)=>(
                    <Cards item={item} key={item.id} handleClick={handleClick} />
                ))
            }
        </section>
    )
}

export default HomePage;