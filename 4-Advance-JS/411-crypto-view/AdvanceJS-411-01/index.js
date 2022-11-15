var form=document.querySelector("form");
var btnRef=document.getElementById("search");
var input=document.getElementById("search-field")
var grid=document.getElementsByClassName("grid")
var msg=document.getElementsByClassName("message")

let getData=async(searchValue)=>{

const dataGet=await fetch(`https://api.unsplash.com/search/photos/?query=${searchValue}&client_id=KyGhG3PCo9KC9OvDd5JgKOJAv2Z2nUkPEqNkh3sKHU4`)
const newData= await dataGet.json();
console.log(newData);
showData(newData)
// console.log(newData);
}

const showData= (newData)=>{
 
   console.log(newData);
    document.getElementById("img").src=newData.results[0].urls.regular;
}
  


form.addEventListener("submit",function(e){
    console.log(e);
    console.log(input.value);
    var searchValue=input.value;
    getData(searchValue)
    e.preventDefault()

})