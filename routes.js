const express = require('express');
const router = express.Router();
const contact = require('./contact');
const book = require('./book');

router.get('/', (req, res) => {
    res.send('Welcome');
});

router.post('/contact', contact);

router.post('/book', book);

module.exports = router;