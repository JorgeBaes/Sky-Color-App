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

const x = 1
const y = 1

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

function getRGBA(cordX, cordY){
    var pixel = ctx.getImageData(cordX, cordY, 1, 1);
    var data = pixel.data;
    return  'rgba(' + data[0] + ', ' + data[1] +
        ', ' + data[2] + ', ' + (data[3] / 255) + ')';
}

function getPixelColor(imageString = 'im1.jpeg', arrayCord = [{ x: x, y: y, colorName: undefined }], showPixel = false, formated = false){  
    var img = new Image()
    img.src = imageString
    img.onload = function () {
        ctx.drawImage(img, 0, 0)
    }
    setTimeout(() =>{        
        let counter = 1
        let string = '{ time: null, '
        arrayCord.forEach( (el , index , array ) => {
            const rgba = getRGBA( el.x, el.y )
            const colorN = el.colorName || `color__${counter++}`
            const pixelPosition = `${colorN}_pixel_position: { x:${el.x}, y: ${el.y}}`
            if(index == array.length - 1){
                string += `${colorN}: "${rgba}"${showPixel ?` , ${pixelPosition}`:''} }`
            }else{
                string += `${colorN}: "${rgba}" ${showPixel ?`, ${pixelPosition}, ` : ', '}`
            }               
        })
        console.log(string,formated ? ',':'')
    },800)
}

function getAllImagesPixel(prefix = 'im', archiveType = 'jpeg', min = 1, max = 3, arrayCord = [{ x: x, y: y, colorName: undefined }], showPixel = false, formated = false){
    if(formated){
        console.log('[')
        var count = min
        var inter_1 = setInterval(() => {
            getPixelColor(`${prefix}${count}.${archiveType}`, arrayCord, showPixel, formated)
            if(count == max){
                clearInterval(inter_1)
            }
            count++
        }, 1000);
        setTimeout(()=>{
            console.log(']')
        }, 2400*(max-min))
    }else{
        var count = min
        var inter_1 = setInterval(() => {
            getPixelColor(`${prefix}${count}.${archiveType}`, arrayCord, showPixel ,formated)
            if (count == max) {
                clearInterval(inter_1)
            }
            count++
        }, 1000);

    }
}

// A função getAllImagesPixel precisa de um prefixo da imagem, da extensão das imagens, do índice mínimo, do índice máximo,
// uma lista das cordenadas dos pixels que deseja pegar a cor e dois parametros opcionais
// showPixel true ele mostra as cordenadas dos pixels junto com as cordenadas
// formated true console loga as cores em um array de objetos

getAllImagesPixel('im','jpeg',1,3,[
    { x: 108, y:10   },
    { x: 100, y: 100 },
    { x: 102, y: 102 },    
    { x: 104, y: 103 }
], false,true)



