const { Router, response } = require('express')
const { OPENPAY } = require('../../openpay/config')

const router = Router()

router.get('/', async (req, res) => {
    res.send('API working')
})

router.post('/charge', async(req, res) => {
    let chargeRequest = {
        'source_id' : req.body.token,
        'method' : 'card',
        'amount' : req.body.amount,
        'currency' : 'MXN',
        'description' : req.body.reason,
        'device_session_id' : req.body.session_id,
        'customer' : req.body.user
    }
    console.log(req.body)
    OPENPAY.charges.create(chargeRequest, (error, charge) => {
        if(error){
            res.status(error.http_code).json(error)
        }
        else{
            res.status(200).json(charge.data)
        }
    })
})

module.exports = router