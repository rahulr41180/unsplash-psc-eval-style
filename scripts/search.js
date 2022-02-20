
import {MakeApiCall,AppendData} from "../scripts/main.js";

//console.log("MakeApiCall :",MakeApiCall);
//console.log("AppendData :",AppendData);
document.querySelector("#HomeIconBox").addEventListener("click",Home);
function Home()
{
    window.location.href = "index.html";
}
let SearchTermsName = localStorage.getItem("SearchTerms");
console.log("SearchTermsName :",SearchTermsName);

let url = `https://api.unsplash.com/search/photos?page=1&per_page=30&order_by=latest&query=${SearchTermsName}&client_id=cEPQEpwO73-RUy7Hd47CSZcfv_1MOKDO2UFb9n8CPZ8`;
let res = MakeApiCall(url);
let data = await res;

console.log("data :",data);
console.log("data1 :",data.results);

let parent = document.querySelector("#GridContainer");
AppendData(data.results,parent);