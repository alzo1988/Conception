<template>
    <div>
      
        <table border="2px" class="table table-striped">
            <thead>
                <tr>
                    <td>id</td>
                    <td>Nom de l'employé</td>
                    <td>Jour</td>
                    <td>Heure de debut</td>
                    <td>Heure de fin</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dispo in dispos" :key="dispo.id">
                    <td>{{ dispo.id }}</td>
                    <td>{{ dispo.nom }}</td>
                    <td>{{ dispo.jour }}</td>
                    <td>{{ dispo.heure_debut }}</td>
                    <td>{{ dispo.heure_fin }}</td>
        
                    <td>
                        <button class="btn btn-danger" @click="removeDisponibilite(dispo.id)">
                            Delete
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-success" @click=" router.push(`/mise-a-jour-disponibilite/${dispo.id}` )">
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <button @click="router.push('/nouvelle-disponibilite')" class="btn btn-primary">
                Ajouter une disponibilité
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import Disponibilite from "./Disponibilite.vue";
import useDisponibilite from "../../services/disponibiliteServices";
import { useRouter } from "vue-router";

const { getDisponibiliteList, deleteDisponibilite } = useDisponibilite();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des departements venant de la base de donnee
let dispos = ref([]);

const removeDisponibilite = (id) => {
    //Appel de la route de suppression d'un departement (depuis express)
    deleteDisponibilite(id)
        .then((res) => {
            //Si tout se passe bien, on recharge la liste complete des departements pour raffraichir l'ecran
            console.log("Disponibilite supprime");

            //Lecture de la liste complete depuis express
            getDisponibiliteList()
                .then((res) => {
                    console.log("Les resultats", res);
                    dispos.value = res.data;
                })
                .catch((err) =>console.log("Il ya erreur de lectures des disponibilites", err));
        })
        .catch((err) =>
            console.log("Erreur lors de la suppression du disponibilite", err)
        );
};

// Cette fonction permet de charger la liste des departements avant que la page n'apparait a l'ecran
onBeforeMount(() => {
    //Chargement de la liste des departements depuis le backend (express)
    getDisponibiliteList()
        .then((res) => {
            console.log("Les resultats", res);
            dispos.value = res.data;
        })
        .catch((err) =>console.log("Il y a erreur de lectures des disponibilites", err))
});
</script>

<style lang="scss" scoped>
</style>