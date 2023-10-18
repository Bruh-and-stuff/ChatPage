function addUser(){
    yname = document.getElementById("usernameI").value
    localStorage.setItem("usernameI", yname)
    window.location = "kwitter_room.html"
}