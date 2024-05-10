import { Sequelize } from "sequelize";

const db = new Sequelize('crud_db', 'root','migrasidata123',{
    host: '34.41.198.39',
    dialect: 'mysql'
});

export default db;