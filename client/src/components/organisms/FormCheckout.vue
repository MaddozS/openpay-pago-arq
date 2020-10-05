<template>
  <section>
    <div class="wrapper">
      <InfoPago v-for="(val, key) in informacionPago" :key="key" :concepto="key" :infoConcepto="val"/>
    </div>

    <SelectorForm @change-form="switchForm"/>

    <div class="form-container" >
      <transition name="fade" mode="out-in">
        <FormCard v-if="selectedForm === 'card' " :userId="userId" @send-form="action"/>
        <OxxoForm v-else @send-form="action"/>
      </transition>


    </div>
  </section>
</template>

<script>
import InfoPago from '../atoms/InfoPago'
import FormCard from '../molecules/FormCard'
import OxxoForm from '../molecules/FormOxxo'
import SelectorForm from '../molecules/SelectorForm'

export default {
  name:'FormCheckout',
  props: {
    informacionPago: {
      required: true,
      type: Object,
    },
    endpointCard: String,
    userId: String,
  },
  data() {
    return {
      selectedForm: 'card',
      formData: {}
    }
  },
  methods: {
    switchForm(option) {
      console.log(option)
      this.selectedForm = option
    },
    action(){
      this.$emit('action-pay', this.selectedForm)
    },
  },
  components: {
    InfoPago, FormCard, SelectorForm, OxxoForm
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

</style>