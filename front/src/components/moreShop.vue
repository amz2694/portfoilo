<template>
  <div class="morecontainer" @click.self="close">
    <div class="moresrction white">
        <div class="info">
            <p class="moretitle">Shop</p>
            <p class="moredis">
              Shop is a Full stack Online shop. 
            </p>
        </div>
        <div class="challenge">
            <p><img src="../assets/done.png" class="done">Installing phpMyAdmin</p>
            <p><img src="../assets/done.png" class="done">Running mariaDB</p>
            <p><img src="../assets/done.png" class="done">Running SQL code in NodeJs</p>
            <p><img src="../assets/done.png" class="done">Writing async function </p>
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