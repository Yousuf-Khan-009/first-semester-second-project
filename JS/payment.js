
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

// function data(){
//     var numberinput = document.getElementById('card-number').value
//     var expirationinput = document.getElementById('expiration-date').value
//     var cvvinput = document.getElementById('cvv').value
//     var nameinput = document.getElementById('card-name').value

// if(numberinput==""||expirationinput==""||cvvinput==""||nameinput==""){
//     alert('All Fields are mendatory')
// }

// }

cardnumbers.addEventListener('keyup',function(){
    num=this.value
    if(num.length==4 || num)
})