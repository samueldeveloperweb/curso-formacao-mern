import express from "express"

const app = express()
const port = 5000

app.get("/", (req, res) => {
   res.send("Project Started...")
})

app.listen(port, () => {
   console.log(`Running in http://localhost:${port}/`)
})