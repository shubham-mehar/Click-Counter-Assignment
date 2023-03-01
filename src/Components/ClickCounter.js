import React, { useState } from 'react'
import './ClickCounter.css';

const ClickCounter = () => {
    const [click, setClick] = useState(0)
    const handleClick = () => {
        setClick(click + 1)
    }

    return (
        <div className='container'>
            <h1>{click}</h1>
            <button onClick={handleClick} >Click me</button>
        </div>
    )
}

export default ClickCounter