import React, { useState } from "react"

function Comments({ item, deleting, editing}) {

    const [isEditing, setIsEditing] = useState(false)
    const [value, setValue] = useState(item.comment)

    function handleDeleteClick() {
        deleting(item.id)
    }

    function handleEditButton() {
        setIsEditing(!isEditing)
        //comment component
    }
    
    function handleChange(e){
        setValue(e.target.value)
        //comment component 
    }

    function handleEditSubmit(e){
        e.preventDefault();
        editing(item.id, value)
        setIsEditing(!isEditing)
        //only to do is add the updating data to the array 
        //comment compoennt 
    }

    return (
        <div>
            {isEditing ? <textarea value={value} onChange={handleChange}/> : <p>{item.comment}</p>}
            {isEditing ? <button onClick={handleEditSubmit} className="submitButton">Submit</button> : null}
            {isEditing ? null : <button onClick={handleDeleteClick} className="deleteButton">DELETE</button>}
            {isEditing? null : <button onClick={handleEditButton} className="editButton">EDIT</button>}
        </div>
    )

};

export default Comments;