import React, {useState} from "react";
import BicepReview from "./BicepReview";
import Comments from "./Comments";

function BicepCard({item, reviewD}){

    const [button, stateButton]= useState(false)
    const [newarray, stateNewArray] = useState(reviewD)


    function handleclick(){
        stateButton(!button)
        const array = reviewD.filter((element)=> element.workout_id === item.id)
        stateNewArray(array)
        console.log(item.id)
        //this review data just need to display them 
    }
    
    function addData(newData){
        stateNewArray([...newarray, newData])
    }

    function updateData(deleteData){
        const newArrays= newarray.filter((item)=>{
           return item.id !== deleteData.id
        })
        stateNewArray(newArrays)
    }

    return(
        <div>
            <h2>WORKOUT: {item.name}</h2>
            <h2>SETS: {item.sets}</h2>
            <h2>REPS: {item.reps}</h2>
            <BicepReview itemId={item.id} addData={addData}/>
            <button onClick={handleclick}>{button ? "Show less Comments" : "Show Comments" }</button>
            {button ? newarray.map((item)=>{
                return <Comments items={item} key={item.id} updateData={updateData}/>
            }) : null }
        </div>
    )
};

export default BicepCard;