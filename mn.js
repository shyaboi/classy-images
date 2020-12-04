//setting up mobilenet img classifier
const classifier = ml5.imageClassifier('MobileNet', modelLoaded);
      
      // setting img var to img ele
      var img = document.getElementById('myImg')
      // var buttong = document.getElementById('aiButt')  
      //setting guess vars
      var guess1 = document.getElementById('guess1')  
      var guess2 = document.getElementById('guess2')  
      var guess3 = document.getElementById('guess3')  
      var prob1 = document.getElementById('confidence1')
      var prob2 = document.getElementById('confidence2')  
      var prob3 = document.getElementById('confidence3')  


      
      //   // When the model is loaded
      function modelLoaded() {
        console.log('Model Loaded!');
      }
      
    //   // Make a prediction with a selected image
const classy = ()=> {
      classifier.classify(img, (err, results) => {
        console.log(results);
        guess1.innerHTML='Guess: '+results[0].label
        guess2.innerHTML='Guess: '+results[1].label
        guess3.innerHTML='Guess: '+results[2].label
        let conf1 = (results[0].confidence * 100).toFixed(0)
        let conf2 = (results[1].confidence * 100).toFixed(0)
        let conf3 = (results[2].confidence * 100).toFixed(0)

        prob1.innerHTML='Confidence: ~'+conf1+'%'
        prob2.innerHTML='Confidence: ~'+conf2+'%'
        prob3.innerHTML='Confidence: ~'+conf3+'%'

      });
    }

// buttong.addEventListener("click", classy)


window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          img = document.querySelector('img');  // $('img')[0]
          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
          img.onload = imageIsLoaded;
      }
  });
});

function imageIsLoaded() { 
  console.log(this.src);  // blob url
  classy()
}