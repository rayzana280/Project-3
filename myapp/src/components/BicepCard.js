import React from "react";

function BicepCard({item}){
    return(
        <div>
            <h2>WORKOUT: {item.name}</h2>
            <h2>SETS: {item.sets}</h2>
            <h2>REPS: {item.reps}</h2>
        </div>
    )
};

export default BicepCard;