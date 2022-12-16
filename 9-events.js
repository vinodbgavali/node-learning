const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("res",()=>{
    console.log("this is emiiter on responce");
})


customEmitter.emit("res");