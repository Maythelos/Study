var obj = {
    a: 1,
    b: 2,
    c: 3
}
let {c,b} = obj;
let {a:A} = obj;//先获取到 a 然后将自身更名为 A

console.log("c:",c);
console.log("b:",b);
console.log("A:",A);

console.log(obj);


//数组的解构赋值必须一一对应  但对象只要键名对应即可
