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
    updateOne(id, changeObj, callback){
        let sqlString = "UPDATE burgers SET ";
        if (typeof changeObj.burger_name !== "undefined"){
            sqlString += "burger_name = \"" + changeObj.burger_name + "\" ";
        }
        if (typeof changeObj.devoured !== "undefined"){
            sqlString += "devoured = \"" + changeObj.devoured + "\" ";
        }
        sqlString += "where id =  " + id;
        test.state.query(sqlString, [], function(err, res){
            if (err){
                throw err
            }
            callback(res);
        }); 

        
    },

    create: function(table, insert_obj, cb) {
        let cols = "";
        let questionmarks = "";
        let vals = [];
        Object.keys(insert_obj).forEach(function(key){
           cols += key + ",";
           questionmarks += "?,";
           vals.push(insert_obj[key]);
        });
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.substring(0, cols.length-1);
        queryString += ") ";
        queryString += "VALUES (";
        queryString += questionmarks.substring(0, questionmarks.length-1);
        queryString += ") ";
    
        console.log(queryString);
    
        test.state.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },

}


module.exports = exportfun;
