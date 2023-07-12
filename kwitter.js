
function addUser() {

  userName = document.getElementById("userName").value;

  //armazenamento local
  localStorage.setItem("userName", userName);
  
 //comando de codigo que me leva para outra tela
  window.location = "kwitterRoom.html";
}

