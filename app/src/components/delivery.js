
import React,{useState} from 'react';
import img from "../image/ug.jpg"

function Delivery() {
    const [item , setItem]= useState("");
    const[ itemno , setItemno] = useState("");
    const[location, setLocation]= useState("")
    const[ destination ,setDestination]=useState("")

    const handleItemInput = (event) =>{
        setItem(event.target.value);
    }

    const handleItemnoInput = (event) =>{
        setItemno(event.target.value);
    }

    const handleLocation =(event) =>{
        setLocation(event.target.value);
    }
     const handleDestination = (event) =>{
         setDestination(event.target.value);
     }

    return (
        <div>
            <form>
                <div className ="form-inner ">
                    <h2>Place A Delivery</h2>
                   
                   <div className ="form-group">
                       <label> Item</label>
                       <input type ="name" value ={item} onchange={handleItemInput}></input>
                   </div>

                   <div className ="form-group">
                        <label>Item Number</label>
                        <input type ="number" value ={itemno}
                        onChange={handleItemnoInput}></input>
                   </div>
                   
                   <div className ="form-group">
                       <label>Location</label>
                       <input type ="location" value ={location}
                       onChange = {handleLocation}></input>
                   </div>

                    <div className ="form-group">
                        <label> Destination</label>
                        <input type ="destination" value ={destination} onChange ={handleDestination}></input>
                    </div>
                </div>
            </form>

            <img src ={img}  className ="center" alt ="ug" width="500" height="535"></img>
        </div>
    )
}

export default Delivery
