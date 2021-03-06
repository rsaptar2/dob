const mongoose = require('mongoose')

const Book = mongoose.model('Book', {
    authors: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    publication_date: {
        type: Date,
        required: false
    }

}, "Books")

module.exports = Book