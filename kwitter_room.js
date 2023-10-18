
const firebaseConfig = {
  apiKey: "AIzaSyDvK2Nr2DDHGI3n2iicUVGJXP-LSvyrTzU",
  authDomain: "chat-3d01b.firebaseapp.com",
  databaseURL: "https://chat-3d01b-default-rtdb.firebaseio.com",
  projectId: "chat-3d01b",
  storageBucket: "chat-3d01b.appspot.com",
  messagingSenderId: "97804851812",
  appId: "1:97804851812:web:aace4ba73909e6979fdd71"
};


firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       
       console.log("Room Name: " + Room_names)
       row = "<div class='room_name' id="+Room_names+ " onclick='chatR(this.id)'>" +Room_names+ " </div> <hr>"
       document.getElementById("output").innerHTML += row
      });});}
getData();

function groupAdd(){
      roomname = document.getElementById("roomID").value
      localStorage.setItem("roomname", roomname)
      firebase.database().ref("/").child(roomname).update({
      purpose: "adding room"
})
      window.location = "chatpage.html"
}

function chatR(name){
      localStorage.setItem("roomname", name)
      window.location = "chatpage.html"
}

function logout(){
    localStorage.removeItem("roomname")
    localStorage.removeItem("usernameI")
    window.location = "index.html"
}