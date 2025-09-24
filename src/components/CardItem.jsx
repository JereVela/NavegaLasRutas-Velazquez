import { Link } from "react-router-dom";
import Card from "../pages/card";
import React from "react";
<br />
const CardItem = ({ prod }) => {
    return (
        <Link to={`/producto/${prod.id}`} style={{
            textDecoration: 'none',
            color: 'inherit',
            cursor: 'pointer'
        }}>
            <Card
                image={prod.image}
                title={prod.title}
                description={prod.description}
                price={prod.price}
                category={prod.category}
            />
        </Link>
    );
};

export default CardItem;