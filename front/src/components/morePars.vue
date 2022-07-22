<template>
  <div class="morecontainer" @click.self="close">
    <div class="moresrction white">
        <div class="info">
            <p class="moretitle">ParsBook</p>
            <p class="moredis">
              Developing Front-end of Online book shop. 
            </p>
        </div>
        <div class="challenge">
            <p><img src="../assets/done.png" class="done">Developing cart of shop with vuex and local Storage</p>
            <p><img src="../assets/done.png" class="done">Connecting appication to Backend APIs </p>
            <p><img src="../assets/done.png" class="done">Designing appication by figma design</p>
            <p><img src="../assets/done.png" class="done">Learning Vuex</p>
            <p><img src="../assets/done.png" class="done">Learning Vue Router</p>
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