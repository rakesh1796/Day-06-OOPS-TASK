var request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
var result = JSON.parse(request.response)
console.log(result);

//Print the capitals as well as the coutry names of 250 countries...

for(var i = 0; i<result.length;i++){
    if(result[i].capital){
    console.log(result[i].capital[0],result[i].name.common)
    }
    else{
        console.log("Data doesn't exist for " + result[i].name.common)
    }
}
 
//Print All the coutry flag URL in console

for(var i=0; i<result.length; i++){
    console.log(result[i].flags.png)

}
}

