import React from "react"

function Comments({items, updateData}){

    function handleclick(){
        fetch(`http://localhost:9292/review/${items.id}`, {
            method: "DELETE",
        })
        .then((res)=> res.json())
        .then((data)=> {console.log(data)
            updateData(data)
            //seems like it doesnt update right away 
            //try to filter the array without the delete one 
        })
        .catch(error=> console.log(error))

       
    }

    return(
        <div>
        <p>{items.comment}</p>
        <button onClick={handleclick}>DELETE</button>
        </div>
    )

};

export default Comments;

