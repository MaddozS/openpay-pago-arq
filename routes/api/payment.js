const { Router } = require('express')
const { OPENPAY } = require('../../openpay/config')
const { createUser } = require('../../openpay/User')
const { createCard } = require('../../openpay/Card')

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
    try {
        const openpayRespond = await user.getId()
        res.status(200).json(openpayRespond)
    } 
    catch (e) {
        res.status(e.message.http_code).json(e.message)
    }
})

router.post('/create_card', async (req, res) => {
    //console.log(req.body.device_session_id)

    const device_session_id = req.body.device_session_id
    const card = createCard({
        'card_number':'4111111111111111',
        'holder_name':'Juan Perez Ramirez',
        'expiration_year':'20',
        'expiration_month':'12',
        'cvv2':'110',
        'device_session_id':device_session_id,
        "country_code":"MX" 
    })
    
    try {
        const openpayRespond = await card.getId('aaria53vpbar81nl7rho')
        console.log(openpayRespond)
        res.status(200).json(openpayRespond)
    } 
    catch (e) {
        res.status(e.message.http_code).json(e.message)
    }
})

module.exports = router