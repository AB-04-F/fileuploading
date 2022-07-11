const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "files", {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            file_name: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            file_path: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            file_desc: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        }, {
            sequelize,
            tableName: "files",
            timestamps: false,
            indexes: [{
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [{ name: "id" }],
            }, ],
        }
    );
};