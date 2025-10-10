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
