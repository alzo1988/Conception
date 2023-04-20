<template>
    <div>
        
        <table border="2px" class="table table-striped">
            <thead>
                <tr>
                    <td>id</td>
                    <td>Nom</td>
                    <td>Prenom</td>
                    <td>Email</td>
                    <td>Nom d'utilisateur</td>
                    <td>Mot de passe</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.nom }}</td>
                    <td>{{ user.prenom }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.user_name }}</td>
                    <td>{{ user.password }}</td>
                    <td>
                        <button class="btn btn-danger" @click="removeUser(user.id)">
                            Delete
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-success" @click=" router.push(`/mise-a-jour-user/${user.id}` )">
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <button @click="router.push('/nouveau-user')" class="btn btn-primary">
                Ajouter un nouveau utilisateur
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import User from "./User.vue";
import useUser from "../../services/userServices";
import { useRouter } from "vue-router";

const { getUserList, deleteUser } = useUser();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des departements venant de la base de donnee
let users = ref([]);

const removeUser = (id) => {
    //Appel de la route de suppression d'un departement (depuis express)
    deleteUser(id)
        .then((res) => {
            //Si tout se passe bien, on recharge la liste complete des departements pour raffraichir l'ecran
            console.log("User supprime");

            //Lecture de la liste complete depuis express
            getUserList()
                .then((res) => {
                    console.log("Les resultats", res);
                    users.value = res.data;
                })
                .catch((err) =>console.log("Il ya erreur de lectures des users", err));
        })
        .catch((err) =>
            console.log("Erreur lors de la suppression du user", err)
        );
};

// Cette fonction permet de charger la liste des departements avant que la page n'apparait a l'ecran
onBeforeMount(() => {
    //Chargement de la liste des departements depuis le backend (express)
    getUserList()
        .then((res) => {
            console.log("Les resultats", res);
            users.value = res.data;
        })
        .catch((err) =>console.log("Il y a erreur de lectures des users", err))
});
</script>

<style lang="scss" scoped>
</style>