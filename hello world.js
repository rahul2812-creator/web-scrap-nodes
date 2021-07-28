const request = require('request');
const cheerio = require('cheerio');
//feature request
console.log("before");
request('https://www.worldometers.info/coronavirus/',cb);

function cb(error,response,html){
    if(error){
        console.error('error:',error);
    }else{
        handlehtml(html);
    }
    
    
}
function handlehtml(html){
    let seltool=cheerio.load(html);
let h1s=seltool("h1");   
console.log(h1s.length); 
}