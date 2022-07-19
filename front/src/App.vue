<template>
  <header>
    <div class="lamp" @click="togglenight">
      <div class="lamp-item lamp-top"></div>
      <div class="lamp-item lamp-middle"></div>
      <div class="lamp-item lamp-bottom"></div>
      <div class="lamp-item lamp-light"></div>
    </div>
  </header>
  <div class="intro">
    <p>Hello, I'm</p>
    <p class="name">Ali Mirei</p>
    <p>MEVN Stack Developer</p>
    <div class="buttons">
      <button class="dnld">Download CV</button>
      <button class="abtbtn">About me</button>
    </div>
  </div>
  <div class="aboutme-container">
    <p class="abttitle">About Me</p>
    <div class="aboutMe">
      <img src="./assets/me.jpeg" class="mypic">
      <div class="about">
        <div class="container">
          <div class="section">
            <img src="./assets/completed.png">
            <p>Experience</p>
            <p>3 Years coding</p>
          </div>
          <div class="section">
            <img src="./assets/completed.png">
            <p>Completed</p>
            <p>4 projects</p>
          </div>
          <div class="section">
            <img src="./assets/headset.png">
            <p>Support</p>
            <p>online</p>
          </div>
        </div>
        <p class="abttxt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, blanditiis.</p>
        <button class="contactme">Contact Me</button>
      </div>
    </div>
  </div>
  <div class="myexperience">
    <p class="myextitle">My Experience</p>
    <div class="experinececontainer">
      <div class="lan-container">
      <p>Frontend developer</p>
      <div class="lancontaienr">
        <div class="cut">
          <p> <img src="./assets/done.png" class='done'> HTML5</p>
          <p> <img src="./assets/done.png" class='done'> CSS3</p>
          <p> <img src="./assets/done.png" class='done'> JavaScript</p>
        </div>
        <div class="cut">
          <p> <img src="./assets/done.png" class='done'> VueJs</p>
          <p> <img src="./assets/done.png" class='done'> Vuex</p>
        </div>
      </div> 
    </div>
    <div class="lan-container">
      <p>Backend developer</p>
      <div class="lancontaienr">
        <div class="cut">
          <p> <img src="./assets/done.png" class='done'> NodeJs</p>
          <p> <img src="./assets/done.png" class='done'> Express</p>
          <p> <img src="./assets/done.png" class='done'> SQL</p>
        </div>
        <div class="cut">
          <p> <img src="./assets/done.png" class='done'> MySQL</p>
          <p> <img src="./assets/done.png" class='done'> MongoDB</p>
        </div>
      </div> 
    </div>
    <div class="lan-container">
      <p>tools</p>
      <div class="lancontaienr">
        <div class="cut">
          <p> <img src="./assets/done.png" class='done'> Linux</p>
          <p> <img src="./assets/done.png" class='done'> Git</p>
          <p> <img src="./assets/done.png" class='done'> NPM</p>
        </div>
      </div> 
    </div>
    </div> 
  </div>
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
