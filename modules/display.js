
'use strict'

const sqlite = require('sqlite-async')

module.exports = class Display {

    async list(dbName) 
    {
        try {
            let sql = 'SELECT id, title, price FROM items ORDER BY id DESC LIMIT 9;'
            if (typeof dbName == 'object')
            {
                const data = await dbName.all(sql)
                await dbName.close()
                return data
            } else {
                const db = await sqlite.open(dbName)
                const data = await db.all(sql)
                await db.close()
                return data
            }
        } catch(err) {
            throw err
        }
    }

}