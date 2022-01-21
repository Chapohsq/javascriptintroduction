// function divideByTwo(number) {
//     let result = number / 2
//     return result;



// }
// console.log(divideByTwo);


// // divideByTwo(8);

// // divideByTwo(16);

// // divideByTwo(10);





// let capitalize=function(myString){
// return myString.toUpperCase();

// }
// console.log(capitalize ('pippo'));
// let multiplyByTwo= (myNumber)

//     function multiplyBy2(myNumber) {
//         let result=myNumber*2
//         return result;
//     }
//     let double= multiplyBy2;
//     console.log(double(20));



// let pippo=8;

// function scriviPippo(){

//     let pippo='pippo'
// console.log(pippo)
// }
// scriviPippo();

// console.log(pippo);

// function multiplyBy4(firstNumber){
//     function multiplyBy2(secondNumber){
//     return secondNumber*2;
    
//     }

//     let result=multiplyBy2(firstNumber)*2;
//     return result;
// }
// multiplyBy4(5);





// function fibonacci(number) {
//     if (number===0) {
//         return 0;
//     }if (numver===1) {
//         return 1;
//     }
//     return fibonacci(number-1)+fibonacci(number-2);
// }
// console.log(fibonacci(100));



// function applicafunzioneSuNumero(mioNumero,funzioneDaApplicare) {
//     return funzioneDaApplicare(mioNumero)
    
// }

// function DividiPer2(numero2) {
//     return numero/2;
// }

// function DividiPer3(numero3){

// return numero/3;

// }


// let res1=applicafunzioneSuNumero(8,DividiPer2);
// console.log(res1);



// let res2=applicafunzioneSuNumero(8,DividiPer3);
// console.log(res2);





// function min(firstNumber, secondNumber) {
// if (firstNumber>secondNumber) {
//     console.log(secondNumber);
// } else {
//     console.log(firstNumber);
// }
// }

// console.log(min(5,3));



// let num1=1;
// let num2=5;
// if (num1<num2) {
//     console.log(num1)
    
// }else {
// console.log(num2)

// }

/*function isEven(number) {
    
}

let numero = 10;

function isEven(numero) {
  if (numero == 0)
    return true;
  else if (numero == 1)
    return false;
  else if (numero < 0)
    return isEven(-numero - 2);
  else
    return isEven(numero - 2);
}

console.log(isEven(numero));
*/
/*
let carattere = "B";
let stringa = "";
let occorrenze = 0;

function countBs(string){ //occorrenze lettera B, dovrebbe uscire 2, non-case sensitive
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "B") {
          occorrenze += 1;
        }
      }
      return occorrenze;
}
console.log("Le occorrenze della lettera B nella parola sono " + countBs("BBC"));



let carattere1 = "k";
let stringa1 = "";
let occorrenze1 = 0;


function countChar(string1, carattere1, caseSensitive){ //occorrenze lettera K, dovrebbe uscire 4, non-case sensitive
    if (!caseSensitive){
        for (let j = 0; j < string1.length; j++) {
            if (string1[j].toLowerCase() === carattere1.toLowerCase()) {
            occorrenze1 += 1;
            }
        }
        return occorrenze1;
    } else if (caseSensitive){
        for (let j = 0; j < string1.length; j++) {
            if (string1[j] === carattere1) {
            occorrenze1 += 1;
            }
        }
        return occorrenze1;
    }
}
console.log("Le occorrenze della lettera B nella parola sono " + countChar("kakkerlak", "K", true));
*/

//Funzione non ricorsiva che scrive i primi 100 numeri

function fibonacciNonRicorsivo (number){
    let i = 0,
        j = 1,
        k;
    while (i < number) {
        console.log(i);
        k = i + j;
        i = j;
        j = k;
    }
}

fibonacciNonRicorsivo(100);

//Fibonacci non ricorsivo senza numero specifico (data la posizione restituisci numero)

function fibonacciNonRicorsivo (number){
    let indice = 0,
        indice2 = 1,
        posizione = 0,
        indice3;
    do {
        posizione++;
        indice3 = indice + indice2;
        indice = indice2;
        indice2 = indice3;
    } while (indice < number);
    return pos;
}

console.log(fibonacciNonRicorsivo(100));

//Funzione (ricorsiva o meno) che dato un numero mi individui la sua posizione nella successione di Fibonacci, se non c'è numero undefined
//Funzione ricorsiva fattoriale