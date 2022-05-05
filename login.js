var signUpArr = JSON.parse(localStorage.getItem("signup"))||[]
// var loginarr = JSON.parse(localStorage.getItem("login"))||[];

var form = document.getElementById("form")



form.addEventListener("submit",function(event){
    // display()
    event.preventDefault()
    if(signUpArr.length==0){
        alert("User Does'nt exist signup first")
    }
    else{
    var objlogin = {
        fullName:form.fname.value,
        password:form.password.value,
        email:form.Email.value,    
    }
   display(objlogin)
}
})
console.log(signUpArr.length)

function display(objlogin){
    signUpArr.forEach(function(elem){
            if(elem.Email==objlogin.Email && elem.password!=objlogin.password){
               alert("Wrong Password")
               
            }
            else if(elem.Email!=objlogin.Email && elem.password==objlogin.password){
                alert("Email doesn't exist")
            }
            else if(elem.Email==objlogin.Email && elem.password==objlogin.password){
                alert("login sucessfully")
                window.location.href = "home.html"
                localStorage.setItem("login",JSON.stringify(objlogin))
            }
    })

}
      

