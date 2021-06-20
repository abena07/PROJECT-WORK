import React from 'react'
import img from "../image/checked.png"

function Delivered() {
    return (
        <div className="deliv-ered"> 
            <h1>Your delivery has been placed!
            You will receive a call soon. <img  src ={img} alt="bhhk" height="80" width ="160" align ="center"></img> </h1>
           
        </div>
    )
}

export default Delivered
