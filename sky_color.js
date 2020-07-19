var birthday = new Date("September 28, 2001 03:24:00")
var today = new Date("March 28, 2001 03:24:00")
var times = SunCalc.getTimes(today, -22.0154, -47.891122);

console.log(times)

console.log(backToHoursMinutes(dateToMinutes(times.sunset)/2 + dateToMinutes(times.sunsetStart)/2))

function dateToMinutes(date){
    return date.getHours()*60 + date.getMinutes()
}
function backToHoursMinutes(minutes) {
    return `${~~(minutes/60)}:${minutes%60}`
}

function getToDateFormat(string){
    const hours = parseInt(string.slice(0,string.indexOf(':')))
    const minutes = parseInt(string.slice(string.indexOf(':')+1))
    console.log(today.getMonth())
    return new Date(today.getFullYear(),today.getMonth(),today.getDate(),hours,minutes,0,0)
}

const colorSlider = document.querySelector('#colorBackground')

colorSlider.addEventListener('input', () => {
    document.body.style.background = colorSlider.value
})

var listColors = 
[
{ time: -258, color_base: '#9ea3b6', color_top: '#6b87af', color_up: '#7499cd' },
{ time: -199, color_base: '#9b9eaf', color_top: '#6787ae', color_up: '#88adda' },
{ time: -139, color_base: '#afb3bc', color_top: '#6380a1', color_up: '#8ab4fe' },
{ time: -79, color_base: '#e9e0d9', color_top: '#c3d6ea', color_up: '#92b9fe' },
{ time: -19, color_base: '#be9168', color_top: '#8d9095', color_up: '#afb6bc' },
{ time: -12, color_base: '#fec171', color_top: '#788284', color_up: '#d8dde3' },
{ time: -9, color_base: '#ed9251', color_top: '#747481', color_up: '#cfd4da' },
{ time: -6, color_base: '#e08a56', color_top: '#707978', color_up: '#dbe0e4' },
{ time: -3, color_base: '#cf8868', color_top: '#727c7d', color_up: '#d2d9df' },
{ time: 0, color_base: '#c88c70', color_top: '#757d80', color_up: '#dbd9da' },
{ time: 3, color_base: '#af836a', color_top: '#6a707c', color_up: '#e2e0e1' },
{ time: 6, color_base: '#c59074', color_top: '#818586', color_up: '#e3e1e2' },
{ time: 9, color_base: '#ab8165', color_top: '#6d6966', color_up: '#d5d5d5' },
{ time: 12, color_base: '#ad8664', color_top: '#605f65', color_up: '#d6d6d6' },
{ time: 15, color_base: '#b38e85', color_top: '#4f5668', color_up: '#cfcfcf' },
{ time: 18, color_base: '#b58a77', color_top: '#4a4f75', color_up: '#b0b0b2' },
{ time: 24, color_base: '#e48f3c', color_top: '#3c3a3f', color_up: '#83817a' },
{ time: 27, color_base: '#dc7432', color_top: '#1e2225', color_up: '#615a57' },
{ time: 30, color_base: '#d36436', color_top: '#191a1c', color_up: '#443c3a' },
{ time: 33, color_base: '#e47451', color_top: '#1c1a1b', color_up: '#2b2724' },
{ time: 36, color_base: '#903f21', color_top: '#070707', color_up: '#191011' },
{ time: 39, color_base: '#62321d', color_top: '#08080a', color_up: '#040404' },
{ time: 42, color_base: '#422c22', color_top: '#060608', color_up: '#06050a' },
{ time: 45, color_base: '#2d1c16', color_top: '#030305', color_up: '#040406' },
{ time: 48, color_base: '#141011', color_top: '#030305', color_up: '#030305' },
{ time: 51, color_base: '#0b0a1c', color_top: '#03010c', color_up: '#02010a' },
{ time: 54, color_base: '#0e080a', color_top: '#030303', color_up: '#020204' },
{ time: 90, color_base: '#000000', color_top: '#000000', color_up: '#000000' }
]

// var sunsetMid = dateToMinutes(getToDateFormat('17:45'))

// var newArray = listColors.map(({ time , color_base , color_top , color_up }) => {
//     return {
//         time: dateToMinutes(getToDateFormat(time)) - sunsetMid, color_base, color_top, color_up
//     }
// })
// console.log()
// console.log('[')
// newArray.forEach( el => {
//     console.log(`{ time: ${el.time}, color_base: '${el.color_base}', color_top:'${el.color_top}', color_up: '${el.color_up}'},`)
// })
// console.log(']')
//     [
//     { time: '13:27', color_base: '#9ea3b6', color_top: '#6b87af', color_up: '#7499cd' },
//     { time: '14:26', color_base: '#9b9eaf', color_top: '#6787ae', color_up: '#88adda' },
//     { time: '15:26', color_base: '#afb3bc', color_top: '#6380a1', color_up: '#8ab4fe' },
//     { time: '16:26', color_base: '#e9e0d9', color_top: '#c3d6ea', color_up: '#92b9fe' },
//     { time: '17:26', color_base: '#be9168', color_top: '#8d9095', color_up: '#afb6bc' },
//     { time: '17:33', color_base: '#fec171', color_top: '#788284', color_up: '#d8dde3' },
//     { time: '17:36', color_base: '#ed9251', color_top: '#747481', color_up: '#cfd4da' },
//     { time: '17:39', color_base: '#e08a56', color_top: '#707978', color_up: '#dbe0e4' },
//     { time: '17:42', color_base: '#cf8868', color_top: '#727c7d', color_up: '#d2d9df' },
//     { time: '17:45', color_base: '#c88c70', color_top: '#757d80', color_up: '#dbd9da' },
//     { time: '17:48', color_base: '#af836a', color_top: '#6a707c', color_up: '#e2e0e1' },
//     { time: '17:51', color_base: '#c59074', color_top: '#818586', color_up: '#e3e1e2' },
//     { time: '17:54', color_base: '#ab8165', color_top: '#6d6966', color_up: '#d5d5d5' },
//     { time: '17:57', color_base: '#ad8664', color_top: '#605f65', color_up: '#d6d6d6' },
//     { time: '18:00', color_base: '#b38e85', color_top: '#4f5668', color_up: '#cfcfcf' },
//     { time: '18:03', color_base: '#b58a77', color_top: '#4a4f75', color_up: '#b0b0b2' },
//     { time: '18:09', color_base: '#e48f3c', color_top: '#3c3a3f', color_up: '#83817a' },
//     { time: '18:12', color_base: '#dc7432', color_top: '#1e2225', color_up: '#615a57' },
//     { time: '18:15', color_base: '#d36436', color_top: '#191a1c', color_up: '#443c3a' },
//     { time: '18:18', color_base: '#e47451', color_top: '#1c1a1b', color_up: '#2b2724' },
//     { time: '18:21', color_base: '#903f21', color_top: '#070707', color_up: '#191011' },
//     { time: '18:24', color_base: '#62321d', color_top: '#08080a', color_up: '#040404' },
//     { time: '18:27', color_base: '#422c22', color_top: '#060608', color_up: '#06050a' },
//     { time: '18:30', color_base: '#2d1c16', color_top: '#030305', color_up: '#040406' },
//     { time: '18:33', color_base: '#141011', color_top: '#030305', color_up: '#030305' },
//     { time: '18:36', color_base: '#0b0a1c', color_top: '#03010c', color_up: '#02010a' },
//     { time: '18:39', color_base: '#0e080a', color_top: '#030303', color_up: '#020204' },
// ]

const defaultDay = {color_base: '#9ea3b6', color_top: '#6b87af', color_up: '#7499cd'}
const defaultNight = {color_base: '#000000', color_top: '#000000', color_up: '#000000' }

function getColorsAcordingToSunSet(sunSet,sunRise) {
    const sunSetInMinutes = dateToMinutes(sunSet)
    const sunRiseInMinutes = dateToMinutes(sunRise)
    console.log(sunSetInMinutes, sunRiseInMinutes)
    var list = []

    for(let i = 0 ; i < 1440 ; i += 10){
        if( i <= sunRiseInMinutes - 90){
            list.push({
                time: i, color_base: '#000000', color_top: '#000000', color_up: '#000000'
            })
        } else if ( sunRiseInMinutes + 258 <= i && i <= sunSetInMinutes - 90) {
            list.push({
                time: i, color_base: '#9ea3b6', color_top: '#6b87af', color_up: '#7499cd'
            })
        } else if (i >= sunSetInMinutes + 90) {
            list.push({
                time: i, color_base: '#000000', color_top: '#000000', color_up: '#000000'
            })
        }         
    }
    for (let { time, color_base, color_top, color_up } of listColors){
        list.push({ time: sunSetInMinutes + time, color_base, color_top, color_up })
        list.push({ time: sunRiseInMinutes - time, color_base, color_top, color_up })
    }
    
    list.sort( ( a , b) => a.time - b.time)
    // list.forEach(el => {
    //     console.log(`{ time: ${backToHoursMinutes(el.time)}, color_base: '${el.color_base}', color_top:'${el.color_top}', color_up: '${el.color_up}'},`)
    // })
    return list
}

const arr = getColorsAcordingToSunSet(times.sunset, times.sunrise)
console.log()


// const collorsArray = arr.map(el => `${el.color_up} ${el.time/1440*100}%`).join(',')

document.querySelector('#top').style.background = `linear-gradient(to right, ${arr.map(el => `${el.color_up} ${el.time / 1440 * 100}%`).join(',')})`
document.querySelector('#mid').style.background = `linear-gradient(to right, ${arr.map(el => `${el.color_top} ${el.time / 1440 * 100}%`).join(',')})`
document.querySelector('#bot').style.background = `linear-gradient(to right, ${arr.map(el => `${el.color_base} ${el.time / 1440 * 100}%`).join(',')})`


// arr.forEach(( el , index , array) => {
//     if(index == array.length-1){
//         document.querySelector('#flexu').innerHTML +=
//             `<div  style=" background-image: linear-gradient(to bottom,${el.color_top},${el.color_top},${el.color_base}); width: ${1/ 1440 * 100}%; height: 100%; position: fixed; left: ${el.time / 1440 * 100}%;"></div>`
//     }else{
//         document.querySelector('#flexu').innerHTML +=
//             `<div style=" background-image: linear-gradient(to bottom,${el.color_top},${el.color_top},${el.color_base}); width: ${array[index + 1].time / 1440 * 100 - el.time / 1440 * 100}%; height: 100%; position: fixed; left: ${el.time / 1440 * 100}%;"></div>`
//     }
// })


// listColors.forEach((el, index, array) => {
//     document.querySelector('#flexu').innerHTML +=
//         `<div  style=" background-image: linear-gradient(to bottom,${el.color_top},${el.color_top},${el.color_base}); width: ${100/array.length}%; height: 100%; position: fixed; left: ${index/array.length*100}%;"></div>`
// })

