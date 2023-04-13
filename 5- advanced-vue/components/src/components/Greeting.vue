<template>
    <p v-if="age > 25">{{ msg }}</p>
    <p v-else>You mut be 25 years or older to view this message</p>
</template>

<script>
export default {
    name: 'Greeting',
    props: ['age'],
    data() {
        return {
            msg: 'Hello World!'
        }
    }
}
</script>

<style scoped lang="scss">
p {
  color: red;
}
p:hover {
    color: darken(#cc4444, 15%);
}

</style>