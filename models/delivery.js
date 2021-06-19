 const  mongoose = require ("mongoose")


/**
 * Fields
 * ----------
 * packageName              --> String
 * itemsNumber              --> Number
 * itemLocation             --> String
 * holderName               --> String
 * holderContact            --> String
 * destinationLocation      --> String
 * destinationHolderName    --> String
 * destinationHolderContact --> String
 * deliveryAgent            --> DeliveryAgentObject --> Could be String for now
 * trackingCode             --> String
 */
const deliverySchema = new mongoose.Schema({
    packageName:{
        type :String,
        required :true,
    },
    
    itemsNumber :{
        type :Number,
        required: true,

    },
    
    itemLocation:{
        type : String,
        required :true,
    },
    
    holderName :{
        type: String,
        required: true,
    },
    
    holderContact :{
        type :String,
        required: true,

    },
    
   destinationLocation:{
      type : String,
      required:true,
   },
   destinationHolderContact:{
       type :String,
       required:true,
   },
   deliveryAgent:{
       type:String,
       required:false,
   },
   
   trackingCode :{
       type :Number,
       required:true,

   }
})
    

const Delivery = mongoose.model("Delivery", deliverySchema)

module.exports = Delivery