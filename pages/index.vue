<template>
  <div>
    <div class="pc">
      <section>
        <h1>masaakikunsan</h1>
        <div class="profile-wrapper">
          <div class="profile-left">
            <img src="~/assets/megumi.jpeg" alt="megumi">
            <p class="strong">Twitter</p>
            <p><a href="https://twitter.com/masaakikunsan" target="_blank">@masaakikunsan</a></p>
            <p class="strong m-t-15">Github</p>
            <p><a href="https://github.com/masaakikunsan" target="_blank">https://github.com/masaakikunsan</a></p>
          </div>
          <div class="profile-right">
            <p class="strong">Name</p>
            <p>Masaaki Ishioka a.k.a masaakikunsan</p>
            <p class="strong m-t-30">Birthday</p>
            <p>May 28, 1996</p>
            <p class="strong m-t-30">Skill</p>
            <p>HTML, CSS, JavaScript, PHP</p>
            <p class="strong m-t-30">Framework</p>
            <p>Vue.js, React.js, jQuery, Laravel</p>
          </div>
        </div>
      </section>
    </div>

    <div class="sp">
      <section>
        <h1>masaakikunsan</h1>
        <img src="~/assets/megumi.jpeg" alt="megumi" class="megumi">
        <p class="strong">Name</p>
        <p>Masaaki Ishioka a.k.a masaakikunsan</p>
        <p class="strong m-t-15">Birthday</p>
        <p>May 28, 1996</p>
        <p class="strong m-t-15">Skill</p>
        <p>HTML, CSS, JavaScript, PHP</p>
        <p class="strong m-t-15">Framework</p>
        <p>Vue.js, React.js, jQuery, Laravel</p>
        <p class="strong m-t-15">Twitter</p>
        <p><a href="https://twitter.com/masaakikunsan" target="_blank">@masaakikunsan</a></p>
        <p class="strong m-t-15">Github</p>
        <p><a href="https://github.com/masaakikunsan" target="_blank">https://github.com/masaakikunsan</a></p>
      </section>

      <section class="m-t-30">
        <h1><span class="color-red">B</span>iography</h1>
        <p class="m-t-15">石岡 将明</p>
        <p class="m-t-15">韓国で生まれ5歳から東京で育ち、現在は東京でWebエンジニアをやっている。</p>
        <p class="m-t-15">2016年11月にプログラミングを始め、今に至る。</p>
        <p class="m-t-15">フロントエンドを得意とし、Vue.jsやReact.jsを主に書いている。</p>
        <p class="m-t-15">たまに、デザインやPHPを使ってサーバーサイドの開発をする。</p>
        <p class="m-t-15">最近は、JSLoungeでメンターをやったり、v-meetupのスタッフをやったりした。</p>
      </section>

      <section class="m-t-30 m-b-60">
        <h1><span class="color-red">S</span>NS</h1>
        <p class="m-t-15 flex">
          <img src="~/assets/Twitter_Social_Icon_Square_Color.png">
          <a href="https://twitter.com/masaakikunsan" target="_blank">https://twitter.com/masaakikunsan</a>
        </p>
        <p class="m-t-15 flex">
          <img src="~/assets/FB-f-Logo__blue_512.png">
          <a href="https://www.facebook.com/masaakikunsan" target="_blank">https://www.facebook.com/masaakikunsan</a>
        </p>
        <p class="m-t-15 flex">
          <img src="~/assets/GitHub-Mark-120px-plus.png">
          <a href="https://github.com/masaakikunsan" target="_blank">https://github.com/masaakikunsan</a>
        </p>
        <p class="m-t-15 flex">
          <img src="~/assets/qiita.png">
          <a href="https://qiita.com/masaakikunsan" target="_blank">https://qiita.com/masaakikunsan</a>
        </p>
        <p class="m-t-15 flex">
          <img src="~/assets/glyph-logo_May2016.png">
          <a href="https://www.instagram.com/masaakikunsan" target="_blank">https://www.instagram.com/masaakikunsan</a>
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
  font-size: 23px;
  margin-bottom: 20px;
}

p {
  margin-bottom: 0;
}

.strong {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.profile-wrapper {
  display: flex;
}

.profile-left {
  width: 240px;
  margin-right: 68px;
}

.profile-left img {
  display: block;
  width: 240px;
  height: 240px;
  margin-bottom: 15px;
}

@media screen and (max-width: 939px) {
  h1 {
    font-size: 18px;
    margin-bottom: 0;
  }

  .megumi {
    width: 100%;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .flex img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  .m-b-60 {
    margin-bottom: 60px;
  }
}
</style>
