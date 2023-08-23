import nav from "../components/nav.js";

document.getElementById("navbar").innerHTML = nav()

const display = (data) => {
    data.map((item) => {
        let image = document.createElement("img")
        image.src = item.image
        let title = document.createElement("h3")
        title.innerHTML = item.title
        let price = document.createElement("h4")
        price.innerHTML = item.price
        let category = document.createElement("p")
        category.innerHTML = item.category
        let rating = document.createElement("h5")
        let btn = document.createElement("button")
        btn.innerHTML = "Buy Now"
        let div = document.createElement("div")
        div.append(image, title, price, category, rating, btn)
        document.getElementById("product-box").append(div)
    })
}
const get= ()=>{
    fetch("http://localhost:3000/cart")
    .then((response)=>response.json())
    .then((response)=>{
        display(response)
    })
}
get()
