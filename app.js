
   /*  function mostrarHola () {
        console.log("¡Hola, Mundo!");
    }

    function mostrarHolaUsuario(nombre) {
        console.log(`¡Hola, ${nombre}!`);
    }

    mostrarHolaUsuario("Alicia");

    function calcularDoble(numero) {
        return numero *2;
    }

    let resultadoDoble = calcularDoble(4);
    console.log(resultadoDoble);

    function calcularPromedio(numero1, numero2, numero3) {
        return (numero1 + numero2 + numero3) / 3;
    }

    let promedio = calcularPromedio(6, 4, 10);
    console.log(promedio);

    function evaluarMayor(numero1, numero2) {
        return numero1 > numero2 ? numero1 : numero2;
    }

    let numeroMayor = evaluarMayor(24, 6);
    console.log(numeroMayor);

    function multiplicarNumero(numero) {
        return numero * numero;
    }

    let numeroMultiplicado = multiplicarNumero(24);
    console.log(numeroMultiplicado); */


 /*    function calcularPromedio(nota1, nota2, nota3, nota4) {
        let promedio = (nota1 + nota2 + nota3 + nota4) /4
        return promedio;
    }
    
    function verificarAprobacion(promedio) {
        return promedio >= 5 ? 'Aprobado' : 'Reprobado';
    }
     */

    //ARRAY

    
   /*  let listaGenerica = [];

    let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

    lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

    function listaLenguajeDeProgramacion() {
        for (let i = 0; i < lenguajesDeProgramacion.length; i++){

        }
            console.log(lenguajesDeProgramacion[i]);
    }    

    listaLenguajeDeProgramacion();


    function mostrarReversoLenguajes() {
        for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--)
            console.log(lenguajesDeProgramacion[i]);
    } 


mostrarReversoLenguajes();    

   function calcularMedia(lista) {
    let suma = 0;
    for ( i = 0; i > lista.length; i++){
        suma += lista[i]; 
    }
        return suma/ lista.length;

   }

   let numeros = [10, 20, 30, 40];
   let media = calcularMedia(numeros);

   console.log('Média:', media);


   function encontrarMayorMenor (lista) {
    let mayor = lista[0];
    let menor = lista[0];

    for (let i =1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    console.log('Mator:', mayor);
    console.log('Menor:', menor);
    }

    let numeros = [24, 42, 12, 33];
    encontrarMayorMenor(numeros);


    function sumaDeLosNumeros(lista) {
        let suma = 0;
        for (i = 0; i < lista.length; i++) {
            suma += lista[i];
        }
        return suma;
    }

    let numeros = [12, 24, 33, 8];
    let suma = sumaDeLosNumeros(numeros);
    console.log('Suma:', suma);

    function separarNumerosDeLista(lista, elemento) {
        
        for (let i = 0; i < lista.length; i++) {
            if (lista[i] === elemento) {
                return i;
            }
        }
        return -1;
    } */
    

    let numeroSecreto = 10;
    let intentos = 1;
    let listaNumerosSorteados = [];
    let numeroMaximo = 10;

    function asignarTextoElemento(elemento, texto) {
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
    }
    function verificarIntento() {
        let numeroDeUsario = parseInt(document.getElementById('valorUsuario').value);

        if (numeroDeUsario === numeroSecreto) {
            asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            //El usuario no acertó.
            if (numeroDeUsario > numeroSecreto) {
                asignarTextoElemento('p','El número secreto es menor');
            } else {
                asignarTextoElemento('p','El número secreto es mayor');
            }
            intentos++;
            limpiarCaja();
        }
        return;
    }

    function generarNumeroSecreto() {
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        
            console.log(numeroGenerado);
            console.log(listaNumerosSorteados);
        // Si ya sorteamos todos los numeros
        if (listaNumerosSorteados.length == numeroMaximo) {
                asignarTextoElemento('p','Ya se sortearon todos los números posibles');
            } else {           
            // Si el numero enerado esta incluido en la lista
            if (listaNumerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();
            } else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }    
    }

    function limpiarCaja() {
        document.querySelector('#valorUsuario').value = '';
        
    }

    function condicionesIniciales() {
        asignarTextoElemento('h1','Juego del número secreto!');
        asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
        numeroSecreto = generarNumeroSecreto();
        intentos = 1;
    }

    function reiniciarJuego() {
        //Limpiar caja
        limpiarCaja();
        //Indicar mensaje de intervalos de números
        
        //Generar el numero aleatorio
        //Inicializar el número de intentos
        condicionesIniciales();
        //Deshabilitar el botón de nuevo juego
        document.querySelector('#reiniciar').setAttribute('disabled','true');
    }

    condicionesIniciales();




