const userName = document.getElementById("username");
const passWord = document.getElementById("password");
const btn = document.getElementById("btnLogin");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(userName.value=="IyamPogi" && passWord.value=="IyamPogi"){
        alert("You have logged in successfully!");
        window.location="/LESSON 3/content/Mainpage/Mainpage.html";
          } else {
            alert("Please fill all the fields");
          }
        });