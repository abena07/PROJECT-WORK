//item//item no
//location of item
//delivery location
import React,{useState} from 'react'

function delivery() {
    const [item , setItem]= useState("");
    const[ itemno , setItemno] = useState("")
    const[location, setLocation]= useState("")
    const[ destination ,setDestination]=useState("")

    const handleItemInput = (event) =>{
        setItemInput(event.target.value);
    }

    const handleItemnoInput = (event) =>{
        setItemnoInput(event.target.value);
    }

    const handleLocation =(event) =>{
        setLocation(event.target.value);
    }
     const handleDestination = (event) =>{
         setDestination(event.target.value);
     }

    return (
        <div>
            
        </div>
    )
}

export default delivery
