const { OPENPAY } = require('./config')

const createUser = ( { name, last_name, email, phone_number, address } ) => ({
    fields: {
        name,
        last_name,
        email,
        phone_number,
        address
    },
    getId: async function() {

        return new Promise((resolve, reject) =>{
            OPENPAY.customers.create(this.fields, (error, body) => {
                if(error) {
                    reject( { 'status':'error', 'message': error } )
                }
                else {
                    resolve( { 'status':'OK', 'message': body } )
                }
                //error;    // null if no error occurred (status code != 200||201||204)
                //body;     // contains the object returned if no error occurred (status code == 200||201||204)
            });
        })
    }
})

module.exports = { createUser }