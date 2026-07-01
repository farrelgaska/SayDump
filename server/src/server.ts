import dotenv from 'dotenv'
import app from './app.js'

// Load environment variables
dotenv.config()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`[SayDump Server] Running in ${process.env.NODE_ENV || 'development'} mode on http://localhost:${PORT}`)
})
