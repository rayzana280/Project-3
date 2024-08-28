import React,{useEffect, useState} from "react"
import WorkoutCard from './WorkoutCard'

function Biceps({data, reviewData, addData, updateData, commentFilter, updatedComment}){
   // const [array, setArrayData] = useState(reviewData)
    const [display, stateDisplay] = useState(false)

    function handleclick(){
      console.log(reviewData)
      stateDisplay(!display)
    }

    function fetchPost(formData){
      fetch("http://localhost:9292/review", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((r)=> r.json())
        .then((newData)=>{
            console.log(newData)
            addData(newData)
            // try to add the data now to the review so the user doesnt have to reset
        })
    }

    function fetchDelete(id){
      fetch(`http://localhost:9292/review/${id}`, {
        method: "DELETE",
    })
    .then((res)=> res.json())
    .then((data)=> {console.log(data)
        updateData(data)
    })
    .catch(error=> console.log(error))
    }


  function fetchPatch(id, value){
    fetch(`http://localhost:9292/review/${id}`,{
            method: "PATCH",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment: value,
            })
        })
        .then((r)=> r.json())
        .then((comment)=> updatedComment(comment))
  }


    return (
     <div>
        <p>
          The biceps brachii located in the upper arm is also know as the bicep, 
          with these workout you could use in pull workout or arms day for those are who experience in working out, 
          if not try to do this once or twice a week 
        </p>
        <p>
          Whenever you are ready click the "Bicep Workouts" button when you want learn bicep workout
        </p>
         <button onClick={handleclick} className="workoutButton">Bicep Workouts</button>
         {display ? data.map((item)=>{
          const array = reviewData.filter((element)=> element.workout_id === item.id)
          return <WorkoutCard item={item} key={item.id} reviewData={array} fetchPost={fetchPost} fetchDelete={fetchDelete} fetchPatch={fetchPatch} commentFilter={commentFilter}/>
        }) : null}
     </div>
    )
}

export default Biceps;