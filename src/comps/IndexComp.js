import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const IndexComp = () => {
    const nav = useNavigate()
    nav("/home")

    return <h1>Loading...</h1>
}

export default IndexComp
