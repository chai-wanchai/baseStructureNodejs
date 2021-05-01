import express from 'express'
const router = express.Router()
router.get('/',async (req, res) => {
  let jobData = await util.JobCombineData()
  res.render('jobView',{page:'Job View',jobData:jobData})
})
module.exports = router