import express from 'express'
import * as UserController from './controllers/UserController'
import * as UserValidation from './middlewares/UserValidation'
const router = express.Router()

router.get('/users',UserController.getUserProfiles)

router.post('/users',UserValidation.addUserValidation,UserController.addUserProfiles)

module.exports = router