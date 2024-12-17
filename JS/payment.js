
var formbtn = document.getElementById('submit-btn')

formbtn.addEventListener('click', function () {

    var numberinput = document.getElementById('card-number').value

    var expirationinput = document.getElementById('expiration-date').value

    var cvvinput = document.getElementById('cvv').value

    var nameinput = document.getElementById('card-name').value


    localStorage.setItem('Card Number', numberinput);

    localStorage.setItem('Expiration', expirationinput);

    localStorage.setItem('CVV', cvvinput)

    localStorage.setItem('Name', nameinput)

})

document.getElementById('submit').addEventListener('click', function () {

    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });

})