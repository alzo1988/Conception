import User from "./User.js";
import Role from "./Role.js";
import Disponibilite from "./Disponibilite.js";


//Les relations
User.belongsToMany(Role,{through:'UserRole'})
Role.belongsToMany(User,{through:'UserRole'})


// Relation entre Utilisateur et Reservation : Un utilisateur peut faire plusieurs réservations
User.hasMany(Disponibilite, { foreignKey: 'id_utilisateur' });
Disponibilite.belongsTo(User, { foreignKey: 'id_utilisateur' });







export {Disponibilite, User, Role};