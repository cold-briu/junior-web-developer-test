
const express = require('express')
const cors = require('cors')
const router = require('./src/Routes/main.router')
const { port } = require('./Config/main.config')

const app = express()


app.use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

app.use('/api', router)

app.get("/", (req, res) => {
    res.status(200).send("hello world");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
