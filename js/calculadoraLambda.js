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

        //Declaracion de arrreglos
        //Por norma un arreglo se pone con const
        //No porque no se peuda mofificar, sino porque
        //al final seuira siendo un arreglo
        //para que no pueda ser cambaido por otra cosa que no sea un arreglo
        const diasSemana=["Lunes","Martes","Miercoles","Jueves","Viernes"];
        console.log(diasSemana);
        console.log(diasSemana[0]);
        console.log(diasSemana[1]);
        console.log(diasSemana[5]);

        diasSemana[5]="sabado";
        console.log(diasSemana[5]);

        //push agrega al final el nuevo elemento
        diasSemana.push("Domingo");
        console.log(diasSemana)

        //el unshift agrega al inicio el nuevo elemento
        diasSemana.unshift("Dias");
        console.log(diasSemana);

        //Los arreglos pueden ser de cualquier tipo de dato no solo string
        const numerosPares=[2,4,6,8,10];
        console.log(numerosPares);

        const numerosImpares=[1,3,5,7,9];
        console.log(numerosImpares);

        const numerosCompletos=numerosPares.concat(numerosImpares);
        console.log(numerosCompletos);


        //No necesariamente es const en el for, puede ser un var o let
        for(const dia of diasSemana){
            console.log(dia);
            if(dia==="Viernes"){
                console.log("Por fin llego el fin de semana");
            }
        }

        if(diasSemana[8]===undefined){
            console.log('No tiene valor');
        } else{
            console.log('Si tiene valor');
        }


        //Manejo de objetos dentro de Javascript
        //Cuando declaramos objetos en javascript utilizamos json
        //Asi se declara un objeto, y este tiene atributos
        //Se declara const por lo mismo que el arreglo, se puede manipular 
        //Pero no se cambia de tipo siemrpe es estudainte es por eso el const

        const estudiante={
            nombre:"Alex",
            apellido:"Andrango",
            edad:24,
            genero:"M",
            ciiudadNacimiento:"Quito"
        }
        console.log(estudiante);
        console.log(estudiante.apellido);
        estudiante.nombre="Gabriel";
        console.log(estudiante);

        const profesor={
            nombre:"Darleen",
            apellido:"Calvachi",
            edad:24,
            genero:"F",
            ciiudadNacimiento:"Zambiza",
            direccion:{
                callePrincipal:"11 de febrero",
                calleSecundaria:"Isidro Ayora",
                numeracion:"N1-130",
                barrio:"Tola alta"
            }
        }
        console.log(profesor);
        console.log(profesor.direccion.barrio);

        profesor.direccion.barrio="La cuestita";
        console.log(profesor.direccion.barrio);

        //Arreglos de objetos
        const estu1={
            nombre:"Guadalupe",
            apellido:"Sandoval"
        }
        
        const estu2={
            nombre:"Jaime",
            apellido:"Tuquerres"
        }

        const estu3={
            nombre:"Maria",
            apellido:"Mullo"
        }

        const estu4={
            nombre:"Bryan",
            apellido:"Paucar"
        }

        const estudiantes=[estu1,estu2,estu3,estu4];
        console.log(estudiantes);
        console.table(estudiantes);

        console.log(estudiantes[1]);
        console.log(estudiantes[1].apellido);

        estudiantes[1].apellido="Cambiar apellido";
        console.table(estudiantes);


        const profesores=[{nombre:"Edison",edad:34},{nombre:"Andrea",edad:32}];
        console.table(profesores);

        //El pop me va eliminando un elemento de la lista, tambien 
        //puede sacarlo en una variable, no necesariamente, puede
        //eliminar simplemente
        var prof=profesores.pop();
        console.log(prof);
        console.table(profesores);


        //-Desestructuracion Arreglos
        const diasSemana2=["Lunes","Martes","Miercoles","Jueves","Viernes"];
        
        //Es un alias los dia1,dia2,dia3
        const [dia1,dia2,dia3,dia4]=diasSemana2;
        console.log(dia2);

        //No quiere decir que cambie mi arreglo el arreglo sigue intacto
        console.table(diasSemana2);

        //En la misma declaracion de le puede desestructurar
        const [d1,d2,d3,d4,d5]=["Lunes-1","Martes-2","Miercoles-3","Jueves-4","Viernes-5"];
        console.log(d2);
        console.log(d5);


        //-Desestrucutracion de objetos
        const vehiculo={
            marca:"Toyota",
            modelo:"Prius",
            anio:2018
        }

        //Cuando desestructuro objetos utilizo corchetes no llaves
        //y aqui no utilizo alias sino los nombres de los atributos del objeto
        //que voy a desastibilizar
        const {marca,anio}=vehiculo;
        console.log(marca);
        console.log(anio);

        const {modelo}={
            marca:"Ford",
            modelo:"Edge",
            anio:2028
        }
        console.log(modelo);

        //Desestructuracion de un objeto tenga un atributo compuesto
        //desestructurar el objeto compuesto

        const persona={
            nombrePersona:"Alex",
            apellidoPersona:"Andarango",
            cedulaPersona:"1727193847",
            direccion:{
                parroquia:"Zambiza",
                barrio:"Tola alta",
                callePrincipal:"Calle Quito",
                calleSecundaria:"Calle Guayaquil"
            }

        }

        //Desestructuracion en dos pasos con un objeto compuesto
        const{nombrePersona,apellidoPersona,cedulaPersona,direccion}=persona;
        console.log(nombrePersona);
        console.log(apellidoPersona);
        console.log(cedulaPersona);
        console.log(direccion);

        const{parroquia,barrio,callePrincipal,calleSecundaria}=direccion;
        console.log(parroquia);
        console.log(barrio);
        console.log(callePrincipal);

        //Desustrucuracion en un paso
        const profesor2={
            nombre2:"Darleen",
            apellido2:"Calvachi",
            edad2:24,
            genero2:"F",
            ciiudadNacimiento2:"Zambiza",
            direccion2:{
                callePrincipal2:"Av Gasca",
                calleSecundaria2:"Isidro Ayora",
                numeracion:"N1-130",
                barrio:"Tola alta"
            }
        }

        const {nombre2,apellido2,direccion2:{callePrincipal2,calleSecundaria2}}=profesor2;
        console.log(callePrincipal2);

    }
