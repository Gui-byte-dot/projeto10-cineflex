import React from "react";
import styled from "styled-components";

export default function Title(){
    return(
        <Header>
            <p>CINE FLEX</p>
        </Header>

    )
}

const Header = styled.div`
    width: 100%;
    height: 67px;
    background: #C3CFD9;
    display:flex;
    justify-content: center;
    align-items:center;
    left: 0px;
    top: 0px;
    p{
        color:#E8833A;
        font-size:34px;
        
    }


`