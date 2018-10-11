// 变量let命令

let b = 2;
if (true) {
    let a = 1;
    console.log("b:",b);
};

//console.log("a:",a);

let the_let = "let命令声明的变量 作用域严谨，其只作用于所处代码段内,或其子域内 如上面例子";
    the_let +="在if代码段外声明的 b 可以在if中获取到，而在if中声明的a 却无法在外面获取到";

var a = 1;
function funa() {
    if(false) {
        var a = 1;
    }
    the_let += "这种情况下会出现一个hin神奇的事情————下面console的a竟然是个未定义？！";
    console.log("a:",a);
}

funa();

    the_let += "var 的作用域很迷，但是其目的是为了修正一些便宜之处，但也带来了诸如上述这种奇葩的问题，故此let可以很明确的指引开发者作用域的问题";

// 常量const命令

const LOVE_YOU = true;
//常量可以指向指针,即常量指向一个对象时 虽然常量不可以再修改了 但是可以修改那个对象的属性，以达到目的

let love = {you: 1,me: 2};

const LOVE_ME = love

console.log(LOVE_ME);
love.me = 1;
console.log(LOVE_ME);
