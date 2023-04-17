<template>
  <div>
    <slot :user="user" :favorites="favorites"></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      user: {
        name: 'Abbas',
        age: 27
      },
      favorites: ['Pizza', 'Marbles','Birds']
    }
  }
}
</script>

<style>

</style>
