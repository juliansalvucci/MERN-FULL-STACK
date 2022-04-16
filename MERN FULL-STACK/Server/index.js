import express from "express"; //  "type": "module", en package.json para que funcione.
const app = express()

app.listen(4000)
console.log('Server is running on port', 4000)