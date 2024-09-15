const about_button = document.getElementById("about_button");
about_button.addEventListener("click", function(e){
    console.log("Someone clicked About us");
    window.location.href = "about.html";
}); //listens for click

const preach_button = document.getElementById("preach_button");
preach_button.addEventListener("click",function(){
    window.location.href = "preach_info.html";
})
