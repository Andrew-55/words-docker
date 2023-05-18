"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrregularVerbs = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
class IrregularVerbs extends sequelize_1.Model {
}
exports.IrregularVerbs = IrregularVerbs;
IrregularVerbs.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    infinitive: sequelize_1.DataTypes.STRING,
    past: sequelize_1.DataTypes.STRING,
    pastParticiple: sequelize_1.DataTypes.STRING,
    translation: sequelize_1.DataTypes.STRING,
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE
}, {
    sequelize: db_1.sequelize, modelName: "irregular_verbs"
});
