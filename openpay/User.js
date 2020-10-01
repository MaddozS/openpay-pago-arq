const { OPENPAY } = require('./config')


const User = {
    fields: {
        name: '',
        last_name: '',
        email: '',
        phone_number: '',
        address: {}
    },
    getId: async () => {
        return OPENPAY.customers.create(this.fields, (error, body) => {
            console.log(this.fields)
            if(error){
                console.log(error)
                Promise.reject({'status':'error', 'message': error})
            }
            else{
                console.log(body)
                Promise.resolve({'status':'OK', 'message': body})
            }
            //error;    // null if no error occurred (status code != 200||201||204)
            //body;     // contains the object returned if no error occurred (status code == 200||201||204)
        });
    }
}


module.exports = { User }