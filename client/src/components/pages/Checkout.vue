<template>
  <div class="container">
    <div class="inner-container">
      <h1 class="title">Pagar Ahora</h1>

      <FormCheckout :informacionPago="informacionPago" @action-pay="pay"/>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import FormCheckout from '../organisms/FormCheckout'

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
      id: 'NO IDE',
      response: 'no response',
      selectedForm: 'card',
      user: undefined
    }
  },
  methods: {
    async create_user() {
      let response = await axios.post('api/user/create', {
        device_session_id: this.id
      })
      // axios.post('api/payment/card/create', {
      //   device_session_id: this.id
      // })
      // .then(res => {
      //   this.response = res.data
      // })
      // .catch(error => {
      //   console.log('aaa')
      //   console.log(error)
      //   this.response = error.data
      // })

      return response.data.message
    },
    create_card(){},
    pay(selectedForm){
      if(selectedForm === 'oxxo'){
        alert("HOLA MUNDO")
      }
      else{
        alert("HOLA MUNDO x2")
      }
    }
  },
  async mounted(){
    let userRes = await this.create_user()
    this.user = userRes
    console.log(this.user)

    let deviceSessionId = window.OpenPay.deviceData.setup("formCard", "deviceIdHiddenFieldName");
    this.id = deviceSessionId;
  },
  components: {
    FormCheckout
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