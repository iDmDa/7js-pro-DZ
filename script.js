
function showFeatured (data, start, stop) {
    let featuredItems = document.querySelector("#featured-items .content");
    for(let i = start; i < stop; i++) {
        featuredItems.insertAdjacentHTML('beforeend', `
        <div class="items">
            <div class="img-box">
                <img class = "cart-img" src="/img/${data[i].img}" alt="">
                <div class = "add-to-cart" data-id = "${data[i].id}">
                    <img src="/img/shopcartwhite.png" alt="">
                    <p>Add to Cart</p>
                </div>
                <div class = "add-info">
                    <p>Добавлено</p>
                </div>
            </div>
            <p class="description">${data[i].name}</p>
            <p class="price">${data[i].price}</p>
        </div>
        `);
    }
}

function createAddCard (data, id) {
    let cartItems = document.querySelector("#cart-items");
    let item = data.filter(obj => obj.id == id);
    cartItems.insertAdjacentHTML("beforeend", `
        <div class="cart-box" data-id = ${item[0].id}>
            <div class = "close"><img src="/img/x.png" alt=""></div>
            <div class="img-box">
                <img src="/img/${item[0].img}" alt="">
            </div>
            <div class="info-box">
                <h4>${item[0].name.toUpperCase()}</h4>
                <p>Price: <span>${item[0].price}</span></p>
                <p>Color: Red</p>
                <p>Size: Xl</p>
                <p>Quantity: <input type="text" value="1"></p>
            </div>
        </div>
    `);

    let cartItemsAll = document.querySelectorAll("#cart-items .cart-box");
    if(cartItemsAll.length) cartItems.style.display = "block";
}

let featuredItems = document.querySelector("#featured-items");
featuredItems.addEventListener("click", function(e) {
    if(e.target.closest(".add-to-cart")) {
        createAddCard(data, e.target.closest(".add-to-cart").dataset.id);
        e.target.closest(".items").classList.add("added");
        e.target.closest(".items").querySelector(".add-info").style.display = "flex";
        e.target.closest(".items").querySelector(".add-to-cart").style.display = "none";
    }
})

let cartItems = document.querySelector("#cart-items");
cartItems.addEventListener("click", function(e) {
    if(e.target.closest(".close")) {
        e.target.closest(".cart-box").remove();
        let cartItemsAll = document.querySelectorAll("#cart-items .cart-box");
        if(!cartItemsAll.length) cartItems.style.display = "none";
    
        let items = document.querySelectorAll(".items .add-to-cart");
        let item = Array.from(items).find(elem => elem.dataset.id === e.target.closest(".cart-box").dataset.id);
        item.closest(".items").classList.remove("added");
        item.closest(".items").querySelector(".add-info").style.display = "";
        item.closest(".items").querySelector(".add-to-cart").style.display = "";
    }
})

showFeatured(data, 0, data.length);


