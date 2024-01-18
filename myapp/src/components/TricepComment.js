import React from "react"

function TricepComments({items, updateData}){

    function handleDeleteClick(){
        fetch(`http://localhost:9292/tricepsreview/${items.id}`, {
            method: "DELETE",
        })
        .then((res)=> res.json())
        .then((data)=> {console.log(data)
            updateData(data)
            //seems like it doesnt update right away 
            //try to filter the array without the delete one 
        })
        .catch(error=> console.log(error))

        console.log("clicked")
    }

    return(
        <div>
        <p>{items.comment}</p>
        <button onClick={handleDeleteClick}>DELETE</button>
        </div>
    )

};

export default TricepComments;