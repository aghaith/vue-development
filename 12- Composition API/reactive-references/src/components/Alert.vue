<template>
    <div v-if="!flag" style="color: red">Name changed!</div>
</template>
<script>
import { computed } from 'vue'

export default {
    props: ['user'],
    setup(props /*, context */) {
        // this.$emit
        // context.emit('eventName', {})
        const flag = computed(() => {
            return props.user.name === 'Abbas'
        });

        return {
            flag
        }
    }
}
</script>