const hats = [
    "assets/clothes/null.png",
    "assets/clothes/sapo.png",
    "assets/clothes/gojo.png",
    "assets/clothes/bolacha.png",
    "assets/clothes/laco.png"
];

let hatIndex = 0;

const tshirts = [
    "assets/clothes/null.png",
    "assets/clothes/ilove.png",
    "assets/clothes/cachecol.png",
    "assets/clothes/camisajuju.png",
    "assets/clothes/nanami.png"
];

let tshirtIndex = 0;

const pants = [
    "assets/clothes/null.png",
    "assets/clothes/cuequinha.png",
    "assets/clothes/calcajuju.png",
    "assets/clothes/verde.png"
];

let pantsIndex = 0;

function nextHat() {
    hatIndex = (hatIndex +1 ) % hats.length;
    document.getElementById("hat").src = hats[hatIndex] || "";
};

function nextTshirt() {
    tshirtIndex= (tshirtIndex +1) % tshirts.length;
    document.getElementById("tshirt").src = tshirts[tshirtIndex] || "";
};

function nextPants() {
    pantsIndex = (pantsIndex +1) % pants.length;
    document.getElementById("pants").src = pants[pantsIndex] || "";
};


function previousHat() {
    hatIndex = (hatIndex - 1 + hats.length) % hats.length; 
    document.getElementById("hat").src = hats[hatIndex] || "";
};

function previousTshirt() {
    tshirtIndex = (tshirtIndex - 1 + tshirts.length) % tshirts.length; 
    document.getElementById("tshirt").src = tshirts[tshirtIndex] || "";
};

function previousPants() {
    pantsIndex = (pantsIndex - 1 + pants.length) % pants.length; 
    document.getElementById("pants").src = pants[pantsIndex] || "";
};
