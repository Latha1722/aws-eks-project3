import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
connectDB()

const app = express()

app.use(express.json())

// ✅ Root test route
app.get('/', (req, res) => {
  res.send('User Service API is running...')
})

// ✅ User routes
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5003
app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`)
})

