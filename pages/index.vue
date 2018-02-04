<template>
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
</style>
