var [a,b,c] = [1,2,3];
//上述形式就是解构赋值
console.log("a:",a);
console.log("b:",b);
console.log("c:",c);
// ========================================================
var arr = [1,2,3];
var [a,b,c='default',d='default']= arr;
console.log("c:",c);
console.log("d:",d);//默认值是default 会被覆盖
//...用于将除了前面被占用的如 a 占用了1  之外将剩余的值赋给...后的变量 此结果是c:array[2,3]
