import axios from 'axios'
const useDisponibilite = () => {

    async function getDisponibiliteList() {
        const resultat = await axios.get('http://localhost:5000/disponibilite')
        return resultat.data

    }

    async function addDisponibilite(dispo) {
        const resultat = await axios.post('http://localhost:5000/disponibilite', dispo)
        return resultat

    }

    async function updateDisponibilite(id, updatedDisponibilite) {
        const resultat = await axios.put(`http://localhost:5000/disponibilite/${id}`, updatedDisponibilite)
        return resultat

    }

    async function deleteDisponibilite(id) {
        const resultat = await axios.delete(`http://localhost:5000/disponibilite/${id}`)
        return resultat

    }

    async function getDisponibiliteById(id) {
        const resultat = await axios.get(`http://localhost:5000/disponibilite/${id}`)
        return resultat.data

    }


    return { getDisponibiliteList, addDisponibilite, updateDisponibilite, deleteDisponibilite, getDisponibiliteById }

}

export default useDisponibilite