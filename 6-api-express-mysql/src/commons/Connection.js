import mysql from "promise-mysql";
import config  from "./Constants";

const connection = mysql.createConnection({
    host: '31.220.104.219',
    database: 'u917498081_dev_f',
    user: 'u917498081_js_a',
    password: '3st43sl4c0ntr4s3N14'
});

const getConnection = () =>{
    return connection
};

module.exports = {
    getConnection
}