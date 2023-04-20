<template>
    <div>
        <p>Nom: {{ user.nom }}</p>
        <p>Prenom: {{ user.prenom }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Nom d'utilisateur: {{ user.user_name }}</p>
        <p>Mot de passe: {{ user.password }}</p>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// Nous allons utiliser les props pour passer l'element courant de la liste a notre composant
const props = defineProps({
    user: {
        type: Object,
        default: () => ({
            nom: "",
            prenom: "",
            email:'',
            user_name:'',
            password:''
        }),
    },
});
</script>

<style lang="scss" scoped>
</style>