const form= document.querySelector("form");
const  quote=document.querySelector("#quote");
const author=document.querySelector("#author");
const btn=document.querySelector("#btn");
const get=document.querySelector("#get");



const getQuote= async()=>{
    const res=fetch("https://type.fit/api/quotes");
    const data=await (await res).json();
    const num=Math.floor(Math.random()*data.length);
    const item=data[num];

    const t=item.text;
   
    const a=item.author;
    quote.innerText=`"${t},,`;
    author.innerText=` ~ ${a}`;




}
btn.addEventListener("click",getQuote)


    getQuote()

