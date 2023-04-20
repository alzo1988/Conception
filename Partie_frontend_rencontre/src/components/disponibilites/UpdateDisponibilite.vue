<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title mb-3">Mise a jour d'une Disponibilite</h3>

      <form @submit.prevent="updateADisponibilite">
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
          <input
            v-model="dispo.heure_debut"
            type="time"
            class="form-control"
            id="heure_debut"
          />
        </div>

        <div class="mb-3">
          <label for="heure_fin" class="form-label">Heure de fin</label>
          <input
            v-model="dispo.heure_fin"
            type="time"
            class="form-control"
            id="heure_fin"
          />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useDisponibilite from "../../services/disponibiliteServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const id = route.params.id;

const { updateDisponibilite, getDisponibiliteById } = useDisponibilite();
let dispo = ref({
  nom: '',
  jour: '',
  heure_debut: '',
  heure_fin: ''
});

function updateADisponibilite() {
  updateDisponibilite(id, dispo.value).then((res) => {
    console.log("Disponibilite mis a jour", res);
    router
      .push("/disponibilites")
      .catch((err) =>
        console.log("Erreur lors de la mise a jour de la disponibilite", err)
      );
  });
}

onBeforeMount(() => {
  //On charge les valeurs precedentes du departement avant l'affichage a l'ecran
  if (id) {
    getDisponibiliteById(id)
      .then((res) => {
        dispo.value = res.data;
      })
      .catch((err) =>
        console.log("Erreur lors de la lecture de la dispo", err)
      );
  }
});
</script>

<style lang="scss" scoped>
</style>