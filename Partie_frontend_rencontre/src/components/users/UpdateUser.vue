<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Mise a jour d'un utilisateur</h3>

            <form @submit.prevent="updateAUtilisateur">
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
import { onBeforeMount, ref } from "vue";
import useUser from "../../services/userServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const id = route.params.id;

const { updateUser, getUserById } = useUser();
let user = ref({
    nom: "",
    prenom: "",
    email: "",
    user_name: "",
    password: "",
});

function updateAUtilisateur() {
    updateUser(id,user.value)
        .then((res) => {
            console.log("User mis a jour", res);
            router.push("/users")
        .catch((err) =>console.log("Erreur lors de la mise a jour du user", err));
        })
}

onBeforeMount(() => {
    //On charge les valeurs precedentes du departement avant l'affichage a l'ecran
    if (id) {
        getUserById(id)
            .then((res) => {user.value = res.data})
            .catch((err) =>console.log("Erreur lors de la lecture du departement", err))
    }
})
</script>

<style lang="scss" scoped>
</style>