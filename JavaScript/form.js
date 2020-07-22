
// const myForm = document.getElementById('myForm');
// myForm.addEventListener("submit", (e) => {
//     e.preventDefault();
// })
function validate() {
    var password = document.forms["myForm"]["psw"].value;
    var conPassword = document.forms["myForm"]["conPsw"].value
    var form = document.forms["myForm"].value;

        document.getElementById('confirm').style.color = "#6b0303";
        document.getElementById('psw').style.color = "#6b0303";
        
        if(password.length < 6) {
            document.getElementById('psw').innerHTML = "*Password must be at least 6 characters";
            return false;
        }
        if(password <= 6) {
            document.getElementById('psw').style.display = "none";
            return false;
        }
       if(password !== conPassword) {
        document.getElementById('confirm').innerHTML = "*Passwords dosen't match!";
        return false;
    }

    if(form == "") {
        alert("Please Completly fill the form");
        return false
    } else {
        alert("Congratulations! You'll recieve a confirmation Email shortly")
    }
}
// function validate() {
//     var name = document.forms["myForm"]["name"].value;
//     var num = document.forms["myForms"]["num"].value;
//     var email = document.forms["myForm"]["email"].value;
//     var password = document.forms["myForm"]["psw"].value;

//     if(isNaN(num) || num < 0 ) {
//         document.getElementById('numberErr').innerHTML = "Please input valid number"
//     }
// }
