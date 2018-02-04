<template>
  <div class="main">
    <div class="pc">
      <header>
        <div class="header-content">
          <div class="logo">
            <nuxt-link to="/"><p>masaakiku<span class="color-orenge">n</span>sa<span class="color-green">n</span>.com</p></nuxt-link>
          </div>
          <div class="nav-wrapper">
            <nav>
              <ul>
                <li>
                  <nuxt-link to="/biography">
                    <span class="color-red">B</span>iography
                    <small>自己紹介</small>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/career">
                    <span class="color-orenge">C</span>areer
                    <small>経歴</small>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/article">
                    <span class="color-green">A</span>rticle
                    <small>記事</small>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/sns">
                    <span class="color-red">S</span>NS
                    <small>SNS</small>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contact">
                    <span class="color-orenge">C</span>ontact
                    <small>連絡先</small>
                  </nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
    <div class="sp">
      <header>
        <div class="header-content">
          <div class="logo">
            <nuxt-link to="/"><p>masaakiku<span class="color-orenge">n</span>sa<span class="color-green">n</span>.com</p></nuxt-link>
          </div>
        </div>
      </header>
    </div>
    <div class="container">
      <nuxt/>
      <img src="~/assets/sakura.png" alt="sakura" class="card-img">
    </div>
  </div>
</template>

<style>
html {
  font-family: "Avenir Next", "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", Arial, sans-serif;
  font-size: 15px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #fffbfb;
  color: #000;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
  display: block;
  color: inherit;
  cursor: pointer;
}

.main {
  width: 100%;
  height: 100vh;
}

header {
  width: 100%;
  height: 90px;
  background-color: #FFFAF1;
  box-shadow: 0px 1px 3px #c5c5c5;
}

.header-content {
  width: 100%;
  max-width: 940px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 26px;
  color: #E83B66;
  font-weight: bold;
}

.color-red {
  color: #E83B66;
}

.color-orenge {
  color: #F6AB00;
}

.color-green {
  color: #90C31E;
}

nav ul {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
}

nav ul li{
  width: 100px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 18px;
}

nav ul li a:hover {
  opacity: 0.5;
}

nav ul li a.nuxt-link-active {
  opacity: 1;
}

small {
  font-size: 14px;
  color: #999999;
  text-align: center;
  display: block;
}

.container {
  width: 100%;
  max-width: 940px;
  height: 580px;
  margin: 60px auto 0;
  background-color: #fff;
  box-shadow: 2px 3px 8px #c5c5c5;
  padding: 40px;
  position: relative;
}

.card-img {
  position: absolute;
  bottom: 40px;
  right: 40px;
  display: block;
  width: 87px;
  height: 87px;
  opacity: 0.3;
  transform: rotate(19deg);
}

.m-t-15 {
  margin-top: 15px;
}

.m-t-30 {
  margin-top: 30px;
}

.sp {
  display: none;
}

.pc {
  display: block;
}

@media screen and (max-width: 939px) {
  .sp {
    display: block;
  }

  .pc {
    display: none;
  }

  header {
    height: 70px;
    padding: 15px;
  }

  .container {
    height: auto;
    margin: 0 auto;
    width: 100%;
    max-width: inherit;
    padding: 20px;
  }

  .logo {
    font-size: 20px;
  }

  .card-img {
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 20px;
  }
}
</style>
