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
        let minus = document.createElement("h2")
        minus.innerHTML = "-"
        let num = document.createElement("h2")
        num.innerHTML = "01"
        let plus = document.createElement("h2")
        plus.innerHTML = "+"
        let btn = document.createElement("button")
        btn.innerHTML = "Buy Now"
        let div = document.createElement("div")
        div.append(image, title, price, category, rating,minus,num,plus, btn)
        document.getElementById("product-box").append(div)
        let a=1
        plus.addEventListener("click",()=>{
            a++
            a = (a < 10) ? "0" + a : a;
            num.innerHTML = a
        })
        minus.addEventListener("click",()=>{
            if(a > 1){
                a--
                a = (a < 10) ? "0" + a : a;
            num.innerHTML = a
            }
        })
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