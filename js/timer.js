var timeTo = 1454198400;
var time =Date.now();
var result = timeTo - time;
var time_day =document.getElementById('time_day'); 
var time_hour=document.getElementById('time_hour');
var time_min =document.getElementById('time_min');
var time_sec =document.getElementById('time_sec');

/*
time_day.write(result/86400);           
time_hour.write(result%86400/3600);     
time_min.write(result%86400%3600/60);   
time_sec.write(result%86400%3600%60/60);
*/
console.log(Math.abs(timeTo-time));
console.log((result/86400));           
console.log(result%86400/3600);     
console.log(result%86400%3600/60);   
console.log(result%86400%3600%60/60);









