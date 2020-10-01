const { OPENPAY } = require('./config')

const createUser = ( { name, last_name, email, phone_number, address } ) => ({
    fields: {
        name,
        last_name,
        email,
        phone_number,
        address
    },
    async getId() {
        OPENPAY.customers.create(this.fields, (error, body) => {
            if(error){
                console.log({'status':'error', 'message': error})
                Promise.reject({'status':'error', 'message': error})
            }
            else{
                console.log({'status':'OK', 'message': body})
                Promise.resolve({'status':'OK', 'message': body})
            }
            //error;    // null if no error occurred (status code != 200||201||204)
            //body;     // contains the object returned if no error occurred (status code == 200||201||204)
        });
    }
})


module.exports = { createUser }