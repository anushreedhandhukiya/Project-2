import nav from "../components/nav.js";

document.getElementById("navbar").innerHTML = nav()

const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const quantityDisplay = document.getElementById("quantity");
const totalPriceDisplay = document.getElementById("totalPrice");
let price = 10;
let quantity = 1;

const display = (data) => {
    data.map((item) => {
        let image = document.createElement("img")
        image.src = item.image
        let title = document.createElement("h3")
        title.innerHTML = item.title
        let category = document.createElement("p")
        category.innerHTML = item.category
        let rating = document.createElement("h5")
        let minus = document.createElement("h2")
        minus.innerHTML = "-"
        minusButton.addEventListener("click", () => {
            if (quantity > 1) {
                quantity--;
                quantityDisplay.textContent = quantity;
                updateTotalPrice();
            }
        });
        let quantity = document.createElement("h2")
        quantity.innerHTML = item.quantity
        let plus = document.createElement("h2")
        plus.innerHTML = "+"
        plusButton.addEventListener("click", () => {
            quantity++;
            quantityDisplay.textContent = quantity;
            updateTotalPrice();
        });
        let Price = document.createElement("h3")
        Price.innerHTML= item.Price
        function updateTotalPrice() {
            const total = price * quantity;
            totalPriceDisplay.textContent = `$${total}`;
        }
        let btn = document.createElement("button")
        btn.innerHTML = "Buy Now"
        let btn1 = document.createElement("button")
        btn1.innerHTML = "delete"
        btn1.addEventListener("click", () => {
            fetch(`http://localhost:3000/cart/${item.id}`, {
                method: "DELETE",
            })
        })
        let div = document.createElement("div")
        div.append(image, title, category, rating, minus, quantity, plus,Price, btn,btn1)
        document.getElementById("product-box").append(div)
    })
}
const get = () => {
    fetch("http://localhost:3000/cart")
        .then((response) => response.json())
        .then((response) => {
            display(response)
        })
}
get()