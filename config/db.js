import { Sequelize } from "sequelize";

const database = new Sequelize('good_news', 'root', 'root', {
    host: 'localhost',
    dialect: "mysql",
    logging: false
});



export default database; 