const { Router } = require('express')
const { OPENPAY } = require('../../openpay/config')
const { createUser } = require('../../openpay/User')
const router = Router()

router.get('/', async (req, res) => {
    res.send('API working')
})

router.get('/create_user', async (req, res) => {
    const user = createUser({
        'name': 'Axel',
        'last_name': 'Anaya',
        'email': 'axel@email.com',
        'phone_number': '9993576483',
        'address': {
            "line1":"Av 5 de Febrero",
            "line2":"",
            "state":"Yucatán",
            "city":"Mérida",
            "postal_code":"97238",
            "country_code":"MX" 
        }
    })
    console.log(user)
    const openpayRespond = await user.getId()
    res.status(200).json(openpayRespond)
})

module.exports = router