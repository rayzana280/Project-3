# Project-3

Welcome to Workout Routine, where you'll be able to discover workout for each indivial muscle. 
In this app, I'll be using React for front-end and Ruby for back-end. We are going to use Active Record to interact with the database. Set up the following API routes in Sinatra to create and read action for two models that going to have on-to-many relationship. We are also going to be using CRUD(Create, Read, Updated, Delete) for both models. We are going to use a REact frontend application that interacts with API to perform CRUD action. We are going to dealing with Post, Get, Patch and Delete request interact with state and cause to update. We'll also going to use good OO design patterns. We are going to have routes for the application and top it off we are going to pass JSON to the front-end from the back-end.

**Making the Data**

Before we get anything done we are going to need some data. Since this app is based on giving the user workouts to do and allowing them to write comments and their experince, we are going to make some table to give to the user and another table to to keep the data. Basically we are going to be dealing with two database and how we are going to makes table and database is using Active Record Migrations. First we going to create a table for tricep workouts and bicep workouts which going to contain sets and reps for each workout. This is how the set-up is going to look:

//add the image of the table for tricep and bicep 

We are also going to add another column for both table to add images for the workout, we are also going to use Active Record Migration. The column is going to be named image and it's going to be string, this is how it's going to be set-up.

// add image of the image active record migration 

Now that we have the table for the workout, now we are going to make a table for user to store their comments about the the tricep workout and bicep workout. We are going to make two table and again using Active Record Migration. The set-up is going to contain comment and workout_id to show which comment belong to which workout. This is how the migration is going to look like: 

// add image of the review for both 

**Dealing With Models**

By making the models for each class we will be able to make one-to-many association. The tricep and bicep workout is going to have many reviews. The tricep review and bicep review is going to belong to only one workout. The "workout_id" that we added to review table is going to be the workout_id to which workout it belongs to. The set-up of the models would be coded as such:

//add pic of the model

**Application Controller**

With this apllication controller we can control on what we send back to the front-end as an JSON format when the clinet is using a get, post, patch or delete request. When the client want to get all the data for the review for bicep and tricep, also collect the data for the workout, we would have to use the get request method for the controller. If the client wants to delete the review we going have to use the delete method, if the client wants to post a comment about the workout or their experience we are going to have use the post method to handle the request. For the patch method that would had the comment the client wants to edit. This is how it would look like:

//picture with the controller

Now having the back-end set up and ready to go we can now move forward to the front-end with react and focus on getting the data using reuseable components. 

**React Components**

First we going to deal with the parent component which is going to be the App.js component. This component is going ot be handling all the Get request to get the Bicep data, tricep data, tricep review/comment data and bicep review/comment data. We are also going ti be using state including useEffect since we are fetching data. The reason why we are using useState is because we going to be changing the data due to useage of Post, Patch and delete request. The App component is going to have function that will update the state of the array of the comment which will be adding data, updating the data due deleting the comment and editing the data. This will go for tricep comment data and the bicep comment data. The App component is going to have a child component of Home, Tricep and Bicep component. On top of that the App component is going to include a NavBar Component. The child component Tricep and Bicep is going to be passed down props for the Workout data and comment data, also is going to get props for the function that will be update the state for Post, Patch and Delete request. 

// Include the picture of the app Component 


**Child Component Tricep and Bicep**

Both component is going to the to have the props that are being passed down and is going to have a function that will handle the Post, Patch and Delete request. The addData function is going to be a callback function for Post request, the updateData is going to be a callback function for Delete request and the updateComment is going to be used for the Patch request.

// add pic of the function for both of post patch and delete 

The child component for both component is going to be WorkoutCard component, this component is a reuseable component that could be used for the Tricep Component and Bicep component without changing anything in the component and just sending down the correct props. The props that are being passed down to is the Post, Patch and Delete request function. This is how it's going to be set-up:

// add the picture of the Workout child component with props 

**WorkoutCard Component**

This component is going to display the workout and is going to include to reuseable component which is going to be Form and Comment component, but for right we are going to be focused on the Workout Component. This component is going to display a workout including with a button where people could see their comment on what they wrote for their experience or notes for this workout. It's going to have a statue for the button to help us display the comment or not show the comment at all. It's going to have a function to pass down for the Form and Comment components. Form is going to take in the Post Request function prop and the Comment is going to take in the Delete and Patch request for the props. 

//add pic of workout card component

**Form and Comment Component**

First let's start with the Form Component, this component is going to handle the submit for the input. When the useer is typing in a comment that will trigger the onChange event for the value and when the user click submit that will also trigger the onSubmit event function that we include that has the callback function of the Post reuqest and a parameter of the Formdata that includes the value of the input and the id of the workout that we adding the comment to show that  this comment belong to this workout. 

// add the picture of the form component 

THe Comment is going to handle two request which is going to be Patch and Delete request. When the comments are ebing the display the user is going to have to option which is going ot be to edit the comment or delete the comment. When the user clicks on delete button that will run the onClick event and run the function that will have the Delete request callback function and delete the comment from the database and then update the state of the data to delete on teh comment on the spot of the user reloading the page. When the user clicks on edit button the html element"p" will change to "textarea" which will the user the option to edit their comment. There will be a button saying Submit, when the user click submit that will trigger the onClick which then run the fucntion that will include the callback Patch request function which update the comment and also updating the state of the data which will change the comment text on the spot instead of the user refreashing the page to see the changes.

// add the pic of comment component