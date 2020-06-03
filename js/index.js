// Your code goes here
//#feba4d

//click
document.querySelector('.nav-container').addEventListener('click', event => {

    event.currentTarget.style.backgroundColor ='green'
})

const h1 = document.querySelector('h1')
h1.addEventListener('click', event => {
    event.stopPropagation()
    event.target.style.backgroundColor ='green'
})

//mouseover
const navAnchor = document.querySelectorAll('.nav a')

function turnBlue(event){
    event.target.style.color = 'blue'
    event.preventDefault()
}

navAnchor[0].addEventListener('mouseover', turnBlue)
navAnchor[1].addEventListener('mouseover', turnBlue)
navAnchor[2].addEventListener('mouseover', turnBlue)
navAnchor[3].addEventListener('mouseover', turnBlue)

//mouseout
function turnBlack(event){
    event.target.style.color = 'black'
}
navAnchor[0].addEventListener('mouseout', turnBlack)
navAnchor[1].addEventListener('mouseout', turnBlack)
navAnchor[2].addEventListener('mouseout', turnBlack)
navAnchor[3].addEventListener('mouseout', turnBlack)

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

    event.target.style.backgroundColor = 'purple'
    event.target.style.color = 'white'
}

const destP = document.querySelectorAll('div.destination p')
destP[0].addEventListener('wheel',wheelColor)
destP[1].addEventListener('wheel',wheelColor)
destP[2].addEventListener('wheel',wheelColor)

//dblclick

document.querySelector('footer').addEventListener('dblclick', event =>{
    event.target.style.backgroundColor = 'red'
})

//select
document.querySelector('.content-destination textarea').addEventListener('select', event =>{
    event.target.style.color = 'orange'
})

//keyup
document.addEventListener('keyup', event =>{
    if (event.key === 'e'){
        document.querySelector('.intro h2').style.color = 'navy'
    }
})

//resize
window.addEventListener('resize', event =>{
    
    document.querySelector('h1').style.backgroundColor='white'
})
