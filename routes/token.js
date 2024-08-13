const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

const TOKEN_SECRET = process.env.TOKEN_SECRET

router.get('/', async function(req, res, next) {
  try {
    const payload = {
      exp: Math.floor(Date.now() / 1000) + (60 * 60), 
      data: 'foobar'
    };

    const token = jwt.sign(payload, TOKEN_SECRET);

    res.render('token', { title: 'Express', Token: token });

  } catch (error) {
    console.error('Error al generar el token:', error);
    res.status(500).json({ message: 'Error al generar el token', error: error.message });
  }
});

module.exports = router;