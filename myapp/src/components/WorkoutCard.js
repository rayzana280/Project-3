import React, {useState} from "react";
import Form from "./Form";
import Comments from "./Comment";

function WorkoutCard({item, reviewData, fetchPost, fetchDelete, fetchPatch}){

    const [button, stateButton]= useState(false)
    //const [newarray, stateNewArray] = useState(reviewData)



    function submit(formData){
        fetchPost(formData)
    }

    function deleting(id){
        fetchDelete(id)
    }

    function editing(id, value){
        fetchPatch(id, value)
    }


    function handleClick(){
        stateButton(!button)
        //const array = reviewData.filter((element)=> element.workout_id === item.id)
       // commentFilter(array)
        console.log(item.id)
        console.log(reviewData)
        //this review data just need to display them 
    }
    


    return(
        <div className="divCard">
            <img src={item.image} className="image"/>
            <h2>WORKOUT: {item.name}</h2>
            <h2>SETS: {item.sets}</h2>
            <h2>REPS: {item.reps}</h2>
            <Form itemId={item.id} submit={submit}/>
            <button onClick={handleClick} className="commentsButton">{button ? "Show less Comments" : "Show Comments" }</button>
            {button ? reviewData.map((item)=>{
            return <Comments item={item} key={item.id} deleting={deleting} editing={editing}/>
            }) : null }
        </div>
    )
};

export default WorkoutCard;