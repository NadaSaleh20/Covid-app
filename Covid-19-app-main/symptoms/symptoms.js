//dark mode 
const icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if ( document.body.classList.contains("dark-mode")) {
        icon.src="../assets/sun.svg";

    }else{
        icon.src="../assets/dark-mode.png";
    }
}
const nextButton =document.getElementById("button");
nextButton.onclick = function () {
    location.href = "../advice/advice.html";

}
const backIcon =document.getElementById("back");
backIcon.onclick = function () {
    location.href = "../covid-vaccine-tracker/covid-vaccine-tracker.html";}