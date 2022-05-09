var Arr = JSON.parse(localStorage.getItem("payment")) || []

var form = document.querySelector("form")
form.addEventListener("submit", function () {
    event.preventDefault()
    var obj = {
        name: document.getElementById("name").value,
        lname: document.getElementById("lname").value,
        mail: document.getElementById("mail").value,
        Number: document.getElementById("Number").value,
        pincode: document.getElementById("pincode").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        add: document.getElementById("add").value,
        cardno: document.getElementById("cardno").value,
        dc1: document.getElementById("dc1").value,
        cvv: document.getElementById("cvv").value,
        namec: document.getElementById("namec").value

    }
    // if (name == "" || lname == "" || mail == "" || Number == "" || pincode == "" || city == "" || state == "") {

    //     alert("All the address fields are mandatory")
    // }
    // else if (cardno.length == 16 && cvv.length == 3) {
    //     alert("Sucessfully added")

    // }

    // else {
    //     alert("Invalid numbers");
    // }
    // window.location.href = "placed.html";
    alert("Confirming your details, Please wait.....")
    
    Arr.push(obj)
    console.log(Arr)
    localStorage.setItem("payment", JSON.stringify(Arr))
    window.location.href = "placed.html"
})


document.querySelector(".log").addEventListener("click",function(){
    submitdata()
})

function submitdata(){
    window.location.href = "login.html"
}

