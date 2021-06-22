
import axios from 'axios';
import React,{useState} from 'react';
import {useHistory} from "react-router-dom"


function Delivery() {
    let history = useHistory()
    const [packageName , setPackageName]= useState("");
    const[ itemsNumber, setItemsNumber] = useState("");
    const[itemLocation, setItemLocation]= useState("")
    const [ holderName , setHolderName]= useState("")
    const[holderContact , setHolderContact]= useState("")
    const[ destinationLocation ,setDestinationLocation]=useState("")
    const[ destinationHolderName ,setDestinationHolderName]=useState("")
    const[ destinationHolderContact ,setDestinationHolderContact]=useState("")

    const handlePackageNameInput = (event) =>{
        setPackageName(event.target.value);
    }

    const handleItemsNumberInput = (event) =>{
        setItemsNumber(event.target.value);
    }

    const handleItemLocation =(event) =>{
        setItemLocation(event.target.value);
    }
     const hadleHolderName = (event)=>{
         setHolderName(event.target.value)
     }
     const handleHolderContact =(event)=>{
         setHolderContact(event.target.value)
     }
     const handleDestinationLocation =(event)=>{
         setDestinationLocation(event.target.value)
     }

     const handleDestinationHolderContact =(event)=>{
         setDestinationHolderContact(event.target.value)
     }

     const handleDestinationHolderName = (event) =>{
         setDestinationHolderName(event.target.value);
     }
     const handleSend =(event)=>{
         event.preventDefault();
         axios.post("http://localhost:7000/delivery/new", {
            packageName: packageName,
            itemsNumber: itemsNumber,
            itemLocation: itemLocation,
            holderName:holderName,
            holderContact:holderContact,
            destinationLocation:destinationLocation,
            destinationHolderName:destinationHolderName,
            destinationHolderContact:destinationHolderContact

         }).then((res)=>{
         if(res.status === 200){

            localStorage.setItem("abenaMessage@delivered" , true);
            history.push("/delivered")}

         }).catch ((err)=>
         {console.log(err)}
         )
     }

    return (
    
        <div className="delivery-page">
        
            <form onSubmit={handleSend}>
                
                    <h2>Place A Delivery</h2>
                    <div className =" sub-entry">
                   <div className ="form-group">
                       <label> Package Name</label>
                       <input type ="name" value ={packageName} onChange={handlePackageNameInput}></input>
                   </div>

                   <div className ="form-group">
                        <label>Items Number</label>
                        <input type ="number" value ={itemsNumber}
                        onChange={handleItemsNumberInput}></input>
                   </div>
                   
                   <div className ="form-group">
                       <label>Item Location</label>
                       <input type ="location" value ={itemLocation}
                       onChange = {handleItemLocation}></input>
                   </div>

                   <div className ="form-group">
                        <label> Holder Name</label>
                        <input type ="destination" value ={holderName} onChange ={hadleHolderName}></input>
                    </div>
                       </div>
                       <div className ="sub-entry"> 
                    <div className ="form-group">
                        <label> Holder Contact</label>
                        <input type ="destination" value ={holderContact} onChange ={handleHolderContact}></input>
                    </div>

                    <div className ="form-group">
                        <label> Destination </label>
                        <input type ="destination" value ={destinationLocation} onChange ={handleDestinationLocation}></input>
                    </div>

                    <div className ="form-group">
                        <label> Destination Holder Name</label>
                        <input type ="destination" value ={destinationHolderName} onChange ={handleDestinationHolderName}></input>
                    </div>

                    <div className ="form-group">
                        <label> Destination Holder Contact</label>
                        <input type ="destination" value ={destinationHolderContact} onChange ={handleDestinationHolderContact}></input>
                    </div>

                    <div className ="form-group">
                        <button type ="submit">Send</button>
                    </div>
              </div>
            </form>

            
        </div>
      
    )
}

export default Delivery
