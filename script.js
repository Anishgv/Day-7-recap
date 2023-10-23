// var object = {
//     "name" : "Anish",
//     "age" : "20"
// }
// object.gender = "M";

// console.log(object.name)


//-----------------------------------------------------------------------------------
//XMLHTTPRequest 
// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all")
// request.send()
// request.onload =function(){
//     var data = request.response
//     console.log(data)
//     console.log(JSON.parse(data));

// }
//----------------------------------------------------------------------------------------------------
//prime number using Function

var num = function(a){
    a = a.filter((ele)=>{
        for(var i = 2 ; i <= Math.sqrt(ele) ; i++){
            if(ele%i===0)
            return false;
        }
        return true;
    })
    return a;
}

console.log(num([1,2,3,4,5,6,7,8,9,19,21]))

//================================================================================================================
// median

var median = function(a,b,n){
    var x =0;
    var y =0;
    var count;
    m1 = -1;
    m2 =-1;
    for(count = 0; count < n; count){
       if(x===n){
        m1 = m2;
        m2 = b[0];
        break;
       } 
       else if(y===n){
        m1 = m2;
        m2 = a[0];
        break;
       }
       if(a[x]<=b[y]){
        m1 = m2;
        m2 = a[x];
        x++;
       }
       else{
        m1= m2;
        m2 = b[y];
        y++;
       }
    }
    return((m1+m2)/2);
}

console.log(median([1,2,3,4,5],[6,7,8,9,10],5))

//========================================================================================================
// rotate a array

var rotate = function(a,k){
    for(var i=0;i<k;i++){
        a.unshift(a.pop());
    }
    return a;
}
console.log(rotate([1,2,3,4,5],3))

//==============================================================================================================
class Movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        if (rating == undefined){

            this.rating = "PG";
        }
        else{
            this.rating = rating;
        }
    }
    getPG(arr){
        var result = [];
        for(var i=0;i<arr.length;i++){
            if(arr[i].rating=="PG"){
                result.push(arr[i])
            }
        }
        return result;
    }
}
var movie1 = new Movie("ABC","marvel")
var movie2 = new Movie("XYZ","DC","PG15")
var movie3 = new Movie("CDE","FA")
var movie4 = new Movie("YXT","DA","PG13")
//console.log(movie1,movie2)
var arr = [movie1,movie2,movie3,movie4];
console.log(movie2.getPG(arr))

//======================================================================================================================
 var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send()
request.onload =function(){
    var data = request.response
    var result =JSON.parse(data);
    var res = result.filter((ele)=>{
        for(let key in ele.currencies){
            if(ele.currencies[key].code==="USD"){
                console.log(ele.name)
            }
        }
    })
  
}
//============================================================================================================



