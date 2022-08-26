import { config } from "dotenv"

config();

export default {
    host: process.env.HOST || "31.220.104.219",
    database: process.env.DATABASE || "u917498081_dev_f",
    user: process.env.USER || "u917498081_js_a",
    password: process.env.PASSWORD || "3st43sl4c0ntr4s3N14"
};