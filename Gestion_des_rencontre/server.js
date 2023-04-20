

// //Indiquer le port d'ecoute du serveur
// server.listen(5000, ()=>console.log('Serveur running on port 5000'))


import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import passport from 'passport';
import dotenv from 'dotenv'

import database from './connexion.js'

import notreStrategy from './auth/strategies.js'

database.sync()

import disponibiliteRoutes from './routes/disponibiliteRoutes.js';
import userRoutes from './routes/userRoutes.js';

const PORT = process.env.PORT || 5017

// console.log('ENV',dotenv.config().parsed)

const app = express()

app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize())

passport.use(notreStrategy)

app.use('/disponibilite', disponibiliteRoutes)
app.use('/users', userRoutes)
// app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));



app.listen(PORT, () => console.log(`Serveur running on port ${PORT}`))





