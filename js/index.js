

//project1 by me 

var imglist=document.querySelectorAll(".img-item");
var lightBoxContainer=document.querySelector(".lightBox-container");
var close=document.getElementById("close");
var lightBox=document.querySelector(".lightBox");
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var imgArray=[];
var current;
for( let i= 0;i<imglist.length;i++){
    imglist[i].addEventListener("click",function(ev){
        
         imgArray.push(imglist[i]);
        current = imgArray.indexOf(ev.target)
        
        var imgpath=ev.target.src;
        lightBox.style.backgroundImage="url('"+imgpath+"')";
        
        lightBoxContainer.classList.add("show");
        
        
    })
}
close.addEventListener("click",function(){
    lightBoxContainer.classList.remove("show");
}) 

next.addEventListener("click",function(){
    
    current = ++current;
    if(current >= imglist.length){
        current=0;
    }
    
    var OurImgPath=imglist[current].src;
    lightBox.style.backgroundImage="url('"+OurImgPath+"')"

})

prev.addEventListener("click",function(){
    
    current = --current;
    if(current <0){
        current=imglist.length-1;
    }
    
    var OurPath=imglist[current].src;
    lightBox.style.backgroundImage="url('"+OurPath+"')"

})

document.addEventListener("keydown",function(ev){
    
    if(ev.keyCode == 39){
         current = ++current;
    if(current >= imglist.length){
        current=0;
    }
    
    var OurImgPath=imglist[current].src;
    lightBox.style.backgroundImage="url('"+OurImgPath+"')"
    }
  else if(ev.keyCode == 37){
       current = --current;
    if(current <0){
        current=imglist.length-1;
    }
    
    var OurPath=imglist[current].src;
    lightBox.style.backgroundImage="url('"+OurPath+"')"

  } 
    else if(ev.keyCode == 27){
         lightBoxContainer.classList.remove("show");
    }
    else {
        alert("this key is not handeled");
    }
})







/*
var d = new Date();
var allDays=["sun","mon","tues","wend","thrth","fri","sat"];
function test(){
    var dayIndex= d.getDay();
    var hours= d.getHours();
     var sec= d.getSeconds();
     var min= d.getMinutes();
    var ampm="";
    
    if(hours<12){
        ampm="AM";
    
    }
    else{
        ampm="PM";
        hours= hours-12;
    }
   console.log(allDays[dayIndex]+"and time is:"+hours+ampm+sec+min); 
}
 

function test(){
    
    var xmlhttp =new XMLHttpRequest();
    xmlhttp.open("Get","https://jsonplaceholder.typicode.com/users");
    xmlhttp.send();
    xmlhttp.onreadystatechange =function(){
        if(this.readyState==4&& this.status==200){
            var datastring= this.responseText;
            var datajson= JSON.parse(datastring);
            for(var i=0;i<datajson ;i++){
                console.log(datajson[i].name);
            }
        }
    }
   
}
*/


$("#mine").click(function(){
   $(".mydive").slideUp(2000).slideDown(2000).fadeOut(2000);
})





















