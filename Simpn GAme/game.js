var userClickedPattern=[];
var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];
var started=false;
var level=0;
$(document).keypress(function(){
    if(!started){    
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
});

$(".btn").on("click",function(event){
    var userChosenColor=event.target.id;
    userClickedPattern.push(userChosenColor);
    //console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
    
});


function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("Success");
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence()
            },1000);
        }
    }
    else{
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over.Press Any Key To Restart")
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        startOver();

    };


}
function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level "+level);

    
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColur=buttonColours[randomNumber];
    gamePattern.push(randomChosenColur);
    $("#"+ randomChosenColur).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColur);
}
// 1ST METHOD TO GET THE ID OF WHICH BUTTON IS PRESSED
// nextSequence();
// $(".btn").click(function(){
//     var userChosenColor=$(this).attr("id");
//     userClickedPattern.push(userChosenColor);
//     console.log(userClickedPattern);
// });

function playSound(name){
    var audio =new Audio("sounds/"+name+".mp3");
    audio.play();
}


function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}
function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}

// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);

//   animatePress(userChosenColour);
// });

// function nextSequence() {

//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

//   playSound(randomChosenColour);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// //1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
// function animatePress(currentColor) {

//   //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
//   $("#" + currentColor).addClass("pressed");

//   //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

