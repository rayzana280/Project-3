import React, {useState} from "react";

function BicepReview({itemId, addData, submit}){

    const [comments, setComment] = useState("")

    function handleSubmit(e){
        e.preventDefault(); 

        const formData = {
            comment: comments,
            workout_id: itemId
        }
        //this is where the review is going to get submit
        submit(formData)
        setComment("")
    }

    

    return(
        <form onSubmit={handleSubmit}>
            <label>ADD YOUR EXPERIENCE:</label>
            <input placeholder="type comment" value={comments} onChange={(e)=> setComment(e.target.value)} className="submitInput"/>
            <button className="submitButton">SUBMIT</button>
        </form>
    )
};

export default BicepReview;