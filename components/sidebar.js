
function sidebar()
{
    return `
    
        <div id = "mainu">
          <div id = "mySidepanel" class = "sidepanel">
            <div id = "Logo">
                <div id = "LogoAgain">
                    <img id = "LogoImageAgain" src="https://img.icons8.com/ios-filled/344/home.png" alt="">
                </div>
                <div id = "closebtn">
                    <button class = "closebtn">x</button>
                </div>
            </div>
            <div id = "AllLink"></div>
          </div>
          <button class="openbtn">☰</button>
        </div>

        <div id = "LoginSignUpBox">
          <a id = "Login" href="">Login</a>
          <br>
          <a id = "SignUp" href="">SignUp</a>
        </div>

        <div id = "SearchBox">
          <input type="Search" id = "searchbar" placeholder="Search Item....">
        </div>

        <div id = "NewsApiBox">
          <a id = "News" href="">News</a>
          <br>
          <a id = "Api" href="">Api</a>
        </div>
    `
}

export {sidebar};