<template>
  <div class="error-page">
    <div>
      <h2>Pago Fallido </h2>
      <p>Hubo un error durante el pago</p>
      <a href="#" class="btn-view-orders">Ver orden</a>
      <router-link :to="{name: 'Checkout'}">Regresar al pago</router-link>
    </div>
    <!-- <a href="#">Seguir comprando</a> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
.error-page{
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}
.error-page div > *{
  margin: 10px auto;
}

.btn-view-orders{
  display: block;
  border:1px solid red;
  width:100px;
  margin: 0 auto;
  padding: 10px;
  color:#fff;
  background-color:red;
  text-decoration: none;
}
h2{
  color:red;
}
a{
  text-decoration: none;
}
</style>