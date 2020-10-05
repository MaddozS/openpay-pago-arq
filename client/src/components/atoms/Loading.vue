<template>
  <div class="overlay">
    <half-circle-spinner
    :animation-duration="1000"
    :size="60"
    color="#4CAF50"
    class="spinner"
  />
  </div>
  
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners'

export default {
  name: 'Loading',
  components:{
    HalfCircleSpinner
  }
}
</script>

<style scoped>
.overlay{
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(167, 167, 167, 0.548);
  height: 100vh;
  width: 100vw;
}
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>