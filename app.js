const tapirs = [
    {
        name: "",
        category: "water tapir",
        price: 20,
        img: "https://ideas.ted.com/wp-content/uploads/sites/3/2015/11/tapir_4_daniel-zupanc.jpg",
        alt: "",
        inStock: true,
    },
    {
        name: "",
        category: "grass tapir",
        price: 15,
        img: "https://th.bing.com/th/id/OIP.hvt0IDWKDsydPYZ0BLbTWQHaFA?w=286&h=193&c=7&r=0&o=7&pid=1.7&rm=3",
        alt: "",
        inStock: true,
    },
    {
        name: "",        
        category: "land tapir",
        price: 10,
        img: "https://th.bing.com/th/id/OIP.UAeh2jRhxY2ouHOyOoRqhgHaEj?w=313&h=193&c=7&r=0&o=7&pid=1.7&rm=3",
        alt: "",
        inStock: true,
    },
    {
        name: "",        
        category: "dirt tapir",
        price: 20,
        img: "https://imgs.mongabay.com/wp-content/uploads/sites/20/2019/01/14064748/animals_00884-762x512.jpg",
        alt: "",
        inStock: true,
    },
    {
        name: "",        
        category: "land tapir",
        price: 40,
        img: "https://tse1.mm.bing.net/th/id/OIP.V9aeKEmWPjvZHdMFwy9ixQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
        alt: "",
        inStock: true,
    },
    {
        name: "",        
        category: "land tapir",
        price: 30,
        img: "https://tse2.mm.bing.net/th/id/OIP.MBxRql-4XGYCLZjZgUAVoQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
        alt: "",
        inStock: true,
    },
    {
        name: "",
        category: "grass tapir",
        price: 50,
        img: "https://th.bing.com/th/id/R.422d88ed33afff59dd4335534d9e5d96?rik=CYBya9UyEbnjog&pid=ImgRaw&r=0",
        alt: "",
        inStock: true,
    },
    {
        name: "",
        category: "grass tapir",
        price: 45,
        img: "https://www.worldatlas.com/r/w1200/upload/07/81/69/shutterstock-534346312.jpg",
        alt: "",
        inStock: true,
    },
    {
        name: "",
        category: "baby tapir",
        price: 35,
        img: "https://animals.sandiegozoo.org/sites/default/files/inline-images/tapir_baby_animals.jpg",
        alt: "",
        inStock: true,
    },
    {
        name: "",
        category: "water tapir",
        price: 5,
        img: "https://th.bing.com/th/id/R.b5722c2630fbe139a48024dd01a8aaed?rik=b4TSrEFqVwpfJw&pid=ImgRaw&r=0",
        alt: "",
        inStock: true,
    },
    {
        name: "",
        category: "land tapir",
        price: 10,
        img: "https://th.bing.com/th/id/R.de23c02c473cff5749d5ba12da563451?rik=OeGFz8FrehMo9Q&pid=ImgRaw&r=0",
        alt: "",
        inStock: true,
    },
    {
        name: "",
        category: "land tapir",
        price: 10,
        img: "https://tse2.mm.bing.net/th/id/OIP.mIeYTHwhEXEcb-lRNj-hvAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
        alt: "",
        inStock: true,
    },
    {
        name: "",
        category: "water tapir",
        price: 25,
        img: "",
        alt: "",
        inStock: true,
    },
    {
        name: "",
        category: "water tapir",
        price: 15,
        img: "",
        alt: "",
        inStock: true,
    },
    {
        name: "",
        category: "water tapir",
        price: 5,
        img: "",
        alt: "",
        inStock: true,
    },
    {
        name: "",
        category: "baby tapir",
        price: 25,
        img: "",
        alt: "",
        inStock: true,
    },
    {
        name: "",
        category: "baby tapir",
        price: 20,
        img: "",
        alt: "",
        inStock: true,
    },
    {
        name: "",
        category: "baby tapir",
        price: 30,
        img: "",
        alt: "",
        inStock: true,
    },
    {
        name: "",
        category: "grass tapir",
        price: 45,
        img: "",
        alt: "",
        inStock: true,
    },
    {
        name: "",
        category: "grass tapir",
        price: 50,
        img: "",
        alt: "",
        inStock: true,
    },
]

tapirs.forEach(inject);

const AllBabyTapir = document.getElementById("AllTapirButton")
const ButtonBabyTapir = document.getElementById("BabyTapirButton");
const ButtonGrassTapir = document.getElementById("GrassTapirButton");
const ButtonWaterTapir = document.getElementById("WaterTapirButton");
const ButtonLandTapir = document.getElementById("LandTapirButton");
const container = document.querySelector(".container");

function inject(tapirs){
    const container = document.querySelector(".container")
    container.insertAdjacentHTML("beforeend",
        `<div class="card">
        <img class="img" src="${tapirs.img}"/>
            <div class="bodytext">
                <h1>${tapirs.category}</h1>
            </div>
            <div class="bodytext">
                <h3>$${tapirs.price}</h3>
            </div>
            <button class="button">
                <h2>Add to cart</h2>
            </button>
        </div>`
    );
}

AllBabyTapir.addEventListener("click", function() {
    container.innerHTML = "";
    tapirs.forEach(inject);
});

ButtonBabyTapir.addEventListener("click", function() {
    container.innerHTML = "";
    const babyTapirs = tapirs.filter(tapir => tapir.category === "baby tapir");
  babyTapirs.forEach(tapir => inject(tapir));
});

ButtonGrassTapir.addEventListener("click", function() {
    container.innerHTML = "";
    const grassTapirs = tapirs.filter(tapir => tapir.category === "grass tapir");
  grassTapirs.forEach(tapir => inject(tapir));
});

ButtonWaterTapir.addEventListener("click", function() {
    container.innerHTML = "";
    const waterTapirs = tapirs.filter(tapir => tapir.category === "water tapir");
  waterTapirs.forEach(tapir => inject(tapir));
});

ButtonLandTapir.addEventListener("click", function() {
    container.innerHTML = "";
    const landTapirs = tapirs.filter(tapir => tapir.category === "land tapir");
  landTapirs.forEach(tapir => inject(tapir));
});

function addToCart() {
    const buttons = document.querySelector("button");
    //create array if we need more than forEach
    const btnArray = Array.from(buttons);
    btnArray.forEach((btn) =>  
        btn.addEventListener("click", function (event){
            console.log(event.target.textcontent);
            console.log(event.target.closest(".display-card").getAttribute("data-title")
        })
    };
}