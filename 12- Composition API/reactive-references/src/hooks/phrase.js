import { ref, watchEffect } from 'vue';

const usePhrase = () => {
    const phrase = ref("");
    const reversedPhrase = ref("");
    const num = ref("");

    // watch([phrase], ([newVal, oldVal]) => {
    //   reversedPhrase.value = phrase.value.split("").reverse().join("");
    // });

    watchEffect(() => {
        reversedPhrase.value = phrase.value.split("").reverse().join("");
    });

    return { phrase, reversedPhrase, num };
};

export { usePhrase };