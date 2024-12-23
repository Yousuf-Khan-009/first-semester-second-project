document.getElementById('card-number').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9\s]/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
});

document.getElementById('expiry').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9/]/g, '').replace(/(\d{2})(?=\d)/, '$1/');
});

document.getElementById('cvv').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById('card-name').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
});


var formbtn = document.getElementById('submit-btn')

formbtn.addEventListener('click', function () {

    var numberinput = document.getElementById('card-number').value

    var expirationinput = document.getElementById('expiry').value

    var cvvinput = document.getElementById('cvv').value

    var nameinput = document.getElementById('card-name').value


    localStorage.setItem('Card Number', numberinput);

    localStorage.setItem('Expiration', expirationinput);

    localStorage.setItem('CVV', cvvinput)

    localStorage.setItem('Cardholder Name', nameinput)

})