
const express = require('express');
const path = require('path');
const fs = require('fs')
var app = express();
var requests = require("requests");
app.use(express.static(__dirname + '/public'));

const homefile = fs.readFileSync("./public/home.html","utf-8")


 const replaceval =(tempval,orgval)=>{

let temperature = tempval.replace("{%tempval%}",(orgval.main.temp-273.15).toFixed(2));
      temperature = temperature.replace("{%tempmin%}",(orgval.main.temp_min-273.15).toFixed(2));
      temperature = temperature.replace("{%tempmax%}",(orgval.main.temp_max-273.15).toFixed(2));
      temperature = temperature.replace("{%location%}",orgval.name);
      temperature = temperature.replace("{%country%}",orgval.sys.country);

     
        return temperature;

 };

app.listen(3001,()=>{
    console.log("express server is running")
});

app.get('/',(req,res)=>{

    requests("https://api.openweathermap.org/data/2.5/weather?q=Noida&appid=fcbbe6fe0ce64018c78c9ab29f3e0d93")

.on('data', (chunk) =>{

    const objdata =JSON.parse(chunk);
    const ardata = [objdata];
//   console.log(ardata[0].main.temp)
    const realTimeData = ardata.map((val)=> replaceval(homefile,val)).join("");
    res.write(realTimeData);
    // console.log(realTimeData);
    
})
.on('end', (err)=> {
  if (err) return console.log('connection closed due to errors', err);
 res.end();
});

  
});


  
   


