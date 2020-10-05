<template>
  <div class="success-page">
    <div>
      <img  src="http://share.ashiknesin.com/green-checkmark.png" class="center" alt="" />
      <h2>Pago Completado</h2>
      <p>{{ message }}</p>
      <a href="#" class="btn-view-orders">Ver orden</a>
      <router-link :to="{name:'Checkout'}">Seguir comprando</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Success',
  props: {
    message: {
      type: String,
      default: 'Nos complace informarle que el pago ha sido completado'
    }
  }
}
</script>

<style scoped>
.success-page{
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}
.success-page img{
  max-width:62px;
  display: block;
  margin: 0 auto;
}
.success-page div > *{
  margin: 10px auto;
}

.btn-view-orders{
  display: block;
  border:1px solid #47c7c5;
  width:100px;
  margin: 0 auto;
  margin-top: 45px;
  padding: 10px;
  color:#fff;
  background-color:#47c7c5;
  text-decoration: none;
  margin-bottom: 20px;
}

h2{
  color:#47c7c5;
    margin-top: 25px;

}

a{
  text-decoration: none;
}
</style>