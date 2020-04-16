$(document).ready(function () {
    $("#btnSubmit").click(function (event) {
        var username=$("#uname").val();
        var password=$("#psw").val();
        data={
            uname:username,
            psw:password
        }
        event.preventDefault(); 
        $.ajax({
            type: "POST",
            url: "/login",
            data: data,
            success: function (data) {
                if(data){
                    window.location.href = "http://localhost:8726/page1.html";
                }
                sessionStorage.setItem("token",data.token);
            },
            error: function (e) {
                alert("ERROR : Invalid User Name or Password");
            }
        });
 
    });
});
function check()
{
    console.log("MyToken",token)
    var token = sessionStorage.getItem("token");
    if(token)
   { 
       
       window.location.href = "http://localhost:8726/page2.html";
      
   }
   else
   {
    window.location.href = "http://localhost:8726";
    alert("Please Login to visit this Page")
   }

}