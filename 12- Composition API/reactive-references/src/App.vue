<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button type="button" @click.prevent="increment">Click Me</button>

    <p>{{ name }}</p>

    <p>
      <input type="text" v-model="phrase"/>
    </p>
    <p>{{ reversedPhrase }}</p>
  </div>
</template>
<script>
import { ref, reactive, toRefs, watchEffect, watch, computed } from 'vue';

export default {
  name: 'App',
  setup () {
    let num = ref(0);

    function increment () {
      num.value++;
    }

    const double = computed(() => {
      return num.value * 2;
    })

    const user = reactive({
      name: 'Abbas',
      age: 27
    });

    setTimeout(() => {
      user.name = 'IQBAL'
    }, 3000);
    
    const phrase = ref("");
    const reversedPhrase = ref("");

    // watch([phrase], ([newVal, oldVal]) => {
    //   reversedPhrase.value = phrase.value.split("").reverse().join("");
    // });

    watchEffect(() => {
      reversedPhrase.value = phrase.value.split("").reverse().join("");
    });

    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reversedPhrase,
      double
    }
  }
}
</script>
<style>

</style>
