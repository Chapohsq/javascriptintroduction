
// let numero= 65;
// console.log("prima assegnazione numero",numero);

// numero=5;
// console.log("seconda assegnazione numero",numero);

// const costante= 12;
// console.log("log costante",costante)
// costante=15;
// console.log( "secondo log costante",costante);

// var numero2=37;
// console.log("log var", numero2);
// numero2=145;
// console.log("log var 2",numero2);

// let pippo= "ciao a tutti";
// console.log("log pippo",pippo);

// pippo="ciao ad alcuni";
// console.log("secondo log pippo", pippo);


// let operazione=5+6;

// console.log("log operazione", operazione);


// if((operazione<10)|| (operazione!==11)){
// console.log("sono passato dall'if")

// }else

// {  
// console.log("non sono passato dall'if")
// console.log("IF")


// }


// let numero2=5;
// if (numero2>0){
// console.log("il numero è positivo");
// }
// else{

//     console.log("il numero è negativo");
// }


// console.log("if")



// let numero3=5;
// if (numero3>0){
// console.log("il numero è positivo");
// }
// else if  (numero3===0){ 

//     console.log("il numero è 0");
// }
// else{

// console.log("il numero è negativo")

// }
// console.log("Else If")



// let numero4= 17;

// if (numero4>=0 ){

//     console.log("maggiore o uguale a 0");

// }else if (numero4>10){

//     console.log("maggiore di 10");
// } else if(numero4>=0){

//     console.log("maggiore o uguale a 0");
// }else{
//     console.log("minore di 9");
// }


// let numero5=4;

// if( numero5 % 2===0){

//     console.log("divisibile per le 2 ");
// }if (numero5 % 3===0){
//     console.log( "divisibile per 3");
// }


// let i= 0;

// while (i<10) { 
//     console.log(i);
//     i=i+1;


// }
// console.log("While")


// let j=0 
// do {
//     console.log(j);
//     j=j+1;
// } while (j>10);

// console.log("Do While")


// for (let k =0 ; k <10; k++) {
//  console.log(k);

// }
// console.log("For")





// for (let triangolo  = '#';  triangolo<7 ; triangolo++) {
//    console.log(triangolo);

// }


// let i = '#'
// while (!(i === '########')) {
//     console.log(i);
//     i = i + '#'

// }

// // CONTROLLO NUMERI DIVISIBILI PER 3 E PER 5
// for (let i = 1; i < 100; i++) {
//     let str = '';
//     if (i % 3 === 0) {
//         str += 'Fritz';
//     } else if (i % 5 === 0) {
//         str += 'Buzz';
//     }
//     console.log(str.length > 0 ? str : i);
// }

// let grid = ``;

// for (let i = 0; i < 8; i++) {
//     for (let j = 0; j < 8; j++) {

// if (i%2===0) {
//     if (j%2===0) {
//         grid+=' ';
//     }else{
// grid+='#';

//     }


//     }if (j%2===0) {
//         grid+='#'
//     } else {
//         grid+=' '
//     }
 
// }
// grid+='\n'
//         console.log(`Linea ${i}, carattere ${j}`);


// console.log(grid);
// }


// scacchiera 8x8

let firstArray = [1, true, "pippo"];

console.log(firstArray);

let secondArray = ["pippo", "pluto", "paperino"];

console.log(secondArray.length);

for (let i = 0; i < secondArray.length; i++) {
    const element = secondArray[i];
    console.log(element);
    
}

for (const element of secondArray) {
    console.log(element);
}

// LIFO
secondArray.push("topolino");

console.log(secondArray);

let ultimoElemento = secondArray.pop();

console.log(secondArray);
console.log(ultimoElemento);

// FIFO
let primoElemento = secondArray.shift();
console.log(secondArray);
console.log(primoElemento);

secondArray.unshift("paperone");
console.log(secondArray);

console.log(secondArray[1]);

secondArray[1] = "paperina";
console.log(secondArray);

//

let thirdArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let subArray = thirdArray.slice(2, 5);

// console.log(subArray);
// console.log(thirdArray);

// let spliceArray = thirdArray.splice(2, 3, 12, 13, 14);

// console.log(spliceArray);
// console.log(thirdArray);

let numeroPiuGrande = Math.max(-5, -10, -2);
console.log(numeroPiuGrande);

let numeroPiuGrandeArray = Math.max(...thirdArray);
console.log(numeroPiuGrandeArray);

function StringPiuLunga(...stringhe){

    let str = "";

    for (let i = 0; i < stringhe.length; i++) {
        const element = stringhe[i];
        if (str.length < element.length) {
            str = element;
        }
    }

    return str;
}

console.log(StringPiuLunga("pippo", "pluto", "topolino"));
