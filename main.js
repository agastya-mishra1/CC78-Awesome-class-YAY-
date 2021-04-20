function change(){
document.getElementById("title").style.color="red";    
}
var images=["https://upload.wikimedia.org/wikipedia/commons/f/f7/A_Happy_Working_Mom_Cartoon.svg",
"https://i.pinimg.com/originals/fd/f0/00/fdf0001841d00d0f170bf6c6bfde9364.jpg",
"https://i.pinimg.com/originals/71/c9/51/71c951668531367dd12f15d424a0c5b3.jpg"];

var people=["Smriti Ratnakar (My Mom)",
"Leo (Our Dog)", 
"Agastya Mishra (Me)"];

var i=0;
 function next(){
 document.getElementById("img1").src=images[i];
 document.getElementById("text").innerHTML=people[i];
 i++;   
 }