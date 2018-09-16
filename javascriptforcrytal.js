
$(document).ready(function(){

var random_result;
  var lost=0;
  var win=0; 
  var previous = 0;
  
  

  var resetAndStart= function(){
$(".crystals").empty();
var images=['http://www.galleriesbristol.co.uk/wp-content/uploads/2017/03/crystals-banner-1024x465.jpg',
'https://www.crystalheaven.co.uk/wp-content/uploads/2018/01/crystal-3-picture.jpg',
'http://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/2v/bl/p02vblm1.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2qTTSje8EJ_n4bD7yOKE0cbBAejH9fnJzr6FHcWyKI_GY_XL'];

random_result = Math.floor(Math.random()*69)+30;

$("#result").html('Random result'+ random_result);

for(var i= 0; i<4; i++){

var random= Math.floor(Math.random()* 11)+1;




var crystal = $("<div>");
crystal.attr({
    "class": 'crystals',
    "data-random": random
   
});
crystal.css({
    "background-image":"url('" + (images[i]) + "')",
    "background-size":"cover"

});
console.log("url'" + (images[i]) + "')",)

$("#crystals").append(crystal);
}
$("#previous").html("Total Score:" + previous);
  }
  
  resetAndStart();


 
    
$("#crystals").on("click",function(){
   
        
        var num = parseInt($(this).attr("data-random"));
previous += num;

$("#previous").html("Total Score:" + previous);
console.log(previous);

if(previous> random_result){
    lost++;
$("#lost").html("You lost:",lost);
previous=0;



resetAndStart();
}
else if(previous===random_result){
win++;
$("#win").html("You win:" + win)

previous=0;
resetAndStart();
}


    });
});
