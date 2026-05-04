import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: "http://localhost:5173"
}))

app.get("/api/message", (req, res) => {
    res.status(200).json({
        message: "App is working properly"
    })
})

export default app;