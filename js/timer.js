

var timeto = function(timeA,timeB){if( timeA > timeB ){return (timeB+12)-timeA}else{return timeB-timeA} }



var time = new Date();
var to = {'year':2016,'month':1,'day':31};
document.write(timeto(to.month,time.getMonth));










