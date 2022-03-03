import React from 'react'

export const ArrayBar = ({ arrayHeights, curr_index, left, right }) => {
    return (
        <div className="align-center space-evenly" style={{display: "flex", flexDirection: "row", justifyContent: "center", alignContent:"center"}}>
            {arrayHeights.map(
                (height, index) => <div key={index} style={barStyle(index, curr_index, left, right, height)}/>)}
        </div>
    )
}

function barStyle (index, curr_index, left, right, height) {
    var color= ""
    switch (index) {
        case left:
            color = "yellow"
            break;
        case right:
            color = "red"
            break;
        default:
            color = "black"
            break
    }
    return {
        backgroundColor: color, 
        width: 6, 
        height:height, 
        margin: 1
    }
}

export default ArrayBar
