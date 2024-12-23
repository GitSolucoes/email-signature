window.addEventListener('DOMContentLoaded', () => {

    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const tel = localStorage.getItem('tel');
    const position = localStorage.getItem('position');

    document.getElementById('name').innerHTML = name;
    document.getElementById('tel').textContent = tel;
    document.getElementById('email').textContent = email;
    document.getElementById('position').textContent = position;
});