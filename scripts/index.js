
import {sidebar} from "../components/sidebar.js";

import {MakeApiCall,AppendData} from "../scripts/main.js";
//console.log("MakeApiCall :",MakeApiCall);
document.querySelector("#sidebar").innerHTML = sidebar();
document.querySelector(".openbtn").addEventListener("click",openNav);
document.querySelector(".closebtn").addEventListener("click",closeNav);
document.querySelector("#LogoAgain").addEventListener("click",Home);
function openNav() 
{
    document.getElementById("mySidepanel").style.width = "22.6vw";
}
function closeNav() 
{
    document.getElementById("mySidepanel").style.width = "0";
    window.location.href = "javascript:void(0)";
}
function Home()
{
    window.location.href = "index.html";
}

// let url = "https://api.unsplash.com/photos?page=15&client_id=cEPQEpwO73-RUy7Hd47CSZcfv_1MOKDO2UFb9n8CPZ8"
let url = "https://api.unsplash.com/photos?page=1&per_page=30&order_by=popular&client_id=cEPQEpwO73-RUy7Hd47CSZcfv_1MOKDO2UFb9n8CPZ8";
let res = MakeApiCall(url);
let data = await res;
console.log("data :",data);

let parent = document.querySelector("#GridContainer");
AppendData(data,parent);



let InputText = document.querySelector("#searchbar");
InputText.addEventListener("keypress",function(event)
{
    // console.log("event :",event);
    if(event.key == "Enter")
    {
        console.log(1);
        let InputValue = document.querySelector("#searchbar").value;

        console.log("InputValue :",InputValue);
        localStorage.setItem("SearchTerms",InputValue);
        window.location.href = "search.html";
    }
})