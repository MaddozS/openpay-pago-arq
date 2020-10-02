<template>
  <div class="container">
    <div class="inner-container">
      <div>
        <infoPago v-for="(val, key) in informacionPago" :key="key" :concepto="key" :infoConcepto="val"/>
      </div>
    </div>
    
  </div>
</template>

<script>
import infoPago from '../atoms/infoPago'

export default {
  name: 'prueba',
  data() {
    return {
      informacionPago: {
        'Concepto de pago':'REALIZACION DE EVENTO DE SUBASTA', 
        'Tipo de bien':'CASA'
      }
    }
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