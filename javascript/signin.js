const login =(e)=>{
    e.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    fetch(`http://localhost:3000/user?email=${email}`)
    .then((res)=>res.json())
    .then((data) => {
        if(data.length > 0){
            if(data[0].password === password){
                alert("login successfull")
                localStorage.setItem("loggedIn",true)
            }
            else{
                alert("pasword incorrect")
            }
        }
        else{
            alert("user not found")
        }
    })
}

document.getElementById("form").addEventListener("submit",login)