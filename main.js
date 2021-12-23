function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/cErnV_Ozo/model.json' , modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results) {

    if (error)
    {
        console.error(error);

    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) +1;
        random_number_g = Math.floor(Math.random() * 255) +1;
        random_number_b = Math.floor(Math.random() * 255) +1;
    
    
        document.getElementById("result_label").innerHTML = 'I can here -'+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy -'+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";


        img = document.getElementById('download.png');
        
        if (results[0].label == "sheep") {
            img.src = "sheep.gif";
           
        }
        else if (results[0].label == "Cat") {
            img.src = "cat.gif";
            
        }
        else if (results[0].label == "dog") {
            img.src = "dog.gif";
            
        }
        else {
            img.src = "aliens-01.png";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.gif";
        }
    }
}