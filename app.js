document.addEventListener("DOMContentLoaded", function(){

    const btn = document.getElementById("btn");

    btn.addEventListener("click", function(){
    const httpRequest = new XMLHttpRequest();

        httpRequest.addEventListener("load", function(){
            if (httpRequest.status == 200){
                const response = new DOMParser().parseFromString(httpRequest.responseText,"text/html");

        const supes = Array.from(response.querySelectorAll("li"))
            .map(function (item){
                return item.textContent.trim();
            });

            alert(supes.length ? supes.join("\n") : "No superheroes found.");
        } else {
            alert("The request has failed: " + httpRequest.status);
        }
    });
        httpRequest.addEventListener("error", function (){
            alert('Unable to show the list of superheroes.');
        });
            
        httpRequest.open("Get", "superheroes.php"); 
        httpRequest.send();
    });
});
