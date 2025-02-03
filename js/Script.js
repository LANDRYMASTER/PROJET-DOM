
// declarations de variable local

let PriceTotal = 0;
let PriceBasket = 0;
let PriceChausette = 0;
let PriceBags = 0;

// Importation des elemments du DOM dans Mes variable JS
let TotalPrice = document.querySelector(".total");
TotalPrice.innerHTML = `${PriceTotal} $`;  // declaration du panier variable selon les articles choisir
let Chose = document.querySelectorAll("i");

let Qota = document.querySelectorAll(".quantity");

let NbrBasket = Qota[0];

let quantityBasket = 0;

let NbrChaussette = Qota[1];

let quantityChaussette = 0;

let NbrBags = Qota[2];

let quantityBags = 0;

let AddBaskets = Chose[0];

let MinBaskets = Chose[1];

let RemoveBaskets = Chose[0];


let LikeBaskets = Chose[3];

let AddChausette = Chose[4];

let MinChausette = Chose[5];

let RemoveChausette = Chose[1];


let LikeChausette = Chose[7];

let AddBags = Chose[8];

let MinBags = Chose[9];

let RemoveBags = Chose[2];


let LikeBags = Chose[11];

// likez ou dislikez l'article basket
LikeBaskets.addEventListener("click", () => {
    if ( LikeBaskets.getAttribute("id") == "like") {
        LikeBaskets.removeAttribute("id");
    } else {
        LikeBaskets.setAttribute("id", "like");
    }
});

// ajoutez l'article basket au panier 
AddBaskets.addEventListener("click", () => {
    quantityBasket++;
    PriceBasket += 100;
    PriceTotal += 100;
    TotalPrice.innerHTML = `${PriceTotal} $`;
    NbrBasket.innerHTML = `${quantityBasket}`;
});

// retirer basket du panier tant qu'il exsite encore des baskets dans le panier
MinBaskets.addEventListener("click", () => {
    if (quantityBasket > 0) {
        quantityBasket--;
        PriceBasket -= 100;
        PriceTotal -= 100;
        TotalPrice.innerHTML = `${PriceTotal} $`;
        NbrBasket.innerHTML = `${quantityBasket}`;
    }
});

// Supprimer toutes les baskets du panier 
RemoveBaskets.addEventListener("cilck", () => {
    quantityBasket = 0;
    PriceTotal -= PriceBasket;
    PriceBasket = 0;
    TotalPrice.innerHTML = `${PriceTotal} $`;
    NbrBasket.innerHTML = `${quantityBasket}`;
});

// likez ou dislikez l'article sac a dos
LikeBags.addEventListener("click", () => {
    if ( LikeBags.getAttribute("id") == "like") {
        LikeBags.removeAttribute("id");
    } else {
        LikeBags.setAttribute("id", "like");
    }
});

// ajoutez l'article sac a dos au panier 
AddBags.addEventListener("click", () => {
    quantityBags++;
    PriceBags += 50;
    PriceTotal += 50;
    TotalPrice.innerHTML = `${PriceTotal} $`;
    NbrBags.innerHTML = `${quantityBags}`;
});

// retirer sac a dos du panier tant qu'il exsite encore des sac a dos dans le panier
MinBags.addEventListener("click", () => {
    if (quantityBags > 0) {
        quantityBags--;
        PriceBags -= 50;
        PriceTotal -= 50;
        TotalPrice.innerHTML = `${PriceTotal} $`;
        NbrBags.innerHTML = `${quantityBags}`;
    }
});

// Supprimer touts les sac a dos du panier 
RemoveBags.addEventListener("cilck", () => {
    quantityBags = 0;
    PriceTotal -= PriceBags;
    PriceBags = 0;
    TotalPrice.innerHTML = `${PriceTotal} $`;
    NbrBags.innerHTML = `${quantityBags}`;
});

// likez ou dislikez l'article chaussette
LikeChausette.addEventListener("click", () => {
    if ( LikeChausette.getAttribute("id") == "like") {
        LikeChausette.removeAttribute("id");
    } else {
        LikeChausette.setAttribute("id", "like");
    }
});

// ajoutez l'article chausette au panier 
AddChausette.addEventListener("click", () => {
    quantityChaussette++;
    PriceChausette += 20;
    PriceTotal += 20;
    TotalPrice.innerHTML = `${PriceTotal} $`;
    NbrChaussette.innerHTML = `${quantityChaussette}`;
});

// retirer chausette du panier tant qu'il exsite encore des chausettes dans le panier
MinChausette.addEventListener("click", () => {
    if (quantityChaussette > 0) {
        quantityChaussette--;
        PriceChausette -= 20;
        PriceTotal -= 20;
        TotalPrice.innerHTML = `${PriceTotal} $`;
        NbrChaussette.innerHTML = `${quantityChaussette}`;
    }
});

// Supprimer toutes les chaussettes du panier
RemoveChausette.addEventListener("cilck", () => {
    quantityChaussette = 0;
    PriceTotal -= PriceChausette;
    PriceChausette = 0;
    TotalPrice.innerHTML = `${PriceTotal} $`;
    NbrChaussette.innerHTML = `${quantityChaussette}`;
});


