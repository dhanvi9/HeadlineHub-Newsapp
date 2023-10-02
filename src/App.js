
import './App.css';
import NavBar from './components/NavBar';

import React, {useState} from 'react'
import News from './components/News' ;
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App =()=> {
  const pageSize = 15
  const apiKey= process.env.REACT_APP_NEWS_API

  const [progress,setProgress] = useState(0);
  
  
 
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Routes>
          <Route path="/" element={<News progress={progress} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route path="/business" element={<News progress={progress} setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route path="/entertainment" element={<News progress={progress} setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          {/* <Route path="/general" element={<News progress={progress} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route> */}
          <Route path="/health" element={<News progress={progress} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}></Route>
          <Route path="/science" element={<News progress={progress} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}></Route>
          <Route path="/sports" element={<News progress={progress} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route path="/technology" element={<News progress={progress} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>
    
        </Routes>
        </Router>
      </div>
    )
  }

  export default App;


