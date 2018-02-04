<template>
  <section>
    <h1><span class="color-orenge">C</span>areer</h1>
    <div class="m-t-30 career-data">
      <div v-for="(value, key) in careerData" :key="key" class="table-wrapper">
        <div class="date">{{value.date}}</div>
        <div class="company">{{value.company}}</div>
        <div class="position">{{value.position}}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      careerData: [
        {
          date: '2017.11~',
          company: '株式会社viviane',
          position: 'フロントエンドエンジニア'
        }, {
          date: '2017.10~',
          company: '株式会社Queue',
          position: 'フロントエンドエンジニア'
        }, {
          date: '2016.11~2017.10',
          company: '株式会社SCOUTER',
          position: 'エンジニア・フロントレビュー責任者'
        }, {
          date: '2016.11~2017.01',
          company: 'キスリー株式会社',
          position: 'エンジニア'
        },
      ]
    }
  }
}
</script>

<style scoped>
.career-data {
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

.date {
  padding-left: 25px;
  width: 220px;
}

.company {
  font-weight: bold;
  width: 220px;
}
</style>
