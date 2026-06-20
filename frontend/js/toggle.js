var users=[
    {
        "name" :"John Doe",
        "gender" :"male",
        "Image" : "/images/john.png"
    },
    {
        "name" :"Jane Doe",
        "gender" :"female",
        "Image" : "/images/tina.png"
    },
]

var curId=0;

function toggle(){
    //toggle card from 0--> 1 & 1-->0
   curId=(curId + 1)%2

   //toggle the rendered user details

   //image
   var user=users[ curId];
   document.getElementById("user-img").src=user.Image;
   
   // to do: update for name and gender

   //name
   document.getElementById("user-name").innerText=user.name;

   //gender
   document.getElementById("user-gender").innerText=user.gender;
}