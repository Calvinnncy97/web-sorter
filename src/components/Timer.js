import React from 'react'

export const Timer = ({time}) => {
    return (
        <div style={timerStyle}>
            <span style={digitStyle}>
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span style={digitStyle}>
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
            </span>
            <span style={{...digitStyle, ...millisecStyle}}>
                {("0" + ((time / 10) % 100)).slice(-2)}
            </span>
        </div>
    )
}

const timerStyle = {
    // marginTop: "10px",
    // marginRight:'10px',
    // marginLeft:'10px',
    display: 'flex',
    flexDirection:'row',
    justifyContent:'flex-end'
}

const digitStyle = {
    fontFamily: 'Verdana',
    fontSize: '36px',
    color:  'rgb(0, 0, 0)',
}

const millisecStyle = {
    color:  'rgb(228, 42, 42)'
}

export default Timer




