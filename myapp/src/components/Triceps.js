import React,{useState} from "react"

function Triceps(){
    const [display, stateDisplay] = useState(false)
    
    function handleclick(){
      stateDisplay(!display)
      console.log(display)
    }

    return (
     <div>
         <button onClick={handleclick}>Triceps Workouts</button>
     </div>
    )
}

export default Triceps;