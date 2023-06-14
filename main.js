fontss = ["'Courier New', Courier, monospace","'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif","'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif","'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif","'Times New Roman', Times, serif","'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif","Arial, Helvetica, sans-serif","Cambria, Cochin, Georgia, Times, 'Times New Roman', serif","Georgia, 'Times New Roman', Times, serif","Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif","Verdana, Geneva, Tahoma, sans-serif","cursive","fantasy","monospace","sans-serif","serif","system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif","inherit","initial","unset"];
animal_t = 0;

function star()
{
navigator.mediaDevices.getUserMedia({audio: true});
classifyer = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LOAN5V0Dy/model.json', modelready);
}
perro = 0;
gato = 0;
pajaro = 0;
mosquito = 0;
function modelready()
{
    classifyer.classify(gotResults);
}

function gotResults(error ,results)
{
if (error)
{
    console.error(error);
}
else
{
    random = Math.floor(Math.random() * 22);
    console.log(results);
ff1 = fontss[random]



document.getElementById("anim").style.fontFamily =ff1;
document.getElementById("t_anim").style.fontFamily = ff1;
document.getElementById("anim").innerHTML ="sonido =" + results[0].label ;
document.getElementById("t_anim").innerHTML = "vesese escuchadas" + perro;

gif = document.getElementById("im1");

if (results[0].label == "ladrar")
{
    gif.src = "dog3000.gif"
    perro = perro + 1;
    animal_t = perro;
   var resultado = "perro";
}else if (results[0].label == "maullar")
{
    gif.src = "cat.gif"
    perro = perro + 1;
    animal_t = gato;
   var resultado = "gato";
}else if (results[0].label == "zzz")
{
    gif.src = "a08ced58da5d296757cc4a5c4454e923_w200.gif"
    perro = perro + 1;
   var animal_t = mosquito; resultado = "mosquito";
}else if (results[0].label == "pio")
{
    gif.src = "2032139_5d333.gif"
    perro = perro + 1;
    animal_t = pajaro;
   var resultado = "pajaro";
}else if(results[0].label == "fastidio") {
    gif.src = "pato-giro.gif";
  var  resultado = "status = rytgnhryujfghrjhgfhrejdfheuedfjehjd.error";
}



}
if (perro >= 1000)
{
    window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
}
