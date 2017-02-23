$(document).ready(function() {
  $.ajax({
      url: "http://localhost:3000/users/decode",
      type: "POST",
      data:{
          token: localStorage.getItem("token")
      },
      success: function(result) {
        // localStorage.setItem("email", result.email)
        if (result.name == "TokenExpiredError") {
          swal("Expired Login")
        }else if(result.name == false){
          swal("Invalid Login")
        }else if(result.name == "JsonWebTokenError"){

        }else{
          document.querySelector("#register").innerHTML = ""
          document.querySelector("#login").innerHTML = `<a id="logout" onclick="logout()" href="#" >Logout</a>`
        }
      }


  })


})

function logout() {
  localStorage.clear()
  console.log("masukk");
  window.location.href = "http://localhost:8080/login.html"
}

$(document).ready(function() {
swal({
    title: "Welcome",
    text: localStorage.getItem("email"),
    timer: 2000,
    showConfirmButton: false
});

})
