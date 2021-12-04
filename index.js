import express from "express"
import Cors from "cors"

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(Cors())

app.get('/', (req, res) => {
    res.send({ hello: 'world' })
})

app.listen(port, () => console.log(`Server listen on port ${port}`))

export default app