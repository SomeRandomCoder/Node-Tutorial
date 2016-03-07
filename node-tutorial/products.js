var productNames = function(fileName, callback){
  var fs=require('fs');
var products = fs.readFile(fileName);
var list=[];
  files.forEach(function(products){
    var content = fs.readFile("./files/products.csv", "utf8", callback);
    var row= content.split('\n');
    row.forEach(function(row){
      list.push(row);
    });
  });
  return list;
};
exports.list = function(folderName){
  var list = productNames(folderName);
  return list;
}
