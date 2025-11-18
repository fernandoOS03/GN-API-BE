import { Sequelize } from "sequelize";

const database = new Sequelize('good_news', 'root', 'admin123', {
    host: 'localhost',
    dialect: "mysql",
    logging: false
});



export default database; 