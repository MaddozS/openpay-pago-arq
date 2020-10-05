<template>
  <div class="container">
    <Loading v-if="loading" />
    <div class="inner-container">
      <h1 class="title">Pagar Ahora</h1>      
      <FormCheckout 
        :informacionPago="informacionPago" 
        @action-pay="pay" 
        endpointCard="http://localhost:3000/api/card/create/"
        :userId="userId" @send-form='pay'/>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import FormCheckout from '../organisms/FormCheckout'
import Loading from '../atoms/Loading'

export default {
  name: 'Checkout',
  data() {
    return {
      informacionPago: {
        'Concepto de pago':'REALIZACION DE EVENTO DE SUBASTA', 
        'Tipo de bien':'Casa', 
        'ID del evento': 'MXN01934659',
        'Importe del servicio': '$20',
        'Fecha de adjudicacion': '2020-10-1',
        'Hora de adjudicacion': 'Ahorita',
        'Huso-horario deseado': 'El de mi casa'
      },
      sessionId: 'NO ID',
      user: undefined,
      userId: '',
      response: 'no response',
      selectedForm: 'card',
      loading: false,
    }
  },
  methods: {
    async create_user() {
      try{
        let response = await axios.post('api/user/create', {
          device_session_id: this.sessionId
        })

        return response.data.message
      }
      catch(e){
        console.error('[error] No se pudo crear el usuario',)
        console.log(e.response.data)
      }
      
    },
    async create_card(){
      // let payload = {
      //   ...this.getCardData(), 
      //   session_id: this.sessionId,
      //   userId: this.userId
      // }

      // try{
      //   let response = await axios.post('api/card/create', payload)
      //   return response.data.message
      // }
      // catch(e){
      //   console.error('[error] No se pudo crear el usuario',)
      //   console.log(e.response.data)
      // }

      let card = this.getCardData()

      return new Promise((resolve, reject) =>{
        window.OpenPay.token.create({
          'card_number':card.creditCard,
          'holder_name':card.name,
          'expiration_year':card.year,
          'expiration_month':card.month,
          'cvv2':card.cvv,
        }, 
        (response) => {
          console.log(response)
          resolve(response)
        }, 
        (e) => {
          console.error('[error] No se pudo generar el token',)
          reject(e)
        })
      })
    },
    getCardData(){
      return this.$store.getters.getFormData
    },
    async pay(selectedForm){
      if(selectedForm === 'card'){
        this.loading = true
        // this.$router.push({name: 'Success'})
        console.log('Creando token de tarjeta...')

        let res = await this.create_card().catch(error => {
          console.log(error)
          this.$router.push({name: 'Error'})
        })

        this.setPaymentMethodToken(res.data.id)
        console.log('Realizando cargo...')

        await this.charge().catch(error => {
          console.log(error)
          this.$router.push({name: 'Error'})
        })
        this.loading = false
        this.$router.push({name: 'Success'})
      }
      else{
        let formData = this.getCardData()
        if (formData.phone !== ''){
          this.$router.push({name: 'SuccessOxxo'})
        }
        else{
          this.$router.push({name: 'Error'})
        }
        
      }
    },
    setUserId(id) {
      this.$store.dispatch('setUserId', id)
    },
    setPaymentMethodToken(token) {
      this.$store.dispatch('setPaymentMethodToken', token)
    },
    getPaymentMethodToken() {
      return this.$store.getters.getPaymentMethodToken
    },
    async charge(){
      let payload = {
        token: this.getPaymentMethodToken(),
        reason: this.informacionPago['Concepto de pago'],
        session_id: this.sessionId,
        userId: this.userId,
        user: this.user,
        amount: 15
      }
      console.log(payload)
      let response = await axios.post('api/payment/charge', payload)
      
      console.log(response)

    }
  },
  async mounted(){
    let deviceSessionId = window.OpenPay.deviceData.setup("formCard", "deviceIdHiddenFieldName");
    this.sessionId = deviceSessionId;
    this.$store.dispatch('setSessionId', this.sessionId)

    let userRes = await this.create_user()
    //console.log(userRes.id)
    this.user = userRes
    this.userId = userRes.id
    console.log(this.user)
    this.setUserId(this.userId)
  },
  components: {
    FormCheckout, Loading
  }
}
</script>

<style scoped>
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 100%;
  padding: 0 20em;
}
.inner-container{
  -webkit-box-shadow: 0px 0px 14px -6px #000000; 
  box-shadow: 0px 0px 14px -6px #000000;
  background: rgb(243, 243, 243);
  flex-grow: 1;
}
.title{
  margin-bottom: 30px;
  margin-left: 50px;
  margin-top: 20px;
}

</style>