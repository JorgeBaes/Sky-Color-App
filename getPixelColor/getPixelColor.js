/*
Beres. bomdia
Mano consegui faze a parada, e o problema era assincronicidade msm.
pra resolve eu usei o setInterval que executa a função get pixels a cada 1 segundo
e dentro da função eu coloquei um setTimeout que executa a função depois de 1 segundo,
ai nesse segundo a imagem já é carregada e é nóis.
Eu ainda quero melhorar isso, quero ver se da pra fazer com async func q é um recurso da ES6
que permite q vc possa fazer funções assincronas de um jeito melhor.
*/

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const x = 250
const y = 600

var color = document.querySelector('#color');
function pick(event) {
    var x_ = event.layerX;
    var y_ = event.layerY;
    console.log(x_,y_)
    var pixel = ctx.getImageData(x_, y_, 1, 1);
    var data = pixel.data;
    var rgba = 'rgba(' + data[0] + ', ' + data[1] +
    ', ' + data[2] + ', ' + (data[3] / 255) + ')';
    console.log(rgba)
    color.style.background = rgba
    
}
canvas.addEventListener('click', pick);


function getPixelColor(imageString = 'im1.jpeg',cordX = x,cordY = y , index = 0){  
    var img = new Image()
    img.src = imageString
    img.onload = function () {
        ctx.drawImage(img, 0, 0)
    }
    setTimeout(() =>{
        var pixel = ctx.getImageData(cordX, cordY, 1, 1);
        var data = pixel.data;
        var rgba = 'rgba(' + data[0] + ', ' + data[1] +
            ', ' + data[2] + ', ' + (data[3] / 255) + ')';
        console.log(index,rgba)      
    },1000)
}

function getAllImagesPixel(prefix = 'im', archiveType = 'jpeg', min = 1, max = 3){
    var count = min
    var inter_1 = setInterval(() => {
        getPixelColor(`${prefix}${count}.${archiveType}`,undefined,undefined, count)
        if(count == max){
            clearInterval(inter_1)
        }
        count++
    }, 1000);
}

getAllImagesPixel('im','jpeg',1,3)