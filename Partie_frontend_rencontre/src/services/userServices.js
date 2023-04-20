import axios from 'axios'
const useUser = () => {
    async function login(user) {
        const resultat = await axios.post('http://localhost:5000/users/login',user)
        return resultat.data

    }
    async function admin(user) {
        const resultat = await axios.post('http://localhost:5000/users/admin',user)
        return resultat.data

    }
    

    async function getUserList() {
        const resultat = await axios.get('http://localhost:5000/users')
        return resultat.data

    }

    async function addUser(user) {
        const resultat = await axios.post('http://localhost:5000/users', user)
        return resultat

    }

    async function updateUser(id, updatedUser) {
        const resultat = await axios.put(`http://localhost:5000/users/${id}`, updatedUser)
        return resultat

    }

    async function deleteUser(id) {
        const resultat = await axios.delete(`http://localhost:5000/users/${id}`)
        return resultat

    }

    async function getUserById(id) {
        const resultat = await axios.get(`http://localhost:5000/users/${id}`)
        return resultat.data

    }


    return {getUserList, getUserById, addUser, updateUser, deleteUser,login,admin }

}

export default useUser