
/*
time_day.write(result/86400);           
time_hour.write(result%86400/3600);     
time_min.write(result%86400%3600/60);   
time_sec.write(result%86400%3600%60/60);
*/ 
var x = function()  {
var timeTo = 1454198400;
var time =Date.now();
var result = (timeTo) - (time/1000);
    

document.getElementById('time_day').innerHTML=Math.floor(result/86400);          
document.getElementById('time_hour').innerHTML=Math.floor(result%86400/3600);    
document.getElementById('time_min').innerHTML=Math.floor(result%86400%3600/60);  
document.getElementById('time_sec').innerHTML=Math.floor(result%86400%3600%60);

};

setInterval(x,1000);










