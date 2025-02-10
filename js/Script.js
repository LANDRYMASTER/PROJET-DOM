
// Importation des elemments du DOM dans Mes variable JS
let TotalPrice = document.querySelector(".total");
let btn = document.querySelectorAll("i");
let article = document.querySelectorAll(".list-products>.card-body");
let Qota = document.querySelectorAll(".quantity");

// declarations de variable local

let PriceTotal = 0;
let PriceBasket = 0;
let PriceChausette = 0;
let PriceBags = 0;
let quantityBasket = 0;
let quantityBags = 0;
let quantityChaussette = 0;
let NbrBasket = Qota[0];
let NbrChaussette = Qota[1];
let NbrBags = Qota[2];
let AddBaskets = btn[0];
let MinBaskets = btn[1];
let RemoveBaskets = btn[2];
let LikeBaskets = btn[3];
let AddChausette = btn[4];
let MinChausette = btn[5];
let RemoveChausette = btn[6];
let LikeChausette = btn[7];
let AddBags = btn[8];
let MinBags = btn[9];
let RemoveBags = btn[10];
let LikeBags = btn[11];
let articleBaskets = article[0];
let articleChausettes = article[1];
let articleBags = article[2];


// view      

let actualisation = () => {
    TotalPrice.innerHTML = `${PriceTotal} $`;
    NbrBasket.innerHTML = `${quantityBasket}`;
    NbrBags.innerHTML = `${quantityBags}`;
    NbrChaussette.innerHTML = `${quantityChaussette}`;
}

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
    actualisation();
});

// retirer basket du panier tant qu'il exsite encore des baskets dans le panier
MinBaskets.addEventListener("click", () => {
    if (quantityBasket > 0) {
        quantityBasket--;
        PriceBasket -= 100;
        PriceTotal -= 100;
        actualisation();
    }
});

// Supprimer les baskets du panier 
RemoveBaskets.addEventListener("click", () => {
    if (confirm("etes vous sur") == true ) {
        quantityBasket = 0;
        PriceTotal -= PriceBasket;
        PriceBasket = 0;
        actualisation();
        articleBaskets.setAttribute("id", "display");
     }
    else {
        alert("Continuez vos achats");
    }
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
    actualisation();
});

// retirer sac a dos du panier tant qu'il exsite encore des sac a dos dans le panier
MinBags.addEventListener("click", () => {
    if (quantityBags > 0) {
        quantityBags--;
        PriceBags -= 50;
        PriceTotal -= 50;
        actualisation();
    }
});

// Supprimer les sac a dos du panier 
RemoveBags.addEventListener("click", () => {
    if (confirm("etes vous sur") == true ) {
        quantityBags = 0;
        PriceTotal -= PriceBags;
        PriceBags = 0;
        actualisation();
        articleBags.setAttribute("id", "display");
    }
    else {
        alert("Continuez vos achats");
    }
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
    actualisation();
});

// retirer chausette du panier tant qu'il exsite encore des chausettes dans le panier
MinChausette.addEventListener("click", () => {
    if (quantityChaussette > 0) {
        quantityChaussette--;
        PriceChausette -= 20;
        PriceTotal -= 20;
        actualisation();
    }
});

// Supprimer toutes les chaussettes du panier
RemoveChausette.addEventListener("click", () => {
    if (confirm("etes vous sur") == true ) {
        quantityChaussette = 0;
        PriceTotal -= PriceChausette;
        PriceChausette = 0;
        actualisation();
        articleChausettes.setAttribute("id", "display");
    }
    else {
        alert("Continuez vos achats");
    }
});
