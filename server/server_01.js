//1. 加载/导入 http 模块
const http = require("http");
const fs = require("fs");

//2. 创建服务器对象
const server = http.createServer();

//3. 开启服务器
server.listen(3000, () => {
  console.log("Server is running...");
});

//4. 监听浏览器请求并进行处理
//on：该方法用来监听事件
//参数1: 事件类型， request代表浏览器请求事件
//参数2: 当监听到浏览器请求后触发的回调函数，该函数中有两个参数 req和res
//    req（request）: 请求对象
//    res（response）: 响应对象
server.on("request", (req, res) => {
  // end方法能够将数据返回给浏览器，浏览器会显示该字符串
  // res.end('Hello Nodejs');
  // res.end('{"name":"gcm","age":"22"}')
//   let obj = {
//     name: "gcm",
//     age: 22,
//   };
//   console.log(req.url);
//   const url = req.url;
//   fs.readFile('./public'+url, "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.end("404 not found");
//     }

//     res.end(data);
//   });

  //   res.end(JSON.stringify(obj));
});

// 作者：Hani
// 链接：https://juejin.cn/post/6994980351298764808
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
