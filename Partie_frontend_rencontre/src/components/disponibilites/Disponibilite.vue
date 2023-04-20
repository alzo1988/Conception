<template>
    <div>
        <p>Nom de l'employé: {{ dispo.nom }}</p>
        <p>Jour: {{ dispo.jour }}</p>
        <p>Heure de début: {{ dispo.heure_debut}}</p>
        <p>Heure de fin: {{ dispo.heure_fin }}</p>
        
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// Nous allons utiliser les props pour passer l'element courant de la liste a notre composant
const props = defineProps({
    dispo: {
        type: Object,
        default: () => ({
            nom: "",
            jour: "",
            heure_debut: "",
            heure_fin:''
        }),
    },
});
</script>

<style lang="scss" scoped>
</style>