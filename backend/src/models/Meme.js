'use strict';
const {
    Model
} = require('sequelize');
const Category = require('./Category');
module.exports = (sequelize, DataTypes) => {
    class Meme extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Meme.hasOne(models.Category);
        }
    };
    Meme.init({
        name: DataTypes.STRING,
        urlfile: DataTypes.STRING,
        CategoryId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Meme',
    });
    return Meme;
};