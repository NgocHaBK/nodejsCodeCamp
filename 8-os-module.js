//modules

// const { items, singlePerson } = require("./6-utils");
// console.log("items: ", items, singlePerson);
// //chỉ cần require thôi là nó tự chạy file bên kia
// require("./7-mind-grenate");

const os = require("os");
//infor about current user

const user = os.userInfo();

//method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
