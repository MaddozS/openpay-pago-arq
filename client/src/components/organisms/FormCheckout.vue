<template>
  <section>
    <div class="wrapper">
      <InfoPago v-for="(val, key) in informacionPago" :key="key" :concepto="key" :infoConcepto="val"/>
    </div>

    <SelectorForm @change-form="switchForm"/>

    <div class="form-container" >
      <transition name="fade" mode="out-in">
        <FormCard v-if="selectedForm === 'card' "/>
        <OxxoForm v-else/>
      </transition>

      <div class="button-container">
        <Button text="Hacer pago" @button-clicked="action"/>
      </div>
    </div>
  </section>
</template>

<script>
import InfoPago from '../atoms/InfoPago'
import FormCard from '../molecules/FormCard'
import OxxoForm from '../molecules/FormOxxo'
import SelectorForm from '../molecules/SelectorForm'
import Button from '../atoms/Button'

export default {
  name:'FormCheckout',
  props: {
    informacionPago: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      selectedForm: 'card'
    }
  },
  methods: {
    switchForm(option) {
      console.log(option)
      this.selectedForm = option
    },
    action(){
      this.$emit('action-pay', this.selectedForm)
    }
  },
  components: {
    InfoPago, FormCard, SelectorForm, OxxoForm, Button
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 100ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.form-container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  padding: 0 10em;
  margin-bottom: 2em;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3%;
  margin-left: 50px;
}
.button-container{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>