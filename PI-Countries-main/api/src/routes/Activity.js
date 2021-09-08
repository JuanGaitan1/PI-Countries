const { Router } = require('express');
const router = Router();
const {Actividad, Country} = require('../db')


router.post('/', async (req,res)=>{
    console.log("hola");
const {name,dificultad,duracion,temporada,countryid} = req.body
try {
    if(name && dificultad && duracion && temporada){
        let activityCreated = await Actividad.create({
                name,
                dificultad ,
                duracion ,
                temporada,
              })
try {
let country = await Country.findAll({where:{id : countryid}})
        await activityCreated.addCountries(country)
        res.send('actividad creada')
} catch (error) {
            console.log(error)
    }
}
else{
    res.status(404).render("Error no ingresaste los campos correctamente")
    }
} catch (error) {
    console.log(error)
    }
})

module.exports = router;