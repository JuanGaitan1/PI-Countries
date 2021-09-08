const { Router } = require('express');
const router = Router();
const {Actividad, Country} = require('../db')
const {Op} = require('sequelize')
 

router.get('/', async (req, res) =>{
let Name = req.query.name
    if (Name) {
        try{
        let paQuery = await Country.findAll({
            where:{name:{[Op.iLike]: '%' + Name + '%'}}})
        if (!paQuery.length) {
            return res.status(404).json('No se encontro el pais que estas buscando')
        }else{
            return res.json(paQuery)
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