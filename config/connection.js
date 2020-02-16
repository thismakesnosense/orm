
const mysql = require("mysql");


let connection = {
    state: false,
    connect(){
       this.state = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Moosemoney7!",
        database: "burgers_db"
      });
      this.state.connect(function (err) {
        if (err) {
          console.error("error connecting: " + err.stack);
          return;
        }
      
        console.log("connected as id " + connection.threadId);
        
      });
    },

    init(){
        if (! this.state){
            this.connect();
        }
        return this;
    }
}






 module.exports =  connection; 

