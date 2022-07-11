var nameRef = document.getElementById('name');
var emailRef = document.getElementById('email');
var cityRef = document.getElementById('city');
var webRef = document.getElementById('website');
var btnRef = document.getElementById('dataBtn');


btnRef.addEventListener('click', getData)

function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        nameRef.innerText = data[0].name;
        emailRef.innerText = data[0].email;
        cityRef.innerText = data[0].address.city;
        webRef.innerText = data[0].website;
    })
}