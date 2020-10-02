<template>
  <div class="container">
    <div class="inner-container">
      <h1 class="title">Pagar Ahora</h1>
      <div class="wrapper">
        <infoPago v-for="(val, key) in informacionPago" :key="key" :concepto="key" :infoConcepto="val"/>
      </div>
      <div class="form-container">
        <FormCard/>
      </div>
      
      <p>{{ id }}</p>
      <p>{{ response }}</p>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import infoPago from '../atoms/infoPago'
import FormCard from '../molecules/FormCard'

export default {
  name: 'prueba',
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
      response: 'no response'
    }
  },
  mounted(){
    // const plugin = document.createElement("script");
    // plugin.setAttribute(
    //   "src",
    //   "https://resources.openpay.mx/lib/openpay-data-js/1.2.38/openpay-data.v1.min.js"
    // );
    let deviceSessionId = window.OpenPay.deviceData.setup("formCard", "deviceIdHiddenFieldName");
    //console.log(deviceSessionId)
    this.id = deviceSessionId;


    axios.post('api/payment/create_card/', {
      device_session_id: this.id
    })
    .then(res => {
      this.response = res.data
    })
    .catch(error => {
      console.log('aaa')
      console.log(error)
      this.response = error.data
    })
  },
  components: {
    infoPago, FormCard
  }
}
</script>

<style scoped>
.container{
  display: flex;
  align-items: stretch;
  height: 100vh;
  width: 100%;
}
.inner-container{
  -webkit-box-shadow: 0px 0px 14px -6px #000000; 
  box-shadow: 0px 0px 14px -6px #000000;
  background: rgb(243, 243, 243);
  flex-grow: 1;
  margin: 100px 300px;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3%;
  margin-left: 50px;
}
.title{
  margin-bottom: 30px;
  margin-left: 50px;
  margin-top: 20px;
}
.form-container{
  display: flex;
  justify-content: center;
}

</style>