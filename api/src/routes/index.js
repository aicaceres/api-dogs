const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const temperaments = require('./temperaments')
const dogs = require('./dogs')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogs)
router.use('/temperaments', temperaments)

// Pasar error al manejo en app.js
// router.get('/', (req, res, next) => {
//     try {

//     } catch (error) {
//         next(error)
//     }
// })

// router.get('*', (req, res) => {
//     res.sendStatus(400)
// })

module.exports = router;
