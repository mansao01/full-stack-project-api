import {Sequelize} from "sequelize";

const db = new Sequelize("full_Stack", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

export default db