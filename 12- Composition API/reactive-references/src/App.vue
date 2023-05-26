<template>
  <div>
    <p>{{ num }}</p>
    <button type="button" @click.prevent="increment">Click Me</button>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup () {
    let num = ref(0);

    console.log(num);

    function increment () {
      num.value++;
    }

    return {
      num,
      increment
    }
  }
}
</script>
<style>

</style>
