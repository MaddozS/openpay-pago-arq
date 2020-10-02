const { OPENPAY } = require('./config')

const createCard = ( { card_number, holder_name, expiration_year, 
    expiration_month, cvv2, device_session_id } ) => ({
    fields: {
        card_number,
        holder_name,
        expiration_year,
        expiration_month,
        cvv2,
        device_session_id
    },
    getId: async function(clientId) {

        return new Promise((resolve, reject) =>{
            OPENPAY.customers.cards.create(clientId, this.fields, (error, body) => {
                if(error){
                    // console.log({'status':'error', 'message': error})
                    reject({'status':'error', 'message': error})
                }
                else{
                    // console.log({'status':'OK', 'message': body})
                    resolve({'status':'OK', 'message': body})
                }
                //error;    // null if no error occurred (status code != 200||201||204)
                //body;     // contains the object returned if no error occurred (status code == 200||201||204)
            });
        })
    }
})

module.exports = { createCard }