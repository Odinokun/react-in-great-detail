import React from "react";

type PropsType = {
    on: boolean
}

export const OnOff = (props: PropsType) => {
    const wrapStyle={
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
    }
    const onStyle={
        borderRadius: '5px',
        border: '1px solid #000',
        marginRight: '10px',
        padding: '10px 25px',
        background: props.on ? 'green' : 'white'
    }
    const offStyle={
        borderRadius: '5px',
        border: '1px solid #000',
        marginRight: '10px',
        padding: '10px 25px',
        background: props.on ? 'white' : 'tomato'
    }
    const indicatorStyle={
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid #000',
        background: props.on ? 'green' : 'tomato'
    }

    return (
        <div style={wrapStyle}>
            <div style={onStyle}>ON</div>
            <div style={offStyle}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}