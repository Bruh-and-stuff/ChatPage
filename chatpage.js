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

  group_name = localStorage.getItem("roomname")
  username = localStorage.getItem("usernameI")
  

  function send(){
    msg = document.getElementById("msg").value
    firebase.database().ref(group_name).push({
        name:username,
        message:msg,
        likes:0
    })
    document.getElementById("msg").value = ""
  }

  function getData(){
    firebase.database().ref("/"+group_name).on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
        childKey  = childSnapshot.key;
        childData = childSnapshot.val();
        
 
        if(childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;

        name=message_data["name"]
        message=message_data["message"]
        likes=message_data["likes"]

        text_name="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>"
        text_msg="<h4>"+message+"<h4>"
        text_likebtn="<button class='btn btn-info' id='"+firebase_message_id+"' value='"+likes+"' onclick='updateLikes(this.id)'>"
        text_likebtn2="<span class='glyphicon glyphicon-thumbs-up'> Likes: "+likes+"</span></button><hr>"

        row=text_name+text_msg+text_likebtn+text_likebtn2

        document.getElementById("output").innerHTML += row


  }});
})}
  getData()
  function updateLikes(message_id){
    button_id=message_id
    likes=document.getElementById(button_id).value
    updatedLikes = Number(likes)+1
    firebase.database().ref(group_name).child(message_id).update({
      likes:updatedLikes
    })
  }

  function logout(){
    localStorage.removeItem("rooomname")
    localStorage.removeItem("usernameI")
    window.location="index.html"
  }