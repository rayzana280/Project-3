import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Biceps from './components/Biceps';
import Triceps from './components/Triceps';
import NavBar from './components/NavBar';

function App() {

  const[bicepsData, stateBicepsData] = useState([])
  const [reviewData, stateReviewData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:9292/")
    .then((res) => res.json())
    .then((data) => stateBicepsData(data))
  }, [])

  useEffect(()=>{
    fetch("http://localhost:9292/review")
    .then((res) => res.json())
    .then((data)=> stateReviewData(data))
  }, [])


  return (
    <div className="App">
            <Biceps data={bicepsData} reviewD={reviewData}/>
            <Triceps />
    </div>
  );
}

export default App;
