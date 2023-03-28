let hamBurger = document.getElementsByClassName('ham-burger')
let bars = document.querySelectorAll('.bar')
hamBurger[0].addEventListener('click', () => {
    document.getElementsByClassName('nav-right')[0].classList.toggle('active')
    bars.forEach((element, index) => {
        element.classList.toggle(`b${index + 1}`)
    })

})