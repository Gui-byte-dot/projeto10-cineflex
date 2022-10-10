import React from "react";
import Assents from "./Assents";
import reservarassento from "./Assents"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Sucess(){
    let infocomprador =  JSON.parse(localStorage.getItem('person'))
    let infofilme = JSON.parse(localStorage.getItem('filme'))
    let navigate = useNavigate();

    function navegar(){

        navigate('/');

    }
        
        return(
            <>
            <PedidoSucesso>
                <p>Pedido feito</p>
                <p>com sucesso</p>
            </PedidoSucesso>
            {/* <p>{infocomprador.nome}</p> */}
            <FilmeSessao>
                Filme e Sessão
            </FilmeSessao>
            <DadosCompra>
                <p>{infofilme.movie.title}</p>
                <div>
                    <p>{infofilme.name} - {infofilme.day.date}</p>
                </div>
            </DadosCompra>
            <Ingressos>
                Ingressos
            </Ingressos>
            <InfoIngressos>
                {(infocomprador.ids).map((s) => (<p>{s}</p>))}
            </InfoIngressos>
            <Comprador>Comprador</Comprador>
            <InfoComprador>
                <p>Nome: {infocomprador.nome}</p>
                <p>CPF: {infocomprador.cpf}</p>
            </InfoComprador>
            <VoltarHome>
                <button onClick={navegar}>Voltar para Home</button>
            </VoltarHome>
            </>
        )
}
const DadosCompra = styled.div`
    margin-left:28px;
    font-size: 22px;
    margin-top:5px;
    div{
        margin-top:5px;
    }
`
const FilmeSessao = styled.p`
    font-size:24px;
    margin-left:28px;
    font-weight: 700;

`
const PedidoSucesso = styled.div`
    font-size:24px;
    color: #247A6B;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:110px;
    flex-direction:column;
    font-weight: 700;


`
const Ingressos = styled.p`
    font-size:24px;
    margin-left:28px;
    font-weight: 700;
    margin-top:20px
`
const InfoIngressos = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:28px;
    margin-top:15px;
    p{
        font-size:22px;
    }
`
const Comprador = styled.p`
    font-size:24px;
    margin-left:28px;
    font-weight: 700;
    margin-top:20px
`
const InfoComprador = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:28px;
    margin-top:15px;
    p{
        font-size:22px;
    }
`
const VoltarHome = styled.div`
    display:flex;
    justify-content:center;
    margin-top:80px;
    button{
        width: 225px;
        height: 42px;
        border:none;
        background: #E8833A;
        border-radius: 3px;
        color: #FFFFFF;
        font-size: 18px;

    }
    
    
`