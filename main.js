var prediction_1 = "";
prediction_2 = "";

Webcam.set({
height : 300,
width :350,
image_format : 'png',
png_quality : 100
});

Webcam.attach("#camera");
camera = document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ="<img id='captured_image' src='"+ data_uri+"'/>";
    });
}