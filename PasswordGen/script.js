function generatePass(){

    let passLength = parseInt(document.getElementById("passLength").value);
    let ucBox = document.getElementById("uc");
    let ucBool = ucBox.checked;

    let lcBox = document.getElementById("lc");
    let lcBool = lcBox.checked;

    let digBox = document.getElementById("digits");
    let digBool = digBox.checked;

    let specBox = document.getElementById("specialChar");
    let specBool = specBox.checked;


    let uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lc = "abcdefghijklmnopqrstuvwxyz";
    let dig = "0123456789";
    let specialChar = "`~!@#$%^&*()-_=+}]{[;:,<>.?"
    let parameter = "";
    let result = "";

    if (ucBool == true){
        parameter += uc;
    }
    if (lcBool == true){
        parameter += lc;
    }
    if (digBool == true){
        parameter += dig;
    }
    if (specBool == true){
        parameter += specialChar;
    }

    for(let i=0; i<passLength; i++){
        result += parameter.charAt(getRandomInt(parameter.length+1));
    }
    document.getElementById("output").value = result;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//
//

