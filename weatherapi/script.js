 var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data =JSON.parse(this.response);
    for(var i =0;i<=data.length;i++){
        var coor= data[i].latlng;
        var name= data[i].name;
        var lat=parseFloat(coor[0]);
        var lon=parseFloat(coor[1]);
        //console.log(name,lat,lon)
        request.onload=weather(name,lat,lon)  
    }
}
var weather= function(name,lat,lon){
    var request = new XMLHttpRequest();
    var url='http://api.openweathermap.org/data/2.5/weather?lat='+ lat+
        '&lon=' +lon +
        '&appid=9e3fd4776e7b4669e6b4dbc0fb556a4e';
        //console.log(url)
        request.open('GET',url,true);
        request.send();
        request.onload=function(){
            var res=JSON.parse(this.response);
                console.log(name + ":" + res.main.temp)
        }
}
