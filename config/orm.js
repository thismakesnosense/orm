const connnection = require("./connection");

let test = connnection.init();



let exportfun = {
    selectAll(callback){
       test.state.query("SELECT * FROM burgers", [], function(err, res){
           if (err) {
            throw err
           }
           callback(res);
       }); 
       
    },

}


module.exports = exportfun;
