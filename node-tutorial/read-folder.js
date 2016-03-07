var readFolder=function(folderName){
  fs =require('fs');
  var files = fs.readdirSync(folderName);
var listInFiles=[];
  files.forEach(function(fileName){
    var content = fs.readFileSync("./files/week1/"+ fileName, 'utf8');
    var row = content.split('\n');
    row.forEach(function(row){
      listInFiles.push(row);
    });
  });
return listInFiles;

};

exports.linesInFiles = function(folderName){
   var linesInFiles = readFolder(folderName);
   return linesInFiles;
};

exports.linesInFilesAsync=function(folderName, callback){
  var linesInFilesAsync = readFolder(folderName);
  return callback(null, linesInFilesAsync);

};
