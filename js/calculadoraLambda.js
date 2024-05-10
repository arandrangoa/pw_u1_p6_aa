//nomenclatura con funciones lambda
const sumar=(idNum1,idNum2)=>{
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNum2).value);
    var respuesta=num1+num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;
}

const restar=(idNum1,idNum2)=>{
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNum2).value);
    var respuesta=num1-num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;
}

const multiplicar=(idNum1,idNum2)=>{
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNum2).value);
    var respuesta=num1*num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;
}

const dividir=(idNum1,idNum2)=>{
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNum2).value);
    var respuesta=num1/num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;
}

    function agregarElemento(){
        //innerHtml es para agregar dinamicamente cualquier cosa que sea en html en este caso un botton
        document.getElementById('idDivision').innerHTML="<button>Nuevo</button>";
    }

    function quitarElemento(){
        //innerHtml es para agregar dinamicamente cualquier cosa que sea en html en este caso un botton
        document.getElementById('idDivision').innerHTML="";
    }

    function conceptosJS(){
        /*Tipos de datos en JS*/
        /*let, var, const*/
        /*const: esn un tipo de variable de datos que no van a ser modificados*/
        const IVA=15;
        console.log(IVA)
        /*IVA=15
        console.log(IVA)*/
        /*Esto no se puede hacer devido 
         que es una constante y no se puede reescribir su valor*/

        /*Var ya no se usa mucho porque let adimistra de mejor
         manera el esapcio de memoria */ 
        var nombre="Alex";
        console.log(nombre);
        nombre="Bryan";
        console.log(nombre);

        let apellido="Andrango";
        console.log(apellido);
        apellido="Tuquerres";
        console.log(apellido);
        

    }
