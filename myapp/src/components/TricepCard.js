import React, {useState} from 'react'
import TricepReview from './TricepsReview'
import TricepComments from './TricepComment'

function TricepCard({item, tReviewD, addingData}){

    const [button, stateButton]= useState(false)
    const [newarray, stateNewArray] = useState(tReviewD)


    function handleclick(){
        stateButton(!button)
        const array = tReviewD.filter((element)=> element.tricepworkout_id === item.id)
        stateNewArray(array)
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
            <TricepReview itemId={item.id} addData={addData}/>
            <button onClick={handleclick}>{button ? "Show less Comments" : "Show Comments" }</button>
            {button ? newarray.map((item)=>{
                return <TricepComments items={item} key={item.id} updateData={updateData}/>
            }) : null }
        </div>
    )
};

export default TricepCard;