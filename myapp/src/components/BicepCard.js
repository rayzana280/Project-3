import React from "react";

function BicepCard({item}){
    function handleclick(){
        console.log("this button been click")
    }
    return(
        <div>
            <h2>WORKOUT: {item.name}</h2>
            <h2>SETS: {item.sets}</h2>
            <h2>REPS: {item.reps}</h2>
            <button onClick={handleclick}>Show Comments</button>
        </div>
    )
};

export default BicepCard;