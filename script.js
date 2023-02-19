const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function btnEncriptar(){
    const txtEncriptado = encriptar(textArea.value);
    mensaje.value = txtEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const txtDesencriptado = desencriptar(textArea.value);
    mensaje.value = txtDesencriptado;
    textArea.value="";
    mensaje.style.backgroundImage = "none";
}

function encriptar(strEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    strEncriptado = strEncriptado.toLowerCase();

    for(let i = 0; i<matrizCodigo.length; i++){
        if(strEncriptado.includes(matrizCodigo[i][0])){
            strEncriptado=strEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return strEncriptado;
}

function desencriptar(strDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    strDesencriptado = strDesencriptado.toLowerCase();

    for(let i = 0; i<matrizCodigo.length; i++){
        if(strDesencriptado.includes(matrizCodigo[i][1])){
            strDesencriptado=strDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return strDesencriptado;
}
//console.table(matrizCodigo);
