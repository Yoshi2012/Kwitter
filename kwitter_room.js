
var firebaseConfig = {
      apiKey: "AIzaSyAWpAGmhvLCjS6CQaSGwAq69puUst75bKY",
      authDomain: "kwitter-57505.firebaseapp.com",
      databaseURL: "https://kwitter-57505-default-rtdb.firebaseio.com",
      projectId: "kwitter-57505",
      storageBucket: "kwitter-57505.appspot.com",
      messagingSenderId: "945563981202",
      appId: "1:945563981202:web:fa0c583faf53db24119d4b"
    };
firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_keyname");

 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

 function addRoom(){
      room_name = document.getElementById("room_name").value ;
      localStorage.setItem("room_keyname", room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      window.location = "kwitter_page.html";
 }
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name is " + Room_names );
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' > #"+Room_names+" </div><hr>";
document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_keyname", name);
      window.location = "kwitter_page.html"
}

function logout()
{
      localStorage.removeItem("user_keyname");
      localStorage.removeItem("room_keyname");
      window.location = "index.html";
}