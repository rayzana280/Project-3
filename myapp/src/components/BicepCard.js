import React from "react";
import BicepReview from "./BicepReview";

function BicepCard({item, reviewD}){

    function handleclick(){
        console.log("this button been click")
        console.log(reviewD) //this review data just need to display them 
    }

    return(
        <div>
            <h2>WORKOUT: {item.name}</h2>
            <h2>SETS: {item.sets}</h2>
            <h2>REPS: {item.reps}</h2>
            <BicepReview itemId={item.id}/>
            <button onClick={handleclick}>Show Comments</button>
        </div>
    )
};

export default BicepCard;