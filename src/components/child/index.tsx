import React, { useState } from "react"
import { Button } from "antd"


const Child: React.FC = props => {

    const [value, setValue] = useState(false)

    const sendValue = () => {
        setValue(!value)

        props.getValue(value)
    }

    return (
        <>
            <Button onClick={sendValue}>点击</Button>
        </>
    )
}

export default Child