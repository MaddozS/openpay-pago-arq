<template>
  <form id="formOxxo">
    <div class="container">
      <div>
        <Label text="Número Telefónico" forInput="phone"/>
        <Input placeholder="Lada (+52)" nameInput="phone"/>
      </div>
    </div>
  </form>
</template>

<script>
import Input from '../atoms/Input'
import Label from '../atoms/Label'

export default {
    name: 'FormOxxo',
    components: { Input, Label }
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
</style>