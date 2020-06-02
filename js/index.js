// Your code goes here
//#feba4d

//click
const h1 =document.querySelector('h1')
h1.addEventListener('click', event => {
    event.target.style.color ='green'
})

//mouseover
const navAnchor = document.querySelectorAll('.nav a')

navAnchor[0].addEventListener('mouseover', event => {
    event.target.style.color = 'blue'
})

//mouseout
navAnchor[0].addEventListener('mouseout', event =>{
    event.target.style.color = 'black'
})

//scroll
// console.log(document.querySelector('header'))
window.addEventListener('scroll', event =>{
    // console.log('test')
    document.querySelector('header').style.backgroundColor = '#feba4d'
})

//load
window.addEventListener('load', event=>{
    // console.log('test')
    document.querySelector('.home img').classList.remove('off')
})

//wheel
function wheelColor (event) {

    event.preventDefault()
    event.target.style.backgroundColor = 'purple'
    event.target.style.color = 'white'
}
const destSection = document.querySelector('.content-pick')
destSection.addEventListener('wheel', wheelColor)

const destP = document.querySelectorAll('div.destination p')
destP[0].addEventListener('wheel',wheelColor)
destP[1].addEventListener('wheel',wheelColor)
destP[2].addEventListener('wheel',wheelColor)

//dblclick

document.querySelector('footer').addEventListener('dblclick', event =>{
    console.log(event.target)
    event.target.style.backgroundColor = 'red'
})
