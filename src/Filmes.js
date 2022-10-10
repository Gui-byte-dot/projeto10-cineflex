import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Filmes(){

   const [filmes,setFilmes] = useState([])
   useEffect(() => {
       const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
       const promise = axios.get(URL);
       
       promise.then((res) => {
        console.log(res.data)
        setFilmes(res.data)
       })
       promise.catch((err) => {
        console.log(err.response.data)
       })
   },[])

    return(
        <>
        <SelecaoFilme>
            Selecione o  filme
        </SelecaoFilme>
        <ListaFilmes>
            {filmes.map((img) => <Link to={`/${img.id}/showtimes`}><img key={img.id} src={img.posterURL}  alt="filmes" /></Link>)}
        </ListaFilmes></>
    )
}
const ListaFilmes = styled.div`
    display:flex;
    width:304px;
    justify-content:space-around;
    texy-align:center;
    flex-wrap:wrap;
    margin 0 auto;
    img{
        width:129px;
        height:193px;
        padding-top:27px;
    }
`
// const ImageFilm = styled.img`
//     width:129px;
//     height:193px;
//     padding-top:27px;
// `
const SelecaoFilme = styled.div`
    display:flex;
    justify-content:center;
    height:83px;
    align-items:center;
    font-size:24px;

`