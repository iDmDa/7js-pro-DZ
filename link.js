let demolink1 = document.querySelectorAll(".MegaMenu li");
demolink1.forEach(function(item) {
    item.addEventListener("click", function() {
        window.location.href = "product.html";
    });
});

let shoppingcart_menu = document.querySelectorAll("#shoppingcart-menu li");
shoppingcart_menu.forEach(function(item) {
    item.addEventListener("click", function() {
        window.location.href = "single_page.html";
    });
});

let checkout = document.querySelector("#shoppingcart-menu .checkout");
checkout.addEventListener("click", function() {
    window.location.href = "checkout.html";
});

let gotocadt = document.querySelector("#shoppingcart-menu .gotocadt");
gotocadt.addEventListener("click", function() {
    window.location.href = "shopping_cart.html";
});