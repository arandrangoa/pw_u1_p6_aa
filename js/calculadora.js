function sumar(idNum1,idNum2){
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNum2).value);
    var respuesta=num1+num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;

}

function restar(idNum1,idNume2){
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNume2).value);
    var respuesta=num1-num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;

}

function multiplicar(idNum1,idNume2){
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNume2).value);
    var respuesta=num1*num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;

}

function dividir(idNum1,idNume2){
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNume2).value);
    var respuesta=num1/num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;

}



function sumar2(){
    var num1=document.getElementById("idNumero1").value;
    var num2=document.getElementById("idNumero2").value;

}

//Si yo tengo muchas pagins web donde voya sumar numeros el primero me sirve 
//Si una funcion va a ser utilizada en una sola pagina, se debe hacer como el segundo metodo 