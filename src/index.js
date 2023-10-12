import express from "express"
import userRoute from "./routes/user.route.js"

const app = express()
const port = 5000

app.use(express.json())
app.use("/user", userRoute)

app.listen(port, () => {
   console.log(`Running in http://localhost:${port}/user`)
})