import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Biceps from './components/Biceps';
import Triceps from './components/Triceps';
import NavBar from './components/NavBar';
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home"

function App() {

  const [bicepsData, setBicepsData] = useState([])
  const [reviewData, setReviewData] = useState([])
  const [tricepData, setTricepData] = useState([])
  const [tricepReview, setTricepReview] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((res) => res.json())
      .then((data) => setBicepsData(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/review")
      .then((res) => res.json())
      .then((data) => setReviewData(data))
      .catch(error => console.log(error))
  }, [])


  useEffect(() => {
    fetch("http://localhost:9292/triceps")
      .then((res) => res.json())
      .then((data) => setTricepData(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/tricepsreview")
      .then((res) => res.json())
      .then((data) => setTricepReview(data))
  }, [])

  function addData(newData) {
    console.log(reviewData, newData);
    setReviewData([...reviewData, newData])
  }


  function addTricepData(newData) {
    console.log(reviewData, newData);
    setTricepReview([...tricepReview, newData])
  }

  function updateData(deleteData) {
    const newArrays = reviewData.filter((item) => {
      return item.id !== deleteData.id
    })
    setReviewData(newArrays)
  }

  function updateTricepData(deleteData){
    const newArrays = tricepReview.filter((item) => {
      return item.id !== deleteData.id
    })
    setTricepReview(newArrays)
  }


  function updatedComment(data){
    const updateComment = reviewData.map((item)=> {
      if(item.id === data.id){
        return data
      }else{
        return item
      }
    });
    setReviewData(updateComment)
  }

  function updatedTricepComment(data){
    const updatedComment = tricepReview.map((item)=>{
      if(item.id === data.id){
        return data
      }else{
        return item 
      }
    });
    setTricepReview(updatedComment)
  }


  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/biceps">
          <Biceps data={bicepsData} reviewData={reviewData} addData={addData} updateData={updateData} updatedComment={updatedComment}/>
        </Route>
        <Route path="/triceps">
          <Triceps data={tricepData} tReviewD={tricepReview} addTricepData={addTricepData} updateTricepData={updateTricepData} updatedTricepComment={updatedTricepComment}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
