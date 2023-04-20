import { Router } from "express";
import { addUser, getAllUsers,getUserById,updateUser,deleteUser,userLogin,userAdmin} from "../controllers/users.js";

const router = Router()

router.post('/', addUser)
router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/login', userLogin)
router.post('/admin', userAdmin)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
export default router

