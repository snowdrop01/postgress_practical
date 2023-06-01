
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));

function checkfield() {
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var errorMessage = document.getElementById("error");
    var errorDetail = "";
    try {
        if (password.length < 6) {
            errorDetail += "<br /> Password too short.";
        }
        if (/[A-Z]/g.test(password) == false) {
            errorDetail +=
                "<br /> Password should include at least one capital letter.";
        }
        if (/\d/g.test(password) == false) {
            errorDetail += "<br /> Password should include at least one digit.";
        }
        if (password != password2) {
            errorDetail += "<br /> Password should match with confirmpassword.";

        }
        throw errorDetail;
    } catch (err) {
        errorMessage.innerHTML = err;
        errorMsg.innerHTML = err;
    }
}

$(document).ready(function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear() - 10; // change according to year 0 for current
    var today1 = mm + '/' + dd + '/' + yyyy;
    $("#birthday").datepicker({
        format: 'mm-dd-yyyy',
        autoclose: true,
        endDate: "today",
        maxDate: today
    }).on('changeDate', function (ev) {
        $(this).datepicker('hide');
    });
    $('#birthday').keyup(function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9^-]/g, '');
        }
    });
});





