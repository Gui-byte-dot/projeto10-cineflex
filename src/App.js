import React from 'react';
import Title from './Title';
import Filmes from './Filmes';
import Assents from './Assents';
import Sucess from './Sucess';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sessions from './Sessions';

export default function App() {
    return (
        <BrowserRouter>
            <Title />
            <Routes>
                <Route path="/" element={<Filmes />}/>
                <Route path="/:imageId/showtimes" element={<Sessions />}/>
                <Route path="/:filmId/seats" element={<Assents />}/>
                {/* <Route path="/sucesso" element={<Sucess />}/> */}
                 <Route exact path="/sucesso" element={<Sucess />}/>
            </Routes>

        
        </BrowserRouter>
    )     
}