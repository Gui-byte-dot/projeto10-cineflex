import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import React from 'react'

export default function Sessions(){
    const [session, setSession] = useState({})
    const {imageId} = useParams()


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${imageId}/showtimes`)
        
        promise.then((res) => {
            setSession(res.data)
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })
    
    },[])


    return(
        <div>
            {session.map(sess => <div key={sess.days.id}>{sess.days.weekday}</div>)}
        </div>
            
    )
}