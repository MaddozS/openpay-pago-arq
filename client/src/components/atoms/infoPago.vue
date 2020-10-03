<template>
  <div class="info-pago">
    <p>{{ concepto }}: </p>
    <p>{{ infoConcepto }}</p>
  </div>
</template>

<script>
export default {
  name: 'infoPago',
  props: {
    concepto: {
      type: String,
      required: true
    },
    infoConcepto: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.info-pago{
    display: flex;
    flex-direction: row;
    font-weight: bold;
    margin-bottom: 10px;
}
.info-pago > :first-child {
    color: rgb(10, 82, 189);
    margin-right: 5px;
}
</style>