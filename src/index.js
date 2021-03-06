const mongoose = require('./db/mongoose')
const express = require('express')
const Book = require('./models/book')
const cors = require('cors')

var app = express();

const port = 4000


app.use(express.json())
app.use(cors())

app.post('/api/author', async (req, res) => {
    console.log(req.body.author)
    try{
        books = await Book.find({
            authors : {
                $elemMatch: {
                    $regex: `.*${req.body.author}.*`,
                    $options: 'i'
                }
            }
        })
        res.send(books)
    }
    catch{
        res.send([])
    }
})

try{
    app.listen(port, () => {
        console.log(`Server started on port ${port}`)
    })
}
catch {
    app.listen(port + 1, () => {
        console.log(`Server started on port ${port}`)
    })
}

