
const showMenu = document.querySelector('.btnicon')
const navBar = document.querySelector('.container')
const mainPage = document.querySelector('.todo-section')
const input = document.querySelector('.input')
const completed = document.querySelector('.completed-sect')


showMenu.addEventListener('click', function(){
    navBar.classList.toggle('active')
    mainPage.classList.toggle('dim')
    input.classList.toggle('dim')
    completed.classList.toggle('dim')
})


const toggle = document.querySelector('.toggle');
const indicator = document.querySelector('.indicator')
const mobileNight = document.querySelector('.mobile')

toggle.addEventListener('click', function(){
    toggle.classList.toggle('dark')
    indicator.classList.toggle('left-wheel')
    navBar.classList.toggle('night')
    mobileNight.classList.toggle('nightmode')
})
