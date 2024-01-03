import React,{useState} from "react"
import BicepCard from './BicepCard'

function Biceps({data}){
    const [display, stateDisplay] = useState(false)
    
    function handleclick(){
      //  data.map((item)=>{
        //  return <BicepCard item={item} key={item.id}/>
      //  })
      stateDisplay(!display)
      console.log(display)
    }

    return (
     <div>
         <button onClick={handleclick}>Bicep Workouts</button>
         {display ?  data.map((item)=>{
          return <BicepCard item={item} key={item.id}/>
        }) : null}
     </div>
    )
}

export default Biceps;