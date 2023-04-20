import { getAllDisponibilites, addDisponibilite, getDisponibiliteById, updateDisponibilite, deleteDisponibilite } from '../controllers/disponibilites.js'
import { Router } from 'express'

const router = Router()
router.get('/', getAllDisponibilites)
    .post('/',  addDisponibilite)
    .get('/:id', getDisponibiliteById)
    .put('/:id', updateDisponibilite)
    .delete('/:id', deleteDisponibilite)

export default router