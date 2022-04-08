window.onload = function() {
    let symbolArray = ["♠", "♣", "♥", "♦"];
    let numberArray = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

    let iSymbol = Math.floor((Math.random() * (3 - 0 + 1)) + 0);
    let iNumber = Math.floor((Math.random() * (12 - 0 + 1)) + 0);
    console.log(iSymbol);
    console.log(iNumber)

    let divTop = document.querySelector("#divTop");
    let divCenter = document.querySelector("#divCenter");
    let divButtom = document.querySelector("#divButtom");

    // ingreso de numero
    divCenter.innerHTML = numberArray[iNumber];

    //ingreso simbolos
    if (symbolArray[iSymbol] == "♠" || symbolArray[iSymbol] == "♣") {
        divTop.classList.add("blackSymbol")
        divButtom.classList.add("blackSymbol")
        divTop.innerHTML = symbolArray[iSymbol];
        divButtom.innerHTML = symbolArray[iSymbol];
    }
    if (symbolArray[iSymbol] == "♥" || symbolArray[iSymbol] == "♦") {
        divTop.classList.add("redSymbol")
        divButtom.classList.add("redSymbol")
        divTop.innerHTML = symbolArray[iSymbol];
        divButtom.innerHTML = symbolArray[iSymbol];
    }


  };