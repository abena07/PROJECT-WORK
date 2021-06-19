
import React,{useState} from 'react';


function Delivery() {
    const [packageName , setPackageName]= useState("");
    const[ itemsNumber, setItemsNumber] = useState("");
    const[itemLocation, setItemLocation]= useState("")
    const [ holderName , setHolderName]= useState("")
    const[holderContact , setHolderContact]= useState("")
    const[ destinationLocation ,setDestinationLocation]=useState("")
    const[ destinationHolderName ,setDestinationHolderName]=useState("")
    const[ destinationHolderContact ,setDestinationHolderContact]=useState("")

    const handlePackageInput = (event) =>{
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

    return (
    
        <div className="login-page">
        
            <form>
                
                    <h2>Place A Delivery</h2>
                    <div className =" sub-entry">
                   <div className ="form-group">
                       <label> Package Name</label>
                       <input type ="name" value ={packageName} onchange={handlePackageInput}></input>
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
              </div>
            </form>

            
        </div>
      
    )
}

export default Delivery
