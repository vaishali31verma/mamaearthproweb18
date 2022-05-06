var Arr = JSON.parse(localStorage.getItem("payment")) || []

var form = document.querySelector("form")
form.addEventListener("submit", function () {
    event.preventDefault()
    var obj = {
        name: document.getElementById("name").value,
        name: document.getElementById("name").value,
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
    if (name == "" || name == "" || mail == "" || Number == "" || pincode == "" || city == "" || state == "") {

        alert("All the address fields are mandatory")
    }
    else if (cardno.length == 16 && cvv.length == 3) {
        window.location.href = "index.html";
    }
    
    else {
        alert("Invalid numbers");
    }


    Arr.push(obj)
    console.log(Arr)
    localStorage.setItem("payment", JSON.stringify(Arr))
    window.location.href = "placed.html"
})


