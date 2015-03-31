/*Define dependencies.*/
var fs = require('fs');
var express=require("express");
var bodyParser = require('body-parser')

var app=express();
var done=true;

app.use(bodyParser.urlencoded({ extended: false }))


/*Handling routes.*/

app.get('/',function(req,res){
       res.sendfile("index.html");
});

app.get('/open',function(req,res){
   if(done==true){
     console.log("opening...");
     content = openFile(req.query.fn);
     res.send(content.toString());
   }
});

app.post('/save',function(req,res){
   if(done==true){
     console.log("saving...");
     saveFile(req.body.fn, req.body.data);
     res.end("File uploaded.");
   }
});

/*Run the server.*/
app.listen(9778,function(){
     console.log("Working on port 9778");
});

saveFile = function(filepath, data) {
  console.log("Save file", filepath);
  fs.writeFile(filepath, data, function (err) {
    if (err) {
      throw err;
    }
  });
}

openFile = function(filepath) {
  console.log("Open file " + filepath);
  var content;
  /* This is async, so the callback is called some time later after we have returned!
   fs.readFile(filepath, function (err, data) {
    if (err) {
      throw err;
    }
    content = data.toString();
  });
*/
  try {
    content = fs.readFileSync(filepath);
  }
  catch (err) {
    content = new Buffer('');
  }
  return content;
}
