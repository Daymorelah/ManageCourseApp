 import fs from 'fs';
 import cheerio from 'cheerio'; //allows u to add elements to html docs via an in memory jsdom via jquery selcts.
 import colors from 'colors'; //add colored text in console.
 
 fs.readFile('src/index.html', 'utf8', (err, markup) =>{
  if(err){
    return console.log(err);
  }

  const choose = cheerio.load(markup);
  choose('head').prepend('<link rel="stylesheet" type="text/css" href="style.css">');
   
  fs.writeFile('dist/index.html', choose.html(), 'utf8', (err)=>{
    if(err){
      return console.log(err);
    }
    console.log('index.html written to /dist'.green);
  })

 })