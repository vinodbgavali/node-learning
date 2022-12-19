const os = require("os");

// console.log(os);
console.log(os.userInfo());
console.log(os.platform());
console.log(os.version());
console.log(`sysyem up time is ${os.uptime/86400} Days `);