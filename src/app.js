import express from 'express'
import router from './routes'
import bodyParser from 'body-parser'
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use((req,res,next)=>{
  console.log(req.method,req.url)
  next()
})
app.use('/api', router)

module.exports = app