const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img:{
      type: DataTypes.STRING
    },
    continente:{
      type: DataTypes.STRING
    },
    capital:{
      type: DataTypes.STRING
    },
    subregion:{
      type: DataTypes.STRING
    },
    area:{
      type: DataTypes.INTEGER
    },
    poblacion:{
      type: DataTypes.INTEGER
    },
  },
  {timestamps: false}
  );

};
