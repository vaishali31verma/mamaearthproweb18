var signUpArr = JSON.parse(localStorage.getItem("signup"))||[]

var form = document.getElementById("form")
form.addEventListener("submit",function(){
    event.preventDefault()
    var objsignup = {
        phno:form.phnum.value,
        fname:form.fname.value,
        password:form.password.value,
        email:form.Email.value,
        gender:form.gender.value,
        date:form.date.value,   
    }
    signUpArr.push(objsignup)
    console.log(signUpArr)
    localStorage.setItem("signup",JSON.stringify(signUpArr))
    window.location.href="login.html"
})
