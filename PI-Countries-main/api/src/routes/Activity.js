const { Router } = require('express');
const router = Router();
const {Actividads, Country} = require('../db')


router.post('/', async (req,res)=>{
const {name,dificultad,duracion,temporada,countryid} = req.body
try {
    if(name && dificultad && duracion && temporada){
        let activityCreated = await Actividads.create({
                name,
                dificultad ,
                duracion ,
                temporada,
              })
try {
let country = await Country.findAll({where:{id : countryid}})
        await activityCreated.addCountries(country)
        res.send(country)
} catch (error) {
            console.log(error)
    }
}
else{
    res.status(404).send("Error no ingresaste los campos correctamente")
    }
} catch (error) {
    console.log(error)
    }
})

router.get('/', async (req,res)=>{
let actividadesCreadas = await Actividads.findAll({})
res.json(actividadesCreadas)
})

module.exports = router;