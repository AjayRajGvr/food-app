import React from 'react';
import './food.css';

const FoodShow = ({title,imageUrl,cost,available,rating}) => (
    <div className="food">
        <img src={imageUrl} style={{width:'50%'}}/>
        <h2>{title}</h2>
        <h3>cost: {cost}</h3>
        <h3>available: {available}</h3>
        <h3>rating: {rating}</h3>

            
        

    </div>
)

export default FoodShow;