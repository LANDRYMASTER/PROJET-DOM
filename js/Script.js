
let PriceTotal = 0;
let PriceBasket = 0;
let PriceChausette = 0;
let PriceBags = 0;

let TotalPrice = document.querySelector(".total");

TotalPrice.innerHTML = `${PriceTotal} $`;

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
console.log(RemoveBaskets);

let LikeBaskets = Chose[3];

let AddChausette = Chose[4];

let MinChausette = Chose[5];

let RemoveChausette = Chose[1];
console.log(RemoveChausette);

let LikeChausette = Chose[7];

let AddBags = Chose[8];

let MinBags = Chose[9];

let RemoveBags = Chose[2];
console.log(AddBaskets);

let LikeBags = Chose[11];

LikeBaskets.addEventListener("click", () => {
    if ( LikeBaskets.getAttribute("id") == "like") {
        LikeBaskets.removeAttribute("id");
    } else {
        LikeBaskets.setAttribute("id", "like");
    }
});

AddBaskets.addEventListener("click", () => {
    quantityBasket++;
    PriceBasket += 100;
    PriceTotal += 100;
    TotalPrice.innerHTML = `${PriceTotal} $`;
    NbrBasket.innerHTML = `${quantityBasket}`;
});

MinBaskets.addEventListener("click", () => {
    if (quantityBasket > 0) {
        quantityBasket--;
        PriceBasket -= 100;
        PriceTotal -= 100;
        TotalPrice.innerHTML = `${PriceTotal} $`;
        NbrBasket.innerHTML = `${quantityBasket}`;
    }
});

RemoveBaskets.addEventListener("cilck", () => {
    quantityBasket = 0;
    PriceTotal -= PriceBasket;
    PriceBasket = 0;
    TotalPrice.innerHTML = `${PriceTotal} $`;
    NbrBasket.innerHTML = `${quantityBasket}`;
});

LikeBags.addEventListener("click", () => {
    if ( LikeBags.getAttribute("id") == "like") {
        LikeBags.removeAttribute("id");
    } else {
        LikeBags.setAttribute("id", "like");
    }
});

AddBags.addEventListener("click", () => {
    quantityBags++;
    PriceBags += 50;
    PriceTotal += 50;
    TotalPrice.innerHTML = `${PriceTotal} $`;
    NbrBags.innerHTML = `${quantityBags}`;
});

MinBags.addEventListener("click", () => {
    if (quantityBags > 0) {
        quantityBags--;
        PriceBags -= 50;
        PriceTotal -= 50;
        TotalPrice.innerHTML = `${PriceTotal} $`;
        NbrBags.innerHTML = `${quantityBags}`;
    }
});

RemoveBags.addEventListener("cilck", () => {
    quantityBags = 0;
    PriceTotal -= PriceBags;
    PriceBags = 0;
    TotalPrice.innerHTML = `${PriceTotal} $`;
    NbrBags.innerHTML = `${quantityBags}`;
});

LikeChausette.addEventListener("click", () => {
    if ( LikeChausette.getAttribute("id") == "like") {
        LikeChausette.removeAttribute("id");
    } else {
        LikeChausette.setAttribute("id", "like");
    }
});

AddChausette.addEventListener("click", () => {
    quantityChaussette++;
    PriceChausette += 20;
    PriceTotal += 20;
    TotalPrice.innerHTML = `${PriceTotal} $`;
    NbrChaussette.innerHTML = `${quantityChaussette}`;
});

MinChausette.addEventListener("click", () => {
    if (quantityChaussette > 0) {
        quantityChaussette--;
        PriceChausette -= 20;
        PriceTotal -= 20;
        TotalPrice.innerHTML = `${PriceTotal} $`;
        NbrChaussette.innerHTML = `${quantityChaussette}`;
    }
});

RemoveChausette.addEventListener("cilck", () => {
    quantityChaussette = 0;
    PriceTotal -= PriceChausette;
    PriceChausette = 0;
    TotalPrice.innerHTML = `${PriceTotal} $`;
    NbrChaussette.innerHTML = `${quantityChaussette}`;
});


