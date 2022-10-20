//1
let result = "";
for (let n = 10; n <=19; n+=1) {
    result = `${result} ${n},`
}
const lastNum = 20;
console.log(result + lastNum);

//2

let result = "";
for (let a = 10; a <=20; a+=1) {
    result = `${result} ${a**2}`;
}
console.log(result);

//3

let mult = "";
for (let b = 1; b <=10; b+=1) {
    let num = 7;
    mult = `${mult} ${b}*${num} = ${num*b}\n`;
}
console.log(mult);

//4

let sum = "";
for (let c = 0; c <=15; c+=1) {
    sum = `${+sum + +c}`;
}
console.log(sum);

//5

let product = 1;
for (let d = 15; d <=35; d+=1) {
    product *=d;
}

console.log(product);

//6

let average = 0;
for (let e = 1; e <=500; e+=1) {
    average += e / 500;
}
console.log(average);

//7

let sumEven = "";
for (let f = 30; f <=80; f+=2) {
    sumEven = `${+sumEven + +f}`;
}
console.log(sumEven);

//8

let num3 = '';
for (let g = 100; g <= 200; g += 1) {
    if (g % 3 === 0) {
        num3 =`${num3} ${g}`;
    }
}
console.log(num3);

//9

let i = "";
let num = +prompt('Enter the number');
for (let j = 1; j <= num; j ++) {
        if (num % j === 0) {
            i = `${i} ${j}`
    }
}

console.log(i);

//10

let i = "";
let num = +prompt('Enter the number');
for (let j = 1; j <= num; j ++) {
    if (num % j === 0) {
        if (j % 2 ===0) {
        i = `${+i + +j}`
        }
    }
}

console.log(i);

//11

let table = "";
for (let k = 1; k <=10; k+=1) {
    for (let l = 1; l<=10; l+=1){
        table = `${table} ${k}*${l} = ${k*l}\n`;
    }
}
console.log(table);


