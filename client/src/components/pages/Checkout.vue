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
      // Se manda la información del usuario al endpoint de crear usuario
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
      // se manda la informacion de la tarjeta al endpoint de crear tarjeta
      try{
        let response = await axios.post('api/card/create', this.getCardData())
        return response.data.id
      }
      catch(e){
        console.error('[error] No se pudo crear el token de la tarjeta',)
        console.log(e)
      }
    },
    // getters y setters para la información con la store de Vue
    getCardData(){
      return this.$store.getters.getFormData
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
    //final de getters y setters

    // realizar cargo
    async pay(selectedForm){
      // Pago en caso de ser el metodo de pago con tarjeta
      if(selectedForm === 'card'){
        // Mostramos la pantalla de carga
        this.loading = true

        // Creamos el token de la tarjeta
        console.log('Creando token de tarjeta...')
        let res = await this.create_card().catch(error => {
          console.log(error)
          this.$router.push( { name: 'Error' } )
        })

        // Ponemos el token de la tarjeta en la store de Vue
        this.setPaymentMethodToken(res)
        
        // Mandamos la información para hacer el cargo
        console.log('Realizando cargo...')
        await this.charge().then(() => {
          // quitamos la pantalla de carga
          this.loading = false

          //nos movemos a la pantalla de pago exitoso
          this.$router.push({name: 'Success'})

        }).catch(error => {
          console.log(error)
          this.$router.push({name: 'Error'})
        })

      }
      // pago en caso de se pago en oxxo
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
    // Método que realizar el cargo al API
    async charge() {
      let payload = {
        token: '',
        reason: this.informacionPago['Concepto de pago'],
        session_id: this.sessionId,
        userId: this.userId,
        user: this.user,
        amount: 15
      }

      await axios.post('api/payment/charge', payload)
    }
  },
  async mounted() {
    // Obtenemos el session ID
    let deviceSessionId = window.OpenPay.deviceData.setup("formCard", "deviceIdHiddenFieldName");
    this.sessionId = deviceSessionId;
    // Lo ponemos en la store de Vue
    this.$store.dispatch('setSessionId', this.sessionId)

    // Creamos el usuario
    let userRes = await this.create_user()
    this.user = userRes 
    this.userId = userRes.id
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