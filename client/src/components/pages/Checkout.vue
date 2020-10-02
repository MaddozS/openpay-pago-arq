<template>
  <div class="container">
    <div class="inner-container">
      <div>
        <infoPago v-for="(val, key) in informacionPago" :key="key" :concepto="key" :infoConcepto="val"/>
      </div>
      <form action="" method="get" id='formCard'>

      </form>
      <p>{{ id }}</p>
      <p>{{ response }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import infoPago from '../atoms/infoPago'

export default {
  name: 'prueba',
  data() {
    return {
      informacionPago: {
        'Concepto de pago':'REALIZACION DE EVENTO DE SUBASTA', 
        'Tipo de bien':'CASA'
      },
      id: 'NO ID',
      response: ''
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
    infoPago
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
  margin: 100px 200px;
}
</style>