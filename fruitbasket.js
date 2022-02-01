status = "";
fruitbasket = "";

function preload()
{
    fruitbasket = loadImage('fruit image.jpeg');
}

function setup()
{
    canvas = createCanvas(250,250);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("no_detected").innerHTML = "status : detecting objects";
}

function modelLoaded()
{
    console.log("model Is Loaded");
    status =true;
    object_detector.detect(fruitbasket , gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);

}

function draw()
{
    image(fruitbasket,0,0,250,250);
}