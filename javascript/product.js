import nav from "../components/nav.js";
document.getElementById("navbar").innerHTML=nav()

const display=(data)=>{
    data.map((item)=>{
        let image = document.createElement("img")
        image.src = item.image
        let title = document.createElement("h3")
        title.innerHTML = item.title
        let price = document.createElement("h4")
        price.innerHTML = item.price
        let category = document.createElement("p")
        category.innerHTML = item.category
        let rating = document.createElement("h5")

        if(item.rating.rate > 4){
            rating.innerHTML = "*****"
            rating.style.color = "green"
        }
        else if(item.rating.rate <= 4 && item.rating.rate >= 3){
            rating.innerHTML = "****"
            rating.style.color = "darkorange"
        }
        else{
            rating.innerHTML = "**"
            rating.style.color = "red"
        }
        let btn = document.createElement("button")
        btn.innerHTML="Buy Now"
        let btn2 = document.createElement("button")
        btn2.innerHTML="Add to Cart"
        btn2.addEventListener("click",()=>{
            console.log(item.id);
            let loggedIn = localStorage.getItem("loggedIn")
            if(loggedIn){
                fetch(`http://localhost:3000/cart?id=${item.id}`)
                .then((response)=>response.json())
                .then((data)=>{
                    if(data.length > 0){
                        alert("Product was added Successfully")
                        data[0].qty=data[0].qlt+1
                        console.log(data[0].qty);
                        fetch(`http://localhost:3000/cart`,{
                            method:"PATCH",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify(...data)
                        })
                    }
                })
                fetch("http://localhost:3000/cart", {
                            method: "POST",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify(item)
                        })
                        window.location.href="/pages/cart.html"
            }
            else{
                window.location.href="./pages/signin.html"
            }
        })
        let div = document.createElement("div")
        div.append(image,title,price,category,rating,btn,btn2)
        document.getElementById("box2").append(div)
    })
}
const get= ()=>{
    fetch("http://localhost:3000/product")
    .then((response)=>response.json())
    .then((response)=>{
        display(response)
    })
}
get()