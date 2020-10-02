<template>
  <div class="container">
    <div class="inner-container">
      <div class="wrapper">
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
        'Tipo de bien':'Casa', 
        'ID del evento': 'MXN01934659',
        'Importe del servicio': '$20',
        'Fecha de adjudicacion': '2020-10-1',
        'Hora de adjudicacion': 'Ahorita',
        'Huso-horario deseado': 'El de mi casa'
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
.wrapper {
  display: grid;
  grid-template-columns: 50% 49%;
  grid-gap: 1%;
}

</style>