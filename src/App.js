import React from 'react';
import Title from './Title';
import Filmes from './Filmes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sessions from './Sessions';

export default function App() {
    return (
        <BrowserRouter>
            <Title />
            <Routes>
                <Route path="/" element={<Filmes />}/>
                <Route path="/:imageId/showtimes" element={<Sessions />}/>
            </Routes>

        
        </BrowserRouter>
    )     
}