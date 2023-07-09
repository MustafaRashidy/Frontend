<template>
  <h1>Unsere Friseure</h1>
  <div class="row" style="padding-left: 20px;">
    <div class="card" style="width: 19rem;">
      <img src="../assets/friseur.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Max Mustermann</h5>
        <p class="card-text">Herzlich Willkommen! Mein Name ist Max Mustermann und ich bin ein leidenschaftlicher Friseur mit langjähriger Erfahrung. Ich bin stolz darauf, meinen Kunden aus Berlin und Umgebung professionelle Friseurdienstleistungen anzubieten.</p>
        <router-link class="btn btn-primary" to="/friseur1view">Profil anzeigen</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Persons'
}

</script>

<style scoped>

</style>
