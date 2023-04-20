//Importer la base de donnee pour creer les modeles
import { DataTypes } from "sequelize";
import database from "../connexion.js";

//Modele de la table user
export const User = database.define('User', {
    nom: { type: DataTypes.STRING },
    prenom: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    user_name: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
},
    { //Ajouter cet objet pour ne pas avoir les colonnes createdAt and updatedAt automatiquement
        timestamps: false
    })

export default User



