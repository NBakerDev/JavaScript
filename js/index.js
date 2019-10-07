function buttonClicked() {
  var usernameCtrl = document.getElementById("username");
  usernameCtrl.value = users[1].username;
  var isadminCtrl = document.getElementById("isadmin");
  isadminCtrl.checked = users[1].isAdmin;
}
function button2Clicked(){
    var usernameCtrl = document.getElementById("username");
    var userInpt = usernameCtrl.value;
    console.log("User Input is", userInpt);
    
}
for (var user of users)

var users = [
  {
    id: 1,
    username: "adm",
    password: "adm",
    firstname: "Normal",
    lastname: "Admin",
    phone: "513-555-1212",
    email: "help@admin.com",
    isReviewer: true,
    isAdmin: true
  },
  {
    id: 2,
    username: "user",
    password: "user",
    firstname: "Normal",
    lastname: "User",
    phone: "",
    email: "",
    isReviewer: false,
    isAdmin: false
  },
  {
    id: 3,
    username: "sa",
    password: "sa",
    firstname: "System",
    lastname: "Admin",
    phone: "",
    email: "",
    isReviewer: true,
    isAdmin: true
  }
];
