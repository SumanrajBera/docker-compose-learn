import express from 'express'

const app = express()

app.get("/api/message", (req, res) => {
    res.json("Working")
})

export default app