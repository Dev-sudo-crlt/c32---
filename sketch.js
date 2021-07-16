const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
   getBackgroundImg()

    function setup(){
        var canvas = createCanvas(1200,700);
        engine = Engine.create();
        world = engine.world;

    }

    function draw(){

    // add condition to check if any background image is there to add


        Engine.update(engine);

    // write code to display time in correct format here


    }

    async function getBackgroundImg(){

    // write code to fetch time from API
        var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
        hour = datetime.slice(11,13);
        backgroundImg = loadImage(bg);
        if(hour>=04 && hour<=06){
            bg = 'sunrise1.png'
        }
        if(hour>=06 && hour<=08){
            bg = 'sunrise2.png'
        }
        if(hour>=08 && hour<=10){
            bg = 'sunrise3.png'
        }
        if(hour>=10 && hour<=12){
            bg = 'sunrise4.png'
        }
        if(hour>=12 && hour<=15){
            bg = 'sunrise5.png'
        }
        if(hour>=15 && hour<=18){
            bg = 'sunrise6.png'
        }
        if(hour>=18 && hour<=20){
            bg = 'sunrise7.png'
        }
        if(hour>=20 && hour<=23){
            bg = 'sunrise8.png'
        }
        if(hour>=23 && hour<=00){
            bg = 'sunrise9.png'
        }
        if(hour>=00 && hour<=03){
            bg = 'sunrise10.png'
        }
        
    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

    }
}
