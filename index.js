let mybutton = document.getElementById('mybutton')
let buttonalert = document.getElementsByClassName('btn-alert');

mybutton.addEventListener('click', buttonalert);

function buttonalert() {
    mybutton.textContent = "your clicked";
}
