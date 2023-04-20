import { User } from '../models/index.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

// import dotenv from 'dotenv'
// const tokenSecret = dotenv.config().parsed.TOKEN_SECRET

// await Address.sync()
export const userAdmin = async (req, res) => {
    const { user_name, password } = req.body
    if (user_name) {
        try {
            const user = await User.findOne({ where: { user_name } })
            // console.log("User pass", user, "req pass", password)

            if (!user) res.status(404).json({ message: "No such user exists" })

            //Verification en comparant les mots de passe
            const verifyPassword = await bcrypt.compare(password, user.password)

            //Si les mots de passe sont identiques
            if (verifyPassword) {
                let payload = { id: user.id }
                let token = jwt.sign(payload, process.env.TOKEN_SECRET)
                res.status(200).json({ data: { user, token } })
            } else {
                res.status(401).json({ message: "Le mot de passe est incorrect" })
            }

        } catch (error) {
            res.status(401).json({ message: error.message })
        }
    }
}
export const userLogin = async (req, res) => {
    const { user_name, password } = req.body
    if (user_name) {
        try {
            const user = await User.findOne({ where: { user_name } })
            // console.log("User pass", user, "req pass", password)

            if (!user) res.status(404).json({ message: "No such user exists" })

            //Verification en comparant les mots de passe
            const verifyPassword = await bcrypt.compare(password, user.password)

            //Si les mots de passe sont identiques
            if (verifyPassword) {
                let payload = { id: user.id }
                let token = jwt.sign(payload, process.env.TOKEN_SECRET)
                res.status(200).json({ data: { user, token } })
            } else {
                res.status(401).json({ message: "Le mot de passe est incorrect" })
            }

        } catch (error) {
            res.status(401).json({ message: error.message })
        }
    }
}

export const getUserById = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ message: 'Id est obligatoire' })
    try {
        const result = await User.findByPk(id, { include: 'Roles' })
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addUser = async (req, res) => {

    const {nom,prenom,email, user_name, password } = req.body

    //hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = {nom,prenom,email,user_name, password: hashedPassword }

    try {
        const result = await User.create(newUser)
        res.status(201).json({ data: result, message: 'Utilisateur cree avec succes' })
        // res.redirect('/users/login')
    } catch (error) {
        res.status(400).json({ error: true, message: error.message })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const result = await User.findAll({ include: 'Roles' })
        res.status(200).json({ data: result, message: "Tous les utilisateurs recus" })

    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}

export const createUserRole = async (req, res) => {
    const userId = req.params.id
    if (!userId) res.status(404).json({ error: true, message: error.message })

    const { nom } = req.body
    const newRole = { nom }

    try {
        const currentUser = await User.findByPk(userId)
        const result = await currentUser.createRole(newRole)
        res.status(201).json({ data: result, message: 'Role ajoute' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getUserRole = async (req, res) => {
    const userId = req.params.id
    if (!userId) res.status(404).json({ error: true, message: error.message })


    try {
        const currentUser = await User.findByPk(userId)
        const result = await currentUser.getRoles()
        res.status(200).json({ data: result, message: 'Roles retournes' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
    export const updateUser = async (req, res) => {
        let { id } = req.params
        const updatedUser = { nom: req.body.nom, prenom: req.body.prenom, email: req.body.email,user_name: req.body.user_name,password: req.body.password }
    
        if (!id) res.status(400).json({ message: 'User Id is required' })
        try {
            const result = await User.update(updatedUser, { where: { id } })
            res.status(200).json(result)
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    
    }
    
    export const deleteUser = async (req, res) => {
        const { id } = req.params
        if (!id) res.status(404).json({ error: true, message: "L'id du user est requis" })
        try {
            const result = await User.destroy({ where: { id } })
            res.status(200).json({ message: `Le user ${id} a ete supprime avec succes` })
        } catch (error) {
            res.status(404).json({ error: true, message: error.message })
        }
}
