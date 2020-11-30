var loader = document.querySelector('.loading')
window.addEventListener("DOMContentLoaded", function () {
    console.log("Window loaded");
})
setTimeout(function () {
    loader.style.display = "none";
}, 5000)

var container = document.querySelector('.container')
var productImage = document.querySelector('.product-image');
let button=document.querySelector('#button')
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth - e.pageX) / 50
    let yAxis = (window.innerWidth - e.pageY) / 50
    let imageX = 2 * xAxis
    let imageY = 2 * yAxis
    // productImage.style.transform=`rotate`
    // productImage.style.transform=`rotateX(${xAxis}deg) rotateY(${yAxis}deg)`
    container.style.transform = `rotateX(${xAxis}deg) rotateY(-${yAxis}deg)`
    productImage.style.height = '150px'
    productImage.style.width = '150px'
    productImage.style.transform = `rotateX(-${imageX}deg) rotateY(-${imageY}deg)`
    button.style.width='400px'
    button.style.height='50px'
    button.style.transform=`rotateX(-${xAxis}deg) rotateY(-${yAxis}deg)`
})
container.addEventListener("mouseout", (e) => {
    container.style.transition = 'all 1s linear'
    productImage.style.transition='all 1s linear'
    productImage.style.height = '100px'
    productImage.style.width = '100px'
    productImage.style.transform = `rotateX(0deg) rotateY(0deg)`
    button.style.width='200px'
    button.style.height='40px'
    button.style.transition='all 1s linear'
    container.style.transform = `rotateX(0deg) rotateY(0deg)`
    button.style.transform = `rotateX(0deg) rotateY(0deg)`
})