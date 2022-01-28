let point = {x : 2, y : 3};

let student = {name: "Simone", surname: "Aloia", yob: 1997, married: false};
let student2 = {name: "Alessandro", surname: "Capogreco", yob: 2002, married: false};
let classe = {name: "Programmatore Frontend", students: [student, student2]};
let andrea = {name: "Andrea", surname: "Asioli", "classe di cui è docente": classe};

console.log(andrea.surname);
console.log(andrea["classe di cui è docente"]);

let nomeStudente1 = student.name;
console.log(nomeStudente1);

student2.name = "Pippo";
console.log(student2);

student2.titoloDiStudio = "Diploma di Maturità";
console.log(student2);

for (const key in student2) {
    if (Object.hasOwnProperty.call(student2, key)) {
        const element = student2[key];
        console.log(key + ": " + element);
    }
}

console.log(JSON.stringify(andrea));

let oggettoInStringa = '{"name":"Andrea","surname":"Asioli","classe di cui è docente":{"name":"Programmatore Frontend","students":[{"name":"Simone","surname":"Aloia","yob":1997,"married":false},{"name":"Pippo","surname":"Capogreco","yob":2002,"married":false,"titoloDiStudio":"Diploma di Maturità"}]}}';

let andreaCopy = JSON.parse(oggettoInStringa);

console.log(andreaCopy);

function CalcolaTriangoloRettangolo(catetoMaggiore, catetoMinore, ipotenusa){

    let per= catetoMaggiore + catetoMinore + ipotenusa;
    let ar = (catetoMaggiore * catetoMinore) / 2;

    return {perimetro: per, area: ar};
}

let dimensioniTriangolo = CalcolaTriangoloRettangolo(4, 3, 5);

console.log(dimensioniTriangolo.perimetro + " e l'area: " + dimensioniTriangolo.area);



