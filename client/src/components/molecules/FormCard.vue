<template>
  <form id="formCard">
    <div class="form">
      <div>
        <Label text="Nombre del tarjetahabiente" forInput="nombre"/>
        <br>
        <Input nameInput="nombre" />
      </div>

      <div class="inputDate">
        <Label text="Fecha de expiración"/>
        <br>
        <Input placeholder="MM" :maxlength="2" :minlength="1" nameInput="month" />
        <span>/</span>
        <Input placeholder="AAAA" :maxlength="4" :minlength="2" nameInput="year"/>
      </div>
      
      <div>
        <Label text="Número Telefónico" forInput="phone"/>
        <Input placeholder="Lada (+52)" nameInput="phone"/>
      </div>
      
      <div>
        <Label text="Número de tarjeta de crédito" forInput="creditCard"/>
        <Input placeholder="xxxx xxxx xxxx xxxx" :maxlength="16" :minlength="16" nameInput="creditCard"/> 
      </div>  

      <div class="cvv2">
        <Label text="Código de seguridad (cvv)" forInput="cvv"/>
        <Input placeholder="xxx" :maxlength="3" :minlength="3" nameInput="cvv"/> 
      </div>
    </div>
  </form>
</template>

<script>
import Input from '../atoms/Input'
import Label from '../atoms/Label'

export default {
  name: 'FormCard',
  components:{ Input, Label }
}
</script>

<style scoped>
.inputDate input{
  width: 100px;
}
.cvv2 input{
  width: 100px;
  display: block;
}
.form div input{
  margin-top:8px;
}
.form{
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 30px 50px;
  grid-auto-flow: column;
}
</style>