import express from 'express'
import * as UserController from '../controllers/UserController'
import * as UserValidation from '../middlewares/UserValidation'
import * as util from '../utils/jobQueryData'
const router = express.Router()
router.get('/',async (req, res) => {
  let jobData = await util.JobCombineData()
  res.render('jobView',{page:'Job View',jobData:jobData})
})
router.get('/api/v1/users',UserController.getUserProfiles)
router.post('/api/v1//users',UserValidation.addUserValidation,UserController.addUserProfiles)
module.exports = router