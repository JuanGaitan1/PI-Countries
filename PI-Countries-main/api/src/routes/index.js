const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const CoutriesRoutes = require('./Countries');
const ActivityRoutes = require('./Activity');


router.use('/paises', CoutriesRoutes);
router.use('/actividades', ActivityRoutes);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
