import React, {useState} from "react";

type PropsType = {
    // on: boolean
}

export const UncontrolledOnOff = (props: PropsType) => {
    const [on, setOn] = useState(false);

    const wrapStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
    }
    const onStyle = {
        borderRadius: '5px',
        border: '1px solid #000',
        marginRight: '10px',
        padding: '10px 25px',
        cursor: 'pointer',
        background: on ? 'green' : 'white'
    }
    const offStyle = {
        borderRadius: '5px',
        border: '1px solid #000',
        marginRight: '10px',
        padding: '10px 25px',
        cursor: 'pointer',
        background: on ? 'white' : 'tomato'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid #000',
        background: on ? 'green' : 'tomato'
    }

    return (
        <div style={wrapStyle}>
            <div style={onStyle} onClick={()=>setOn(true)}>ON</div>
            <div style={offStyle} onClick={()=>setOn(false)}>OFF</div>
            <div style={indicatorStyle}> </div>
        </div>
    )
}