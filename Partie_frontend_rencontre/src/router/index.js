import { createRouter, createWebHistory } from 'vue-router'
import DisponibiliteList from '../components/disponibilites/DisponibiliteList.vue'
import AddDisponibilite from '../components/disponibilites/AddDisponibilite.vue'
import UpdateDisponibilite from '../components/disponibilites/UpdateDisponibilite.vue'
import Login from '../components/users/Login.vue'
import Admin from '../components/users/Admin.vue'
import UserList from '../components/users/UserList.vue'
import AddUser from '../components/users/AddUser.vue'
import UpdateUser from '../components/users/UpdateUser.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    
    {
      path: '/login',
      name: 'login',
      component: Login
    },
   
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/nouvelle-disponibilite',
      name: 'nouveaudispo',
      component: AddDisponibilite
    },
    {
      path: '/disponibilites',
      name: 'home',
      component: DisponibiliteList
    },
    
    

    {
      path: '/mise-a-jour-disponibilite/:id',
      name: 'mise-a-jour',
      component: UpdateDisponibilite
    },
    {
      path: '/nouveau-user',
      name: 'nouveau',
      component: AddUser
    },
    {
      path: '/users',
      name: 'home0',
      component: UserList
    },
    {
      path: '/mise-a-jour-user/:id',
      name: 'mise-a-jour',
      component: UpdateUser
    },
    {
      path: '/utilisateurs',
      name: 'utilisateurs',
    
    }
  ]
})

export default router
