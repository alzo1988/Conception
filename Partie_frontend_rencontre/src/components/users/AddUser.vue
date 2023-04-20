<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Ajout d'un nouveau utilisateur</h3>

            <form @submit.prevent="addNewUtilisateur">
                <div class="mb-3">
                    <label for="nom" class="form-label">Nom</label>
                    <input
                        v-model="user.nom"
                        type="text"
                        class="form-control"
                        id="nom"
                        placeholder="Entrer le nom"
                    />
                </div>

                <div class="mb-3">
                    <label for="prenom" class="form-label"
                        >Prenom</label>
                    <input
                        v-model="user.prenom"
                        type="text"
                        class="form-control"
                        id="prenom"
                        placeholder="Entrer le prenom"
                    />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label"
                        >Email</label
                    >
                    <input
                        v-model="user.email"
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Entrer votre email"
                    />
                </div>
                <div class="mb-3">
                    <label for="user_name" class="form-label"
                        >Nom d'utilisateur</label
                    >
                    <input
                        v-model="user.user_name"
                        type="text"
                        class="form-control"
                        id="user_name"
                        placeholder="Entrer votre nom d'utilisateur"
                    />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label"
                        >Mot de passe</label
                    >
                    <input
                        v-model="user.password"
                        type="text"
                        class="form-control"
                        id="password"
                        placeholder="Entrer votre mot de passe"
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import useUser from "../../services/userServices";
import { useRouter } from "vue-router";

// Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();

const { addUser } = useUser();
let user = ref({
    nom: "",
    prenom: "",
    email: "",
    user_name: "",
    password: "",
});
function addNewUtilisateur() {
    //Appel de notre route dans le backend (express) pour ajouter un departement
    addUser(user.value)
        .then((res) => {
            //Si tout se passe bien ce message apparait dans la console
            console.log("Nouveau utilisateur", res);
            //On va etre redirige vers la table des departements
            router.push("/users");
        })
        .catch((err) => console.log("Erreur lors de l'ajout", err));
}
</script>

<style lang="scss" scoped>
</style>