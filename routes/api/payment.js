const { Router } = require('express')
const { OPENPAY } = require('../../openpay/config')
const { User } = require('../../openpay/User')
const router = Router()

const newCustomer = {
    "name":"John",
    "email":"johndoe@example.com",
    "last_name":"Doe",
    "address":{
      "city":"Queretaro",
      "state":"Queretaro",
      "line1":"Calle Morelos no 10",
      "line2":"col. san pablo",
      "postal_code":"76000",
      "country_code":"MX"
    },
    "phone_number":"44209087654"
};
  

router.get('/', async (req, res) => {
    res.send('API working')
})

router.get('/create_user', async (req, res) => {
    Object.assign(User, {
        fields: {
            name: 'Axel',
            last_name: 'Anaya',
            email: 'axel@email.com',
            phone_number: '9993576483',
            address: {
                "line1":"Av 5 de Febrero",
                "line2":"",
                "state":"Yucatán",
                "city":"Mérida",
                "postal_code":"97238",
                "country_code":"MX" 
            }
        },
    })
    const openpayRespond = await User.getId()
    console.log('user created')
    console.log(openpayRespond)
    res.status(200).json(openpayRespond)
    // OPENPAY.customers.create(newCustomer, (error, body) => {
    //     // console.log(this.fields)
    //     if(error){
    //         // console.log(error)
    //         // return {'status':'error', 'message': error}
    //         res.status(500).json(error)
    //     }
    //     else{
    //         res.status(200).json(body)
    //         // console.log(body)
    //         // return {'status':'OK', 'message': body}
    //     }
    //     //error;    // null if no error occurred (status code != 200||201||204)
    //     //body;     // contains the object returned if no error occurred (status code == 200||201||204)
    // });
})

module.exports = router