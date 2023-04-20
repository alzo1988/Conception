<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title mb-3">Ajout d'une nouvelle disponibilité</h3>
<form @submit.prevent="addNewDisponibilite">
  <div class="mb-3">
    <label for="nom" class="form-label">Nom de l'employé</label>
    <input v-model="dispo.nom" type="text" class="form-control" id="nom">
  </div>
  <div class="mb-3">
    <label for="jour" class="form-label">Jour</label>
    <select v-model="dispo.jour" id="jour" class="form-select">
      <option value="" disabled selected>Choisissez un jour</option>
      <option value="lundi">Lundi</option>
      <option value="mardi">Mardi</option>
      <option value="mercredi">Mercredi</option>
      <option value="jeudi">Jeudi</option>
      <option value="vendredi">Vendredi</option>
    </select>
  </div>

  <div class="mb-3">
    <label for="heure_debut" class="form-label">Heure de début</label>
    <input v-model="dispo.heure_debut" type="time" class="form-control" id="heure_debut">
  </div>

  <div class="mb-3">
    <label for="heure_fin" class="form-label">Heure de fin</label>
    <input v-model="dispo.heure_fin" type="time" class="form-control" id="heure_fin">
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import useDisponibilite from '../../services/disponibiliteServices';
import { useRouter } from 'vue-router';

const { addDisponibilite } = useDisponibilite();
const router = useRouter();

let dispo = ref({
  nom:'',
  jour: '',
  heure_debut: '',
  heure_fin: ''
});

function addNewDisponibilite() {
  addDisponibilite(dispo.value)
    .then(res => {
      console.log('Nouvelle disponibilité', res);
      router.push('/disponibilites');
    })
    .catch(err => console.log('Erreur lors de l\'ajout', err));
}

</script>
<style lang="scss" scoped>
</style>