<template>
  <form id="formCard" action="#">
    <div class="form">
      <div>
        <Label text="Nombre del tarjetahabiente" forInput="name"/>
        <br>
        <Input nameInput="name" v-model="formData.name" :value="formData.name"/>
      </div>

      <div class="inputDate">
        <Label text="Fecha de expiración"/>
        <br>
        <Input placeholder="MM" :maxlength="2" :minlength="1" nameInput="month" v-model="formData.month" :value="formData.month"/>
        <span>/</span>
        <Input placeholder="AAAA" :maxlength="4" :minlength="2" nameInput="year" v-model="formData.year" :value="formData.year"/>
      </div>
      
      <div>
        <Label text="Número Telefónico" forInput="phone"/>
        <Input placeholder="Lada (+52)" nameInput="phone" 
          v-model="formData.phone" :value="formData.phone"/>
      </div>
      
      <div>
        <Label text="Número de tarjeta de crédito" forInput="creditCard"/>
        <Input placeholder="xxxx xxxx xxxx xxxx" :maxlength="16" :minlength="16" 
          nameInput="creditCard" v-model="formData.creditCard" :value="formData.creditCard"/> 
      </div>  

      <div class="cvv2">
        <Label text="Código de seguridad (cvv)" forInput="cvv"/>
        <Input placeholder="xxx" :maxlength="3" :minlength="3" nameInput="cvv" v-model="formData.cvv" :value="formData.cvv"/> 
      </div>
    </div>
    <div class="button-container">
      <Button text="Hacer pago" v-on:click.native="setFormData" type="button"/>
    </div>
  </form>
</template>

<script>
import Input from '../atoms/Input'
import Label from '../atoms/Label'
import Button from '../atoms/Button'


export default {
  name: 'FormCard',
  data() {
    return {
      formData: {
        cvv: '110',
        creditCard: '4111111111111111',
        phone: '9993576483',
        month: '11',
        year: '22',
        name: 'Axel Adrian Anaya Garcia',
      },
    }
  },
  methods:{
    setFormData() { 
      this.$store.dispatch('setFormData', this.formData)
      this.$emit('send-form')
      //console.log(this.formData)
    },
  },
  components:{ Input, Label, Button },
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
.button-container{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>