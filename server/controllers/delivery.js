const Delivery = require ("../models/delivery");
const deliveryRouter = require ("express").Router()


/**
 * to create a delivery
 * Code to autogenerate tracking stuff: --> Math.random().toString(36).slice(2)
 */
deliveryRouter.post("/delivery/new" , function (request, response ){
    const body = request.body;
    const delivery = {
        packageName,
        itemsNumber,
        itemLocation,
        holderName,
        holderContact,
        destinationLocation,
        destinationHolderName,
        destinationHolderContact,
    } = request.body;

    // Generate a 12 digit code
    delivery.trackingCode = Math.random(20).toString().slice(2)

    const newDelivery = new Delivery(delivery)

    newDelivery.save(function (err, savedDelivery){
        if (err){
            console.log(err)
            return response.status(500).send();
        }

        console.log(savedDelivery);
        return response.status(200).send(savedDelivery);
        
    })
    }

    // Perform Create operation


)


module.exports = deliveryRouter;