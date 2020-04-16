function myFunction(){
    var token = sessionStorage.getItem("token");
    if(!token){
        window.location.href = "http://localhost:8726";
        alert("Please Login to visit this Page")
    }
   
}