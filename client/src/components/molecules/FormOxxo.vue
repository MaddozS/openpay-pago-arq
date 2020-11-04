<template>
  <form id="formOxxo">
    <div class="container">
      <div>
        <Label text="Número Telefónico" forInput="phone"/>
        <Input placeholder="Lada (+52)" nameInput="phone" v-model="phone" :value="phone"/>
      </div>
    </div>
    <div class="button-container">
      <Button text="Hacer pago" type="button" v-on:click.native="setFormData" />
    </div>
  </form>
</template>

<script>
import Input from '../atoms/Input'
import Label from '../atoms/Label'
import Button from '../atoms/Button'

export default {
    name: 'FormOxxo',
    data() {
      return {
        phone: '9993576483'
      }
    },
    methods: {
      setFormData() { 
        this.$store.dispatch('setFormData', { phone: this.phone })
        this.$emit('send-form')
      },
    },
    components: { Input, Label,Button }
}
</script>

<style scoped>
.container{
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 3%;
  margin: 30px 50px;
  grid-auto-flow: column;
}
.container div input{
  margin-top:8px;
}
.button-container{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>