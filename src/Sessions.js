import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"


export default function Sessions(){
    const [sessions, setSessions] = useState([])
    const [session, setSession] = useState([])
    const {imageId} = useParams()
    

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${imageId}/showtimes`)
      
        
        promise.then((res) => {
            setSession(res.data)
            setSessions(res.data.days)
            console.log(res.data.days)

        })
        promise.catch((err) => {
            console.log(err.response.data)
        })
    
    },[])


    return(
        <div>
            <SelecionarHorario>
                Selecionar o horário
            </SelecionarHorario>
            {sessions.map((reg) => 
            <>
                    <DataSemana key={reg.id}>
                        <p>{reg.weekday} - {reg.date}</p>
                    </DataSemana>
                    <Horario>
                        {reg.showtimes.map((exp) => <Link to={`/${exp.id}/seats`}><button key={exp.id}>{exp.name}</button></Link>)}
                    </Horario>              
            </>)}
            <RodapeFilme>
                        <div>
                        <p>{session.title}</p>
                        <img src={session.posterURL} alt="rodape"/>
                        </div>
            </RodapeFilme>
            
        </div>
            
    )
}
const SelecionarHorario = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:110px;
    width:100%;
    font-size:24px;

`
const DataSemana = styled.div`
    display: flex;
    flex-direction:row;
    margin-left:24px;
    font-size:20px;
`
const Horario = styled.div`
    display:flex;
    flex-direction:row;
    margin-left:23px;
    button{
        width: 83px;
        height: 43px;
        background: #E8833A;
        border-radius: 3px;
        font-size:18px;
        color:white;
        border:none;
    }
    button:nth-child(2){
        margin-left:8px
    }
`
const RodapeFilme = styled.footer`
    width: 100%;
    height: 117px;
    left: 0px;
    bottom: 0px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    flex-direction:row;


    div{
        display:flex;
        flex-direction:row-reverse;
        justify-content:left;
        margin-left:10px;
        align-items:center;
        margin-top:14px;

    }
    img{
        width: 64px;
        height: 89px; 

    }
    p{
        margin-left:14px;
        font-size:26px;
    }
    
`

