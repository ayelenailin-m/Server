const express = require("express")
const app = express()

const { newconnection } = require("./bd")
app.get("/", async (request, response) => {
    const connection = await newconnection()
    const results = await connection.query("SELECT * from tabla2")
    response.json(results[0])
    connection.end()
})
app.post("/", (request, response) => {
    response.send("Prueba del server")
})
app.listen(4000)
console.log("servidor iniciado")

app.use(express.json())