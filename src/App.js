import React from 'react';
import Home from './page/Home';
import { Routes, Route } from 'react-router-dom';
import PlaceToStay from './page/PlaceToStay';

function App(){
return(
    
    <section className=''>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placetostay" element={<PlaceToStay />} />
    </Routes>
    </section>
)

}

export default App;