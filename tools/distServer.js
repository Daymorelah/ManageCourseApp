import express from "express";
import path from 'path';
import compression from 'compression';

/*eslint-disable no-console */
const port = 3001;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('*', (req, res) =>{
  res.sendfile(path.resolve(__dirname, '../dist/index.html'));
})

app.listen(port, (err) =>{
  if(err){
    console.log(err);
  }else{
    console.log(`server is up and listening on port ${port} ...`);
  }
})