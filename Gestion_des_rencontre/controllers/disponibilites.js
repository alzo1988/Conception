import Disponibilite from "../models/Disponibilite.js"
import { validationResult } from "express-validator"

//Chercher la liste de tous les departments
export const getAllDisponibilites = async (req, res) => {


    try {
        const result = await Disponibilite.findAll()
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addDisponibilite = async (req, res) => {
    const { nom, jour, heure_debut, heure_fin } = req.body
    const dispo = { nom,jour, heure_debut, heure_fin }

    //Erreurs de validation

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })   
    }
    console.log("new errors",errors)
    try {
        const result = await Disponibilite.create(dispo)
        res.status(200).json({ data: result, message: "Disponibilite ajoutée avec succes" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}
//
export const getDisponibiliteById = async (req, res) => {
    let { id } = req.params
    if (!id) res.status(400).json({ message: 'Disponibilite Id is required' })

    try {
        const result = await Disponibilite.findByPk(id)
        res.status(201).json({ data: result })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updateDisponibilite = async (req, res) => {
    let { id } = req.params
    const updatedDisponibilite = {nom: req.body.nom, jour: req.body.jour, heure_debut: req.body.heure_debut, heure_fin: req.body.heure_fin }

    if (!id) res.status(400).json({ message: 'Disponibilite Id is required' })
    try {
        const result = await Disponibilite.update(updatedDisponibilite, { where: { id } })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const deleteDisponibilite = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(404).json({ error: true, message: "L'id du disponibilite est requis" })
    try {
        const result = await Disponibilite.destroy({ where: { id } })
        res.status(200).json({ message: `La disponibilite ${id} a ete supprime avec succes` })
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
}