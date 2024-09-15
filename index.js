const about_button = document.getElementById("about_button");
about_button.addEventListener("click", function(e){
    console.log("Someone clicked About us");
    window.location.href = "https://aveultimate.github.io/Elevated-Pest-Ministries/about.html";
}); //listens for click

const preach_button = document.getElementById("preach_button");
preach_button.addEventListener("click",function(){
    window.location.href = "https://aveultimate.github.io/Elevated-Pest-Ministries/preach_info.html";
})
