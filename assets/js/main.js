var heading = document.getElementById('dom-heading');
var myButton = document.getElementById('my-button');

myButton.addEventListener('click', () => {
    heading.classList.toggle('open');
})