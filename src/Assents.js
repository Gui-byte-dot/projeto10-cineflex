import axios from "axios"
import React, { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import "./styles.css"


export default function Assents(){
    const [ seat, setSeat] = useState([])
    const [nome, setNome] = useState("")
    const [cpf, setCpdf] = useState("");
    const [ft, setFt] = useState([]);
    const [ftmovie, setFtMovie] = useState([]);
    const [ftday, setFtDay] = useState([]);
    const [isActive, setIsActive] = useState(false);

    function reservarassento(event){
        event.preventDefault();
       
    }
    // function handleseat(seat){
    //     console.log(seat)
    //     if(seat === 'false'){
    //         return;
    //     } else {
    //         setSelected(current => !current)
    //     }
    // }
   
    
  

    const {filmId} = useParams()
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${filmId}/seats`)

        promise.then((rest) => {
            setFt(rest.data);
            setSeat(rest.data.seats)
            setFtMovie(rest.data.movie);
            setFtDay(rest.data.day);

            console.log(rest.data)
            console.log(rest.data.seats)
        })
        promise.catch((error) => {
            console.log(error.response.data)
        })
    },[])
   

    return(
        <>
            <form onSubmit={reservarassento}>
                <SelecionarAssento>
                    Selecione o(s) assento(s)
                </SelecionarAssento>
                <Assentos>
                    {seat.map((ast) => <button className={ast.isAvailable === false ? "indisponivel" : "disponivel"}key={ast.id} 
                    style={{color: isActive ? 'salmon' : ''}}onClick={() => setIsActive(!isActive)}>{ast.id}</button>)}
                </Assentos>
                <Cores>
                    <Selecionado>
                        <div></div>
                        <p>Selecionado</p>
                    </Selecionado>
                    <Disponivel>
                        <div></div>
                        <p>Disponível</p>
                    </Disponivel>
                    <Indisponivel>
                        <div></div>
                        <p>Indisponível</p>
                    </Indisponivel>
                </Cores>
                <NomeComprador>
                    <p>Nome do comprador</p>
                    <input type="text" placeholder="Digite seu nome..." value={nome} onChange={e => setNome(e.target.value)} />
                </NomeComprador>
                <CpfComprador>
                    <p>CPF do comprador</p>
                    <input type="number" placeholder="Digite seu CPF..." value={cpf} onChange={e => setCpdf(e.target.value)} />
                </CpfComprador>
                <ButtonReservar>
                    <button type="submit">Reservar Assento</button>
                </ButtonReservar>
            </form>
            <RodapeAssento>
                <img src={ftmovie.posterURL} alt="asssento"/>
                <div >
                    <p>{ftmovie.title}</p>
                    <p>{ftday.weekday} - {ft.name}</p>
                </div>
            </RodapeAssento>

            </>
    )
}
const SelecionarAssento = styled.div`
    display:flex;
    width:100%;
    height:110px;
    justify-content:center;
    align-items:center;
    font-size:24px;
`
const Assentos = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:327px;
    align-items:center;
    margin-left:24px;
    button{
    border: 1px solid #808F9D;
    border-radius: 12px;
    width: 26px;
    height: 26px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:11px;
    margin-left:7px;
    margin-top:18px;
    }
`

const Cores = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    margin-top:16px;
`
const Selecionado = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;


    div{
        background: #1AAE9E;
        border: 1px solid #0E7D71;
        border-radius: 17px;
        width: 25px;
        height: 25px;
    }
    p{
        font-size:13px;
    }
`
const Disponivel = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;


    div{
        background: #C3CFD9;
        border: 1px solid #0E7D71;
        border-radius: 17px;
        width: 25px;
        height: 25px;
    }
    p{
        font-size:13px;
    }

`
const Indisponivel = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;


    div{
        background: #F7C52B;
        border: 1px solid #0E7D71;
        border-radius: 17px;
        width: 25px;
        height: 25px;
    }
    p{
        font-size:13px;
    }

`
const NomeComprador = styled.div`
    display:flex;
    justify-content:center;
    margin-left:24px;
    flex-direction:column;
    margin-top:41px;
    input{
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        width: 284px;
        height: 51px;
    }

`
const CpfComprador = styled.div`
    display:flex;
    justify-content:center;
    margin-left:24px;
    flex-direction:column;
    input{
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        width: 284px;
        height: 51px;
}
`
const ButtonReservar = styled.div`
  display:flex;
  justify-content:center;
  margin-top:57px;
  border:none;
  button{
    background: #E8833A;
    border-radius: 3px;
    color:#FFFFFF;
    width: 225px;
    height: 42px;
    border:none;
  }
`
const RodapeAssento = styled.div`
    display:flex;
    width:100%;
    margin-top:30px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    left:0;
    height:117px;
    align-items:center;   
    div{
        margin-left:14px;
        align-items:center;
        vertical-align:center;

    }
    img{
        width: 64px;
        height: 89px;
        margin-left:10px;
    }
    p{
        font-size:24px;
    }
   
`

