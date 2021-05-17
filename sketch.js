const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
   getBackgroundImg( );
}

function setup(){
    var canvas = createCanvas(1365,653);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
//text("Time: ",hour, 200,100);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON = await response.json();
    // write code slice the datetime
    var datetime = responseJSON.datetime
    var hour = datetime.slice(11,13)

    // add conditions to change the background images from sunrise to sun 

    if(hour >= 03 && hour <= 05){
        bg = "sunrise1.png"
    } 
    else if(hour >= 06 && hour<= 08){
        bg = "sunrise2.png"
    }
    else if(hour >= 09 && hour<= 11){
        bg = "sunrise3.png"
    }
    else if(hour >= 12 && hour<= 14){
        bg = "sunrise4.png"
    }
    else if(hour >= 15 && hour<= 17){
        bg = "sunrise5.png"
    }
    else if(hour >= 18 && hour<= 20){
        bg = "sunrise6.png"
    }
    else{
        bg = "sunset7.png"
    }
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
