const mysql = require ('mysql')

class CandyDB { 

    static conect(){
        const connection = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"",
            database:"candy"
        })
        connection.connect()
        return connection
    }

    static getCandies(callback){
        const connection = CandyDB.conect()
        let sql = "select * from candy"
        let query = connection.query(sql,function(err,results,fields){
            callback(results)
        })
            console.log(query.sql)
            connection.end()
    }


}

module.exports = CandyDB
