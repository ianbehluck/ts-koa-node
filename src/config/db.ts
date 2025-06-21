import {Sequelize} from 'sequelize-typescript'
import User from '@/schema/user'
import * as process from 'node:process'

//创建数据库连接实例
const seq = new Sequelize(process.env.DATABASE_NAME, process.env.USER_NAME, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    dialect: 'mysql', // 如 'mysql', 'postgres', 'sqlite', 'mssql' 等
    logging: console.log,
    pool: {
        max: 20, // 连接池最大连接数量
        min: 0, // 连接池最小连接数量
        idle: 10000 // 每个线程最长等待时间
    },
    models: [User]
});

;(async () => {
    try {
        // 这将会根据模型定义创建或更新表结构
        await seq.sync()
        console.log('Database & tables created!')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
})()

export default seq