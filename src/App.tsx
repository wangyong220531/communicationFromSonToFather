import React, { useState } from 'react'
import Child from "./components/child"
import './App.css'

const App: React.FC = () => {

    const [status, setStatus] = useState(false)

    const getFromChild = e => {
        setStatus(e)
    }

    return (
        <>
            {
                status && <div>AK-103</div>
            }<br />
            <Child getValue={getFromChild} />
        </>
    )
}

export default App
