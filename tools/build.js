import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';
console.log('Generating minified bundle via webpack for production. This will take a moment...'.blue);

webpack(webpackConfig).run( (err,stats)=>{
  if(err){
    console.log(err.bold.red);
    return 1;
  }
  const jsonStats = stats.toJson();
  if(jsonStats.hasErrors){
    return jsonStats.errors.map( (error) => console.log('the error in build.js is ==> ',error.red))
  }
  if(jsonStats.hasWarnings){
    console.log('webpack generated the following warnings: '.bold.yellow)
    jsonStats.warnings.map( (warning) => console.log('the warning in build.jsis ==>',warning.yellow))
  }
  console.log(`webpack stats is: ${stats}`);
  console.log('App has been compiled in production mode and written to /dist'.green);

  return 0;
})