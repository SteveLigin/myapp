import React from 'react';

import './App.css';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Placetovisit from './componentvisit/Placetovisit';









function App() {
  return (

    <BrowserRouter>
     <div>
     
     <Navbar/>
     
     <Routes>
     <Route path="/" element={<Home />}>
        
        </Route>
     <Route path="/placetovisit" element={<Placetovisit />}>
        
        </Route>              
        </Routes>
       
     </div>
       
    </BrowserRouter>


   
     

    
    

  )
}


export default App;