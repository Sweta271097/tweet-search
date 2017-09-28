/**
 * Created by mayankrd on 9/27/17.
 */
const fs = require('fs');

var result = [];

var jsonString = [];

fs.readFile('assignment.txt', 'utf8', function(err,data) {
    if(err) throw err;
    var splitted = data.toString().split("\n");

    console.log(splitted);
    console.log(splitted.length);
    console.log(splitted[2]);

    for (var i = 0; i < splitted.length; i++) {

       var obj = { created_at: "", text: "", user_id: "" };
       var line = splitted[i];
       obj.created_at = line.substr(0, 19);
       obj.user_id = line.substr(line.length-7);

       result.push(obj);
    }

    jsonString = JSON.stringify(result);

    console.log(jsonString);
});

fs.writeFile("./matrixtest.json", JSON.stringify(jsonString), function(err) {

});




