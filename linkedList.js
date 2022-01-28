

let firstElement = { value: 5, nextElement: null, previousElement: null }

let secondElement = { value: 9, nextElement: null, previousElement: firstElement }
firstElement.nextElement = secondElement;

let thirdElement = { value: 8, nextElement: null, previousElement: secondElement }
secondElement.nextElement = thirdElement;


let fourthElement = { value: 2, nextElement: null, previousElement: secondElement }
thirdElement.nextElement = fourthElement;

let node = firstElement;

// while (true) {
//     console.log(node.value);
// }if (node.nextElement !== null) {  QUESTO è LA STESSA COSA DEL CICLO SOTTO
//     node = node.nextElement;
// }else{
//     break;
// }



while (node !== null) {
    console.log(node.value);
    node = node.nextElement;
}

// for (let node = 0; node < node !== null; node = node.nextElement) {
//   console.log(node);   QUESTO è LA STESSA COSA DEL CICLO SOPRA

// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let el1 = { value: "pippo", rest: null }

let el2 = { value: "pluto", rest: el1 }

let el3 = { value: "paperino", rest: el2 }

console.log(el3);

let ela = { value: "paperone", rest: el3 }

let elb = { value: "paperoga", rest: el3 }

console.log("ela", ela);
console.log("elb", elb);




let myArray = [7, 8, 12, 5]

function arrayToLinkedList(array) {

    let firstNode = null;

    for (let i = array.length - 1; i >= 0; i--) {
        // const value = array[i];
// let rest;
//         if (firstNode === null) {
//          rest = null;   
//         }else{
//            rest = firstNode;
//         }

        let node = { value: array[i], rest: firstNode }
firstNode = node;

    }
    return firstNode;


}
console.log(arrayToLinkedList(myArray));






// function linkedListToArray(listNode) {
//     // let node = listNode;
//     // let array = [];
//     // while (node != null) {
//     //     array.push(node.value)
//     // node = node.rest;
//     // }

//     let node = {value: array [i], rest: firstNode};
//     firstNode = node;
// }
//     return array;


// function prepend(value, listNode) {
//     let node = {value: array[i], rest:listNode}
//     return node;
// }
// console.log(linkedListToArray(elb));


function nth(listNode, index) {
    let node = listNode;
    let actualIndex;
    while (node != null) {
if (actualIndex === index) {
    return node.values;
}
node = node.rest;
actualIndex++;
    }
        return undefined
    }
    console.log(LinkedListArray);
console.log(nth(elc,2));