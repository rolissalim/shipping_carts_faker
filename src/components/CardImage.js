import React from 'react'

const CardImage = ({image}) => {
    console.log("image", image);
    return (
        <img src={image} className="card-img-top fit-image" alt="..." />
    )
}

export default CardImage;
