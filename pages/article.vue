<template>
  <section>
    <h1><span class="color-green">A</span>rticle</h1>
    <div class="m-t-30 article-data">
      <div v-for="(value, key) in articleData" :key="key" class="table-wrapper">
        <div class="article-img"><img :src="value.image" alt="image"></div>
        <div class="article-title">
          <a :href="value.url" target="_blank">
            {{value.title}}
            <small class="article-url">{{value.url}}</small>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      articleData: [
        {
          image: '/qiita.png',
          title: 'Storybookがなぜ必要か？(Vue.js編)',
          url: 'https://qiita.com/masaakikunsan/items/dad8d84807918f3a43cb'
        }, {
          image: '/qiita.png',
          title: 'CSS transitionで頑張らないVue.js transition',
          url: 'https://qiita.com/masaakikunsan/items/8ff141ebdcdd52c762fb'
        }, {
          image: '/scouter.png',
          title: 'Sass(SCSS)チートシート',
          url: 'http://techblog.scouter.co.jp/entry/2017/06/25/232510'
        }
      ]
    }
  }
}
</script>

<style scoped>
.article-data {
  width: 100%;
  max-width: 780px;
}

.table-wrapper {
  display: flex;
  align-items: center;
  padding: 30px 0;
  border-top: 1px solid #D8D8D8;
  font-size: 18px;
}

.table-wrapper:last-child {
  border-bottom: 1px solid #D8D8D8;
}

.article-img {
  padding-right: 30px;
  padding-left: 25px;
}

.article-img img {
  display: block;
  width: 45px;
  height: 45px;
}

.table-wrapper:last-child .article-img {
  padding-right: 35px;
}

.table-wrapper:last-child .article-img img {
  width: 40px;
}

.article-title {
  font-weight: bold;
}
</style>
