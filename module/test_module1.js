// node执行模块中的代码时会再代码最顶部加上
// function(exports, require, module, __filename, __dirname) {
// 再最底部加上
// }
/* 实际上模块中的代码包装在函数中执行，并再执行时传入五个参数
    exports     用于将变量和函数暴露到外部的对象
    require     用来引入外部模块的函数
    module      当前模块对象
    __filename  当前模块绝对路径
    __dirname   当前模块所在文件夹路径
     */
exports.x = "module1暴露 的 x";

x = 10;
console.log(x);
// console.log(global.x);
// console.log(arguments);
console.log(__filename);
