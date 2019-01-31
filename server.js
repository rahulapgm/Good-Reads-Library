const express = require('express');
const fs = require('fs');
const path = require("path");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/bookList', (req, res) => {
  
  var obj;
    fs.readFile(path.resolve(__dirname+'/data.json'), 'utf8', function (err, data) {
      if (err) throw err;
      obj = JSON.parse(data);
      res.json({obj});
    });
    
    
});    

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}



app.listen(port, () => console.log(`Listening on port ${port}`));