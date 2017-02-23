function register() {
    if ($("#name").val() == "" || $("#email").val() == "" || $("#password").val() == "") {
        swal("Lengkapi Form Register")
    } else {
        $.ajax({
            url: "http://localhost:3000/register",
            type: "POST",
            data: {
                name: $("#name").val(),
                email: $("#email").val(),
                password: $("#password").val()
            },
            success: function(result) {
                if (result) {
                    window.location.href = "http://localhost:8080/login.html"
                }
            }
        });
    }
}

$(document).ready(function() {
  $.ajax({
      url: "http://localhost:3000/decode",
      type: "POST",
      data:{
          token: localStorage.getItem("token")
      },
      success: function(result) {
        if (result.name == "TokenExpiredError") {
          swal("Expired Login")
        }else if(result.name == false){
          swal("Invalid Login")
        }else if(result.name == "JsonWebTokenError"){

        }else{
          window.location.href = "http://localhost:8080"
        }
      }
  })
})


function login() {
    if ($("#email").val() == "" || $("#password").val() == "") {
        swal("Lengkapi Form Login")
    } else {
        $.ajax({
            url: "http://localhost:3000/login",
            type: "POST",
            data: {
                email: $("#email").val(),
                password: $("#password").val()
            },
            success: function(result) {
              console.log(result);
                if (result.status) {
                    localStorage.setItem("token",result.token)
                    window.location.replace("http://localhost:8080")
                }else{
                  swal(result.msg)
                }
            }
        });
    }
}
