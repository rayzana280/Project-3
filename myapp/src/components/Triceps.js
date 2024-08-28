import React,{useState} from "react"
import WorkoutCard from "./WorkoutCard"

function Triceps({data, tReviewD, addTricepData, updateTricepData, updatedTricepComment}){
    const [display, stateDisplay] = useState(false)
    
    function handleclick(){
      stateDisplay(!display)
    }

    function fetchPost(formData){
      fetch("http://localhost:9292/tricepsreview", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then((r)=> r.json())
    .then((newData)=>{
        console.log(newData)
        addTricepData(newData)
        // try to add the data now to the review so the user doesnt have to reset
    })
    .catch((error)=> console.log(error))
    }

    function fetchDelete(id){
      fetch(`http://localhost:9292/tricepsreview/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
              updateTricepData(data)
            })
            .catch(error => console.log(error))
            //comment component
    }

    function fetchPatch(id, value){
      fetch(`http://localhost:9292/tricepsreview/${id}`,{
            method: "PATCH",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment: value,
            })
        })
        .then((r)=> r.json())
        .then((comment)=> updatedTricepComment(comment))
    }

    return (
     <div>
       <p>
        The triceps brachii located in the upper arm is also know as the tricep, 
        with these workout you could use in pull workout or arms day for those are who experience in working out, 
        if not try to do this once or twice a week 
      </p>
      <p>
        Whenever you are ready click the "Tricep Workouts" button when you want learn bicep workout
      </p>
      <button onClick={handleclick} className="workoutButton">Triceps Workouts</button>
         {display ?  data.map((item)=>{
          const array = tReviewD.filter((element)=> element.workout_id === item.id)
          return <WorkoutCard item={item} key={item.id} reviewData={array} fetchPost={fetchPost} fetchDelete={fetchDelete} fetchPatch={fetchPatch} />
        }) : null}
     </div>
    )
}

export default Triceps;