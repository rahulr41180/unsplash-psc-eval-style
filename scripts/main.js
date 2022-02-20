
async function MakeApiCall(url)
{
    try
    {
        let res = await fetch(url);
        
        let data = await res.json();

        return data;
    }
    catch(error)
    {
        console.log("error :",error);
    }
}

function AppendData(PhotoData,parent)
{
    parent.innerHTML = "";
    console.log("PhotoData :",PhotoData);
    PhotoData.map(function(element,index)
    {
        
        let PhotoNameBox = document.createElement("div");
        PhotoNameBox.setAttribute("class","PhotoNameBox");
        PhotoNameBox.addEventListener("click",function()
        {
            console.log(2);
            console.log("ImageDetails :",element);
            localStorage.setItem("ImageDetails",JSON.stringify(element));
        })

        let PhotoBox = document.createElement("div");
        PhotoBox.setAttribute("class","PhotoBox");

        let Photo = document.createElement("img");
        Photo.setAttribute("class","Photo");
        Photo.src = element.urls.regular;

        let Name = document.createElement("p");
        Name.setAttribute("class","Name");
        Name.innerHTML = element.user.name;

        parent.append(PhotoNameBox);
        PhotoNameBox.append(PhotoBox,Name);
        PhotoBox.append(Photo);
    })
}
export {MakeApiCall,AppendData};