<template>
  <header id="header">
    <div class="lamp" @click="togglenight">
      <div class="lamp-item lamp-top"></div>
      <div class="lamp-item lamp-middle"></div>
      <div class="lamp-item lamp-bottom"></div>
      <div class="lamp-item lamp-light open"></div>
    </div>
  </header>
  <div class="intro" id="intro">
    <p>Hello, I'm</p>
    <p class="name">Ali Mirei</p>
    <p>MEVN Stack Developer</p>
    <div class="buttons">
      <button class="dnld" @click="download">Download CV</button>
      <button class="abtbtn"><a href="#aboutme-container">About me</a></button>
    </div>
  </div>
  <div class="aboutme-container" id="aboutme-container">
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
            <p>6 projects</p>
          </div>
          <div class="section">
            <img src="./assets/headset.png">
            <p>Support</p>
            <p>online</p>
          </div>
        </div>
        <p class="abttxt">
          As a problem solver who loves facing challenges in my work, I'm excited to be in the deployment phase of my career as a web developer. I'm passionate and ambitious about my work, and love to be on a team that questions possibilities. Independently, I've accomplished building website projects as a freelancer for over two years.
        </p>
        <button class="contactme"><a href="#contactmecontainer">Contact Me</a></button>
      </div>
    </div>
  </div>
  <div class="myexperience" id='myexperience'>
    <p class="myextitle">My Experience</p>
    <div class="experinececontainer">
      <div class="lan-container">
      <p class="perfom">Frontend developer</p>
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
      <p class="perfom">Backend developer</p>
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
      <p class="perfom">tools</p>
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
  <div class="recentwork" id="recentwork"> 
    <p class="recenworkttitle">Recent Work</p>
    <div class="recentcontainer">
      <div class="recentsection">
        <img src="./assets/tiny1.png" class="recentimg">
        <p class="recenttitle">TinyURL</p>
        <p class="seemore" @click="see('tinyurl')">see more...</p>
      </div>
      <div class="recentsection">
        <img src="./assets/shop.jpg" class="recentimg">
        <p class="recenttitle">Shop</p>
        <p class="seemore" @click="see('shop')">see more...</p>
      </div>
      <div class="recentsection">
        <img src="./assets/quran.jpeg" class="recentimg">
        <p class="recenttitle">Quran</p>
        <p class="seemore" @click="see('quran')">see more...</p>
      </div>
      <div class="recentsection">
        <img src="./assets/book.png" class="recentimg">
        <p class="recenttitle">ParsBook</p>
        <p class="seemore" @click="see('pars')">see more...</p>
      </div>
    </div>
  </div>
  <div class="contactmecontainer" id="contactmecontainer">
    <p class="contactmetitle">Contact Me</p>
    <div class="contanctmesection">
      <div class="talkcontainer">
        <p class="takltitle">Talk to me</p>
        <div class="talksection">
          <img src="./assets/mail.png" class="talkicon">
          <p>Email</p>
          <p>alimiree.zade@gmail.com</p>
        </div>
        <div class="talksection">
          <img src="./assets/telegram.png" class="talkicon">
          <p>Telegram</p>
          <p>@amz_2694</p>
        </div>
          <a href="https://github.com/amz2694/">
        <div class="talksection">
          <img src="./assets/github.png" class="talkicon">
          <p>Github</p>
          <p>amz2694</p>
        </div>
          </a>
      </div>
      <div class="formsection">
        <p class="formtitle">Write me your project</p>
        <form action="mailto:alimiree.zade@gmail.com" method="get" enctype="text/plain" class="formcontainer">
          <input type="text" class="formin" placeholder="insert your name">
          <input type="text" class="formin" placeholder="insert your email">
          <textarea type="text" class="txtarea" rows="10" placeholder="Write your project"></textarea>
          <input type="submit" class="submit" value="Send" />
          
        </form>
        
      </div>
    </div>
  </div>
  <div class="boxsection">
    <div class="boxcontaienr">
    <div class="box"><a href="#header"><img src="./assets/home.png" class="boximg"></a></div>
    <div class="box"><a href="#aboutme-container"><img src="./assets/about.png" class="boximg"></a></div>
    <div class="box"><a href="#myexperience"><img src="./assets/code.png" class="boximg"></a></div>
    <div class="box"><a href="#recentwork"><img src="./assets/work.png" class="boximg"></a></div>
    <div class="box"><a href="#contactmecontainer"><img src="./assets/phone.png" class="boximg"></a></div>
  </div>
  </div>
  <moreTiny v-show="showTiny" @close="close"/>
  <moreShop v-show="showShop" @close="close"/>
  <moreQuran v-show="showQuran" @close="close"/>
  <morePars v-show="showPars" @close="close"/>
</template>

<script>
import moreTiny from './components/moreTiny.vue'
import moreShop from './components/moreShop.vue'
import moreQuran from './components/moreQuran.vue'
import morePars from './components/morePars.vue'

export default {
  name: 'App',
  components: {moreTiny,moreShop,moreQuran,morePars},
  data () {
    return {
      showTiny : false,
      showShop : false,
      showQuran : false,
      showPars : false
    }
  },
  methods : {
    download() {
      window.open('http://185.202.113.223:8000/cv.pdf')
    },
    close() {
      this.showShop = false;
      this.showTiny = false;
      this.showQuran = false;
      this.showPars = false;
    },
    see(item) {
      console.log(item)
      if (item == 'tinyurl') {
        this.showTiny = true;
      } else
      if (item == 'shop') {
        this.showShop = true;
      } else
      if (item == 'quran') {
        this.showQuran = true;
      } else
      if (item == 'pars') {
        this.showPars = true;
      }
     },
    togglenight () {
      this.showMore = !this.showMore
      document.getElementsByClassName('lamp-light')[0].classList.toggle('open');
      document.querySelector('body').classList.toggle('dark');
      const section = document.getElementsByClassName('section');
      const lan = document.getElementsByClassName('lan-container');
      const recent = document.getElementsByClassName('recentsection');
      const talk = document.getElementsByClassName('talksection');
      const form = document.getElementsByClassName('formin');
      const more = document.getElementsByClassName('moresrction');
      document.getElementsByClassName('txtarea')[0].classList.toggle('white');
      document.getElementsByClassName('dnld')[0].classList.toggle('white');
      for (let i=0;i<more.length;i++) {
        more[i].classList.toggle('white');
      }
      for (let i=0;i<section.length;i++) {
        section[i].classList.toggle('white');
      }
      for (let i=0;i<lan.length;i++) {
        lan[i].classList.toggle('white');
      }
      for (let i=0;i<recent.length;i++) {
        recent[i].classList.toggle('white');
      }
      for (let i=0;i<talk.length;i++) {
        talk[i].classList.toggle('white');
      }
      for (let i=0;i<form.length;i++) {
        form[i].classList.toggle('white');
      }

    }
  },
  mounted () {
    console.log(document.getElementsByClassName('lan-container'))
    document.querySelector('body').classList.add('dark')
  }
}
</script>

<style src='./style/main.css'>

</style>
