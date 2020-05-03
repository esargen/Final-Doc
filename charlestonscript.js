
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var post = this.nextElementSibling;
    if (post.style.maxHeight){
      post.style.maxHeight = "300px";
    } else {
      post.style.maxHeight = post.scrollHeight + "px";
    }
  });
}



function openNav() {
  document.getElementById("itinerary").style.height = "425px";
  document.getElementById("closebtn").style.opacity = "1.0";
}
function closeNav() {
  document.getElementById("itinerary").style.height = "30px";
  document.getElementById("closebtn").style.opacity = "0.0";
}
function blueTrans() {
  document.getElementById("landing").style.height = "100%";
  document.getElementById("title").style.opacity = "0%";
  document.getElementById("subtitle").style.opacity = "0%";
  document.getElementById("navbar").style.opacity = "0%";
}
function sideNav() {
  document.getElementById("sidenav").style.width = "100%";
  document.getElementById("sidenav").style.opacity = "0.6";
  document.getElementById("closenav").style.opacity = "1.0";
}
function closeSideNav() {
  document.getElementById("sidenav").style.width = "0%";
  document.getElementById("sidenav").style.opacity = "0.0";
  document.getElementById("closenav").style.opacity = "0.0";
}
