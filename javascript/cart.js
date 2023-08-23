import nav from "../components/nav.js";

document.getElementById("navbar").innerHTML = nav()

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalprice = 0;
cart.map((item) => {
  totalprice += item.price * item.qty * 10;
});


let cart1 = (cart) => {

  cart.map((item, index) => {

    let mainbox = document.createElement("div");

    let imgdiv = document.createElement("div");
    let image = document.createElement("img");
    image.src = item.image;

    let texts = document.createElement("div");

    let title = document.createElement("h3");
    title.innerHTML = item.title;

    let minse = document.createElement("button");
    minse.innerHTML = "-";

    let price1 = document.createElement("p");
    price1.innerHTML = `${item.price * 10}$`;

    let plusminse = document.createElement("div");

    let btns = document.createElement("button");
    btns.innerHTML = item.qty;

    let plus = document.createElement("button");
    plus.innerHTML = "+";

    imgdiv.append(image);
    texts.append(title, price1);
    plusminse.append(minse, btns, plus);
    mainbox.append(imgdiv, texts, plusminse);
    document.getElementById("cartpage").append(mainbox);

    price1.setAttribute("class", "price1");
    mainbox.setAttribute("class", "mainbox");
    imgdiv.setAttribute("class", "imgdiv");
    texts.setAttribute("class", "texts");
    plusminse.setAttribute("class", "plusminse");

    minse.addEventListener("click", () => {
      console.log(item);
      let qty = cart[index].qty;
      if (qty == 1) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));

        console.log(cart);
        window.location.reload();
      } else {
        cart[index].qty -= 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload();
      }
    });
    plus.addEventListener("click", () => {
      console.log("test");
      cart[index].qty += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location.reload();
    });
  });
};
cart1(cart);

let cart2 = () => {
  let mainbox2 = document.createElement("div");

  let lable = document.createElement("label");
  lable.innerHTML = " PRODUCT TOTAL PRICE :";

  document.getElementById("other").append(mainbox2);

  document.getElementById("price").append(lable, totalprice);

  mainbox2.setAttribute("class", "mainbox2");
};
cart2();