let num = 24;
let str = num.toString();
let num2 = 12.238567876544567;

console.log(typeof(num));
console.log(typeof(str));

let ounum = num.toString(2);

for (let i = ounum.length; i<16; i++){
   ounum = "0" + ounum;
}

console.log(ounum);

console.log(num2.toFixed(2));
console.log(Number.isInteger(num));

