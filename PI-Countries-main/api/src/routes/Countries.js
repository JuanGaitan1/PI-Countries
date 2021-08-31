const { Router } = require('express');
const router = Router();
const axios = require ('axios');
const {Actividad, Country} = require('../db')


router.get('/', async (req, res) =>{
    let Name = req.query.name
    console.log(Name);
    if (Name) {
        try{
        const paQuery = await Country.findOne({where: {name: Name}, include: Actividad})
        if (paQuery) {
            var PId = {
                id: paQuery.id,
                Nombre: paQuery.name,
                Bandera: paQuery.img,
                Continente: paQuery.continente,
                Capital: paQuery.capital,
                Subregion: paQuery.subregion,
                Area: paQuery.area,
                Poblacion: paQuery.poblacion
            }
            return res.json(PId)
        }else{
            return res.send('No se encontro el pais que estas buscando')
        }
        }catch(err){
            console.log(err);
        }
    }
try{
    const paisesBd = await Country.findAll({})
    return res.json(paisesBd)
}catch(err){
    console.log(err);
}
})

router.get('/:id', async (req,res)=>{
    const {id} = req.params;
try{
    if (id.length > 2) {
        var ap = await Country.findOne({where: {id: id}, include: Actividad})
        if (ap) {
            var paisesId = {
                id: ap.id,
                Nombre: ap.name,
                Bandera: ap.img,
                Continente: ap.continente,
                Capital: ap.capital,
                Subregion: ap.subregion,
                Area: ap.area,
                Poblacion: ap.poblacion
            }
            return res.json(paisesId)
        }
        return res.send("No existe este pais")
    }
    return res.send("No existe este pais")
}catch(err){

}
})


module.exports = router;