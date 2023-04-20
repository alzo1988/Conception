import database from "../connexion.js";
import { DataTypes } from 'sequelize'

const Disponibilite = database.define('Disponibilite', {
  nom: { type: DataTypes.STRING },
  jour: {
    type: DataTypes.ENUM('lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'),
    allowNull: false
  },
  heure_debut: {
    type: DataTypes.TIME,
    allowNull: false
  },
  heure_fin: {
    type: DataTypes.TIME,
    allowNull: false
  }
})

export default Disponibilite;

  