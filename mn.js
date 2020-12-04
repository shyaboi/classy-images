//setting up mobilenet img classifier
const classifier = ml5.imageClassifier('MobileNet', modelLoaded);
      
      // setting img var to img ele
      var img = document.getElementById('myImg')
      var buttong = document.getElementById('aiButt')  
      
      //   // When the model is loaded
      function modelLoaded() {
        console.log('Model Loaded!');
      }
      
    //   // Make a prediction with a selected image
const classy = ()=> {
      classifier.classify(img, (err, results) => {
        console.log(results);
      });
    }

buttong.addEventListener("click", classy)


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