function Reconocer_sonido(){
   navigator.mediaDevices.getUserMedia({audio:true}); 
   classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/HLite4xID/model.json",modelReady);
   console.log("Oprimiste el botón")
}
 function modelReady(){
    classifier.classify(gotResult);
 }

 function gotResult(error,result){
   if (error){
      console.error(error);
   }
   else{
      console.log(result);
      númeroAleatoriodelRojo=Math.floor(Math.random()*255)+1;
   númeroAleatoriodelAzul=Math.floor(Math.random()*255)+1;     
   númeroAleatoriodelVerde=Math.floor(Math.random()*255)+1;     
   document.getElementById("result_label").innerHTML="Sonido: " + result[0].label;
   document.getElementById("precision_label").innerHTML="Porcentaje: " + (result[0].confidence*100).toFixed(2) + " %";
   document.getElementById("result_label").style.color="rgb(" + númeroAleatoriodelRojo + "," + númeroAleatoriodelVerde + "," + númeroAleatoriodelAzul + ")";
   document.getElementById("precision_label").style.color="rgb(" + númeroAleatoriodelRojo + "," + númeroAleatoriodelVerde + "," + númeroAleatoriodelAzul + ")";
      img1=document.getElementById("alien1");
      img2=document.getElementById("alien2");
      img3=document.getElementById("alien4");
      img4=document.getElementById("alien4");
      if (result[0].label=="Perro"){
         img1.src="perro_animado.gif";
         img2.src="vaca.png";
         img3.src="gato.png";
         img4.src="aliens-04.png";
      }
      else if (result[0].label=="vaca"){
      img1.src="perro.png";
      img2.src="vaca_animada.gif";
      img3.src="gato.png";
      img4.src="aliens-04.png";
      }
      else if (result[0].label=="gato"){
      img1.src="perro.png";
      img2.src="vaca.png";
      img3.src="a.gif";
      img4.src="aliens-04.png";
      }
      else{
         img1.src="perro.png";
         img2.src="vaca.png";
         img3.src="gato.png";
         img4.src="aliens-04.gif";
      }
   }
 }