const http = require("http");
const url = require("url");
const queryString = require("querystring");

const server = http.createServer((req, res) => {
  // let pathname = url.parse(req.url).pathname;
  // if (pathname === "/login/username" && req.method === "POST") {
  //     let chunk = "";
  //     req.on("data", data => chunk += data);
  //     req.on("end", () => {
  //         console.log(chunk);
  //         let data = JSON.parse(chunk);
  //         if (data.username === "dengpengfei") {
  //             res.end(JSON.stringify({ err: false, src: "../resources/test.jpg" }))
  //
  //         } else {
  //             res.end(JSON.stringify({ err: true }))
  //         }
  //     })
  // }
  // if (pathname === "/login/password" && req.method === "POST") {
  //     let chunk = "";
  //     req.on("data", data => chunk += data);
  //     req.on("end", () => {
  //         console.log(chunk);
  //         let data = JSON.parse(chunk);
  //         if (data.password === "123456") {
  //             res.end(JSON.stringify({ err: false }))
  //
  //         } else {
  //             res.end(JSON.stringify({ err: true }))
  //         }
  //     })
  // }
  if (req.method === "POST") {
    let chunk = "";
    req.on("data", data => chunk += data);
    req.on("end", () => {
      console.log(chunk);
      let data = JSON.parse(chunk);
      res.end(JSON.stringify({ data }))
    });
  }
});

server.listen(3000, err => console.log(err || "listen in 3000"));
/*
let mock = [
  {
    beforeProcess: '#P-5852-27',
    chargeOf: '#S-1010-1',
    description: 'inspect screen',
    id: '#P-3959-28',
    machine: '#M-2304-14',
    name: '#P-3959-28.inspect',
    time: 5,
    workpiece: '#W-5829-8'
  },
  {
    beforeProcess: '#P-7792-26',
    chargeOf: '#S-1010-1',
    description: 'build up screen',
    id: '#P-5852-27',
    machine: '#M-671-13',
    name: '#P-5852-27.build up',
    time: 11,
    workpiece: '#W-5829-8'
  },
  {
    beforeProcess: 'Self',
    chargeOf: '#S-1111-3',
    description: 'produce battery',
    id: '#P-6810-29',
    machine: '#M-671-13',
    name: '#P-6810-29.produce',
    time: 5,
    workpiece: '#W-554-9'
  },
  {
    beforeProcess: '#P-6810-29',
    chargeOf: '#S-1111-3',
    description: 'inspect battery',
    id: '#P-8883-30',
    machine: '#M-3836-15',
    name: '#P-8883-30.inspect',
    time: 10,
    workpiece: '#W-554-9'
  }
];
const reshapeData = (dataSource = mock) => {
  let result = {};
  let processSet = new Set(dataSource.map(v => v.id));
  dataSource.forEach(data => {
    let { workpiece, id: process, machine, time, beforeProcess: order } = data;
    if (order === "Self" || !processSet.has(order)) order = 0;
    result[workpiece] ? result[workpiece][process] = { machine, time, order } : result[workpiece] = {
      [process]: { machine, time, order }
    };
  });
  /**
   * {
   *   b: {before: a},
   *   a: {before: self},
   *   c: {before: b}
   * }
   */
/**
 * {
 *   1: b,
 *   0: a,
 *   b: c
 * }
 */
/*
Object.keys(result).forEach(workpiece => {
  let reverseIndex = {};
  let processNumber = Object.keys(result[workpiece]).length;
  Object.keys(result[workpiece]).forEach(process => {
    let order = result[workpiece][process].order;
    reverseIndex[order] = process;
  });
  let currentOrder = 1;
  while (currentOrder < processNumber) {
    result[workpiece][reverseIndex[reverseIndex[currentOrder - 1]]].order = currentOrder;
    reverseIndex[currentOrder] = reverseIndex[reverseIndex[currentOrder - 1]];
    currentOrder ++;
  }
  // result[k][reverseIndex[reverseIndex[0]]].order = 1;
});
return result;
};

console.log(reshapeData());*/