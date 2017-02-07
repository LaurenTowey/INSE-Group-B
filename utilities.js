var mysql = require('mysql');
var config = require('./config.json');

function usernameAvilable(array1, string1)
{
  var l = array1.length;
  var exists = false;
  //check only string 1 exists
  if (checkOrCreate == "create"){
    for (var i=0; i<l;i++) {//not found username
      if (!exists) {//check name list against username
        if (array1[i]!==string1) {//not matching - account avilable
          exists = false;
        } else { //matching - account already made
          exists = true;
          break;
        }
      }
    }
    //returns if the username is avilable
    return !exists;
  }
}

//check both exist and match up
function loginChecker(array1, array2, string1, string2)
{
  for (var i=0; i<l;i++)
  {//not found username
    if (array1[i]!==string1)
    {//not matching
      exists = false;
    }
    else
    { //matching
      //checks password
      if (array2[i]==string2)
      {//password matches
        //res.send("Sucess (Login): " + username + " " + password);
        exists = true;
        break;
      }
      else
      { //not matchiong
        exists = false;
      }
    }
  }

  //returns if the account exists and the password and username match up
  return exists;
}

function queryDatabase(queryString)
{
  var resultsArray = [];
  var sqlCon = mysql.createConnection(config.mysql);

  sqlCon.on('error', function(error) {
    sqlCon.end();
  });

  sqlCon.query(queryString, function (error, data){
    if (error) {
      console.error('failed to query: ', error);
      sql.end();
    }
    else
    {
      data.forEach(function(row){
        results.push(row);
      });
      sqlCon.end();
    }

  });
return resultsArray;
}











module.exports.loginChecker = loginChecker;
module.exports.usernameAvilable = usernameAvilable;
module.exports.queryDatabase = queryDatabase;
