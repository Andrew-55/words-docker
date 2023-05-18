import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db";

export class IrregularVerbs extends Model {}

IrregularVerbs.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        infinitive: DataTypes.STRING,
        past: DataTypes.STRING,
        pastParticiple: DataTypes.STRING,
        translation: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE

    },
    { 
        sequelize, modelName: "irregular_verbs" 
    }
);