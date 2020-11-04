const { OPENPAY_MERCHANT_ID, OPENPAY_PRIVATE_KEY } = require('../config')
const axios = require('axios')

const createCard = ( { card_number, holder_name, expiration_year, 
    expiration_month, cvv2 } ) => ({
    fields: {
        card_number,
        holder_name,
        expiration_year,
        expiration_month,
        cvv2,
    },
    getId: async function() {

        try{
            let response = await axios.post(`https://sandbox-api.openpay.mx/v1/${OPENPAY_MERCHANT_ID}/tokens`, 
                this.fields, {
                    auth: {
                        username: `${OPENPAY_PRIVATE_KEY}`,
                        password: ''
                    }
                })
            
            return response
        }
        catch(error){
            console.log(error)
            return error
        }
        

        
    }
})

module.exports = { createCard }