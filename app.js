import express from 'express'
import router from './src/routes/routes'
import bodyParser from 'body-parser' 
import path from 'path'
const app = express()
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use((req,res,next)=>{
  console.log(req.method,req.url)
  next()
})
app.use('/', router)

module.exports = app