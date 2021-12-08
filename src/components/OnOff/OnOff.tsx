import React from "react";

type PropsType = {
    on: (value: boolean) => void
    onValue: boolean
}

export const OnOff = (props: PropsType) => {
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
        background: props.onValue ? 'green' : 'white'
    }
    const offStyle = {
        borderRadius: '5px',
        border: '1px solid #000',
        marginRight: '10px',
        padding: '10px 25px',
        cursor: 'pointer',
        background: props.onValue ? 'white' : 'tomato'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid #000',
        background: props.onValue ? 'green' : 'tomato'
    }

    return (
        <div style={wrapStyle}>
            <div style={onStyle} onClick={()=>props.on(true)}>ON</div>
            <div style={offStyle} onClick={()=>props.on(false)}>OFF</div>
            <div style={indicatorStyle}> </div>
        </div>
    )
}