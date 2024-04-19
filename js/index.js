function logIN(){
    document.getElementById('log/register').innerHTML =
        '<h1>Welcome back</h1>'
        +'<form class="log" action= "../html/personal_area.html">'
        +'<label for="name">your name:</label>'
        +'<input type="text" id="name" name="name" required>'
        +'<label for="email">your Email:</label>'
        +'<input type="email" id="email" name="email" required>'
        +'<label for="password">your password:</label>'
        +'<input type="password" id="password" name="password" required>'
        +'<input type="submit" value="Log in" onclick="Authentication()">'
        +'</form>'
}
function Authentication(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const localData = JSON.parse(localStorage.getItem(email));
    if (localData === undefined || localData=== null){
        alert('account does not exist please register');
        document.getElementById('name').value = null;
        document.getElementById('email').value = null;
        document.getElementById('password').value = null;
        return false;
    }
    else if (name === localData.name){
        if (email === localData.email){
            if (password === localData.password)
            {
                document.getElementById('logIN').submit();
                return true;
            }
            else{
                alert('please enter a valid password')
                document.getElementById('password').value = null;
                return false;
            }
        }
        else{
            alert('wrong email address');
            document.getElementById('email').value = null;
            return false;
        }
    }
    else{
        alert(' wrong player name');
        document.getElementById('name').value = null;
        return false;
    }
}
function register() {
    document.getElementById('log/register').innerHTML =
        '<h1>Welcome, to register:</h1>' + '<form action="../html/personal_area.html">'
        +'<label For="name">your player name:</label>'
        +'<input type="text" id="name" name="name" required/>'

        +'<label For="email"> Enter your Email:</label>'
        +'<input type="email" id="email" name="email" required/>'

        +'<label For="phone_number">enter your phone number</label>'
       + '<input type="text" id="phone_number" required/>'

        +'<label For="password">Enter your password:</label>'
        +'<input id="password" type="password" name="password" required onChange="passwordAuthentication()"/>'

        +'<label For="password_verification">confirm your password</label>'
        +'<input id="password_verification" type="password" required onChange="password2Authentication()"/>'

        +'<input type="submit" value="confirm" onClick="createAccount()"/>'
        +'</form>'
}

function passwordAuthentication(){
}

function password2Authentication(){

}
function createAccount(){

}