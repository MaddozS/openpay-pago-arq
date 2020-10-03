<template>
  <div>
    <form id="formCard">
      <div class="form">
        <div>
          <p>Nombre del tarjetahabiente</p>
          <input  placeholder="">
        </div>
        

        <div class="inputDate">
          <p>Fecha de expiracion (MM/AAAA)</p>
          <input placeholder="MM" maxlength="2" minlength="1"><span>/</span><input placeholder="AAAA" maxlength="4" minlength="2">
        </div>
        
        <div>
          <p>Número Telefónico:</p>
          <input placeholder="Lada (+52)">
        </div>
        
        <div>
          <p>Número de tarjeta de crédito</p>
          <input placeholder="xxxx xxxx xxxx xxxx" maxlength="16" minlength="16">  
        </div>  

        <div class="cvv2">
          <p>CVV2</p>
          <input placeholder="xxx" maxlength="3" minlength="3">
        </div>

      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormCard',
}
</script>

<style scoped>
.inputDate input{
  width: 100px !important;
}
.form{
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  /* padding-left: 3%; */
  grid-gap: 3%;
  margin: 30px 50px;
  grid-auto-flow: column;
  width: 800px;
}
.form div input{
  width: 100%;
}
.cvv2 input{
  width: 100px !important;
}
input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #ffffff;
  border: 0;
  margin: 0 0 15px;
  padding: 8px;
  box-sizing: border-box;
  font-size: 14px;
}

</style>