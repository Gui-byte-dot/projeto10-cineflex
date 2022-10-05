import React from 'react';
import Title from './Title';
import Filmes from './Filmes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <Title />
            <Routes>
                <Route path="/" element={<Filmes />}/>
            </Routes>

        
        </BrowserRouter>
    )     
}