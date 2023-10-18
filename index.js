import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'


dotenv.config()

connectDB().then()

const app = express()

app.use(express.json())
app.use(cors())

app.use(express.urlencoded({ extended: false }));

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.get('/', (req,res)=>{
  res.send('Server running successfully')
})



app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)