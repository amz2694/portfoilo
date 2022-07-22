<template>
  <div class="morecontainer" @click.self="close">
    <div class="moresrction white">
        <div class="info">
            <p class="moretitle">Quran</p>
            <p class="moredis">
                joplin plugin : get certain ayah(s) by entering a sura's name and ayah's number(s)
            </p>
        </div>
        <div class="challenge">
            <p><img src="../assets/done.png" class="done">Learning basic of TypeScript</p>
            <p><img src="../assets/done.png" class="done">Learning new appication</p>
            <p><img src="../assets/done.png" class="done">Reading third party API Document</p>
            <p><img src="../assets/done.png" class="done">Working with third party API</p>
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