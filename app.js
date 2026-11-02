document.addEventListener("DOMContentLoaded", function(){

    const btn = document.getElementById("btn");
    const name = document.getElementById("name");
    const result = document.getElementById("result");

    btn.addEventListener("click", function(){
        const httpRequest = new XMLHttpRequest();
        const query = name.value.trim();

        httpRequest.addEventListener("load", function(){
            if (httpRequest.status == 200){
                result.innerHTML = httpRequest.responseText;
            } else {
                result.textContent = "The request failed.";
            }
        });

        httpRequest.addEventListener("error", function (){
           result.textContent = "Unable to load superheroes.";
        });
            
        httpRequest.open("Get", "superheroes.php?query=" + encodeURIComponent(query)); 
        httpRequest.send();
    });
});
