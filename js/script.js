function getProfile(){
    var username = 'TTeRzY';

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200){
            var user = JSON.parse(xhttp.responseText);
            document.getElementById('profile').innerHTML = user.name;
        }

        console.log(user);
    }

    xhttp.open('GET', 'https://api.github.com/users/' + username, true);
    xhttp.send();
}

    getProfile();

