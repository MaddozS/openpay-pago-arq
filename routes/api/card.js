const { Router } = require('express')
const { createCard } = require('../../openpay/Card')
const { OPENPAY_PRIVATE_KEY, OPENPAY_MERCHANT_ID } = require('../../config')
const axios = require('axios')

const router = Router()

router.get('/', async (req, res) => {
    res.send('API working CARD')
})

router.post('/create-test', async (req, res) => {
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

router.post('/create', async (req, res) => {
    console.log(req.body)  
    // // const device_session_id = req.body.device_session_id
    const card = createCard({
        'card_number':req.body.creditCard,
        'holder_name':req.body.name,
        'expiration_year':req.body.year,
        'expiration_month':req.body.month,
        'cvv2':req.body.cvv,
    })
    // return new Promise((resolve, reject) =>{
    //     window.OpenPay.token.create({
    //       'card_number':card.creditCard,
    //       'holder_name':card.name,
    //       'expiration_year':card.year,
    //       'expiration_month':card.month,
    //       'cvv2':card.cvv,
    //     }, 
    //     (response) => {
    //       console.log(response)
    //       resolve(response)
    //     }, 
    //     (e) => {
    //       console.error('[error] No se pudo generar el token',)
    //       reject(e)
    //     })
    //   })
    
      try {
          const openpayRespond = await card.getId()
          res.status(200).json(openpayRespond.data)
      } 
      catch (e) {
          res.status(500).json(e.message)
      }
  })

module.exports = router