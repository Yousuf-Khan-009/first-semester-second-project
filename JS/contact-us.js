var formbtn = document.getElementById('submit-btn')

formbtn.addEventListener('click', function () {

    var nameinput = document.getElementById('name').value

    var emailinput = document.getElementById('email').value

    var messageinput = document.getElementById('message').value

    localStorage.setItem('Name', nameinput)

    localStorage.setItem('Email', emailinput)

    localStorage.setItem('Your Message', messageinput)

})