<template>
  <header>
    <div class="lamp" @click="togglenight">
      <div class="lamp-item lamp-top"></div>
      <div class="lamp-item lamp-middle"></div>
      <div class="lamp-item lamp-bottom"></div>
      <div class="lamp-item lamp-light"></div>
    </div>
  </header>
</template>

<script>


export default {
  name: 'App',
  components: {},
  methods : {
    togglenight () {
      document.getElementsByClassName('lamp-light')[0].classList.toggle('open')
      document.querySelector('body').classList.toggle('dark')
    }
  }
}
</script>

<style src='./style/main.css'>

</style>
