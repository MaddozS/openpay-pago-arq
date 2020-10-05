const { Router } = require('express')
const { OPENPAY } = require('../../openpay/config')

const router = Router()

router.get('/', async (req, res) => {
    res.send('API working')
})

module.exports = router