<template>
  <div class="morecontainer" @click.self="close">
    <div class="moresrction white">
        <div class="info">
            <p class="moretitle">TinyURL</p>
            <p class="moredis">
              TinyURL is a simple MEVN stack URL shortener. 
            </p>
        </div>
        <div class="challenge">
            <p><img src="../assets/done.png" class="done">Runing HTTPS with express</p>
            <p><img src="../assets/done.png" class="done">Cross-Origin Resource Sharing (CORS)</p>
            <p><img src="../assets/done.png" class="done">Working with axios</p>
            <p><img src="../assets/done.png" class="done">Sending and receiving cookies</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
methods : {
  close() {
    this.$emit("close");
  }
}
}
</script>

<style src="../style/more.css">

</style>