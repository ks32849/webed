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
     res.end();
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
      console.log("Save failed")
    }
  });
}

openFile = function(filepath) {
  console.log("Open file " + filepath);
  var content;
  var stat;
  var dir;

  try {
    stat = fs.statSync(filepath);
    if (stat.isFile()) {
      content = fs.readFileSync(filepath);
    }
    else if (stat.isDirectory()) {
      dir = fs.readdirSync(filepath);
      content = new Buffer('');
      for(var i=0; i<dir.length; i++) {
        content = Buffer.concat([content, new Buffer(dir[i] + '\n')]);
      }
    }
    else {
      content = new Buffer('');
    }
    
  }
  catch (err) {
    console.log("Open failed");
    content = new Buffer('');
  }
  return content;
}
