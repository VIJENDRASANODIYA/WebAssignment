const form=document.querySelector("form");
const search=document.getElementById("search");
const img=document.getElementById("img")

const getName=async (data)=>{
    const dataGet=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`)
    const newData= await dataGet.json();
    console.log(newData);
    showData(newData)
    console.log(newData);
}

const showData=async (newData)=>{
   img.innerHTML=` <div id="img">
   <img src="${newData.meals[0].strMealThumb}" alt="img" width="250px">
 </div>`

 search.value=""
}

form.addEventListener("submit",function(event){
    var data=search.value;
    console.log(data);
    event.preventDefault()
    getName(data);
})