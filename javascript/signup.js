import nav from "../components/nav.js";

document.getElementById("navbar").innerHTML=nav()

const userdata = (e) => {
    e.preventDefault();
    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    var nameregex = /^[a-zA-Z ]{2,30}$/;
    const emailregex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var passregex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    let count = 0;

    if (!(nameregex.test(user.name))) {
        document.getElementById("n_err").innerHTML = "Invalid not a Name";
    }
    else {
        document.getElementById("n_err").innerHTML = ""
    }

    if (!(emailregex.test(user.email))) {
        document.getElementById("e_err").innerHTML = "Invalid not a Email";
    }
    else {
        document.getElementById("e_err").innerHTML = ""
    }

    if (!(passregex.test(user.password))) {
        document.getElementById("p_err").innerHTML = "Invalid not a Password";
    }
    else {
        document.getElementById("p_err").innerHTML = ""
    }
    if ((nameregex.test(user.name)) && (emailregex.test(user.email)) && (passregex.test(user.password))) {
        fetch(`http://localhost:3000/user?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 0) {
                    alert("already exists");
                    setTimeout(() => {
                        window.location.href = "/pages/signin.html"
                    }, 1000)
                }
                else {
                    try {
                        fetch(" http://localhost:3000/user", {
                            method: "POST",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify(user)
                        })
                        localStorage.setItem("loggedIn", true);
                    }
                    catch (error) {
                        alert("error")
                    }
                }

            })
    }
}

document.querySelector("#form").addEventListener("submit", userdata);
document.getElementById("name").addEventListener("keypress", () => {

    //name
    let name = document.getElementById("name").value
    var nameregex = /^[a-zA-Z ]{2,30}$/;
    if (!(nameregex.test(name))) {
        document.getElementById("n_err").innerHTML = "Invalid not a Name";
        document.getElementById("n_err").style.color = "red"
    }
    else {
        document.getElementById("n_err").innerHTML = "valid name"
        document.getElementById("n_err").style.color = "green"
    }
})


document.getElementById("email").addEventListener("keypress", () => {
    //email
    let email = document.getElementById("email").value
    const emailregex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!(emailregex.test(email))) {
        document.getElementById("e_err").innerHTML = "Invalid not a Email";
        document.getElementById("e_err").style.color = "red"
    }
    else {
        document.getElementById("e_err").innerHTML = "valid email"
        document.getElementById("e_err").style.color = "green"
    }
})

document.getElementById("password").addEventListener("keypress", () => {
    //password
    let password = document.getElementById("password").value
    var passregex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!(passregex.test(password))) {
        document.getElementById("p_err").innerHTML = "Invalid not a Password";
        document.getElementById("p_err").style.color = "red"
    }
    else {
        document.getElementById("p_err").innerHTML = "valid password"
        document.getElementById("p_err").style.color = "green"
    }
})

