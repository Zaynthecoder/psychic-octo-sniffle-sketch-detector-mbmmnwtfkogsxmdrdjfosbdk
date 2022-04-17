function clearCanvas() {
    background("white");
    console.log("canvas has been cleared");
}

function setup() {
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    console.log("function setup has been activated");
}

function setup() {
    canvas = createCanvas(280,280)
    canvas.center();
    background("cyan");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;

}

function preload() {
    classifier = ml5.imageClassifier('DoodleNet')
    console.log("preload function is complete!");
}
function draw() {
    strokeWeight(7);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY);

       
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
    console.log("classifer has classified that you drew a shape.");
}

function gotResult() {
    if (error) {
        console.log(error);
        console.log("I am sorry there has been an error.");
    }
    console.log(results);
    console.log("up above are the results");


    document.getElementById('label').innerHTML = 'label: ' + results[0].label;
    console.log("the results have appeared");


    //this is label and confidence


    document.getElementById('confidence').innerHTML = 'confidence: ' + Math.round(results[0].confidence * 100) + '%';
    console.log("The accurate rate for how accurate the result is has appeared");


    //this is for speech to text


    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);

    console.log("the results have been spoken to you. If you did not hear increase your volume of the device"); 
}