mydate2 =  document.querySelector("#date")
// let curDate = document.getElementById("date").value;


let weathercon = document.querySelector('.weathercon')
const tempStatus = "clouds";
// console.log(document.querySelector(".mydate"));


const getCurrDay = ()=>{

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let currentTime = new Date();
   let day = (weekday[currentTime.getDay()]);
   return day;
};
const getCurrTime =()=>{
    const months = ["January", "February", "March","April","May","June","July","August","September","October","November","December"];
    var now = new Date();
    var month =months[now.getMonth()];
    var date = now.getDate();


    let hours =now.getHours();
    let mins = now.getMinutes();

    let period = "AM";
    if(hours > 11){

        period ="PM"
        if(hours > 12) hours -= 12;
    }

    if(mins < 10)
    {
        mins = "0"+ mins; 
    }

 return `${month} ${date}| ${hours}: ${mins} ${period}`;
};

mydate2.innerHTML  = `${getCurrDay() } | ${getCurrTime()}`


