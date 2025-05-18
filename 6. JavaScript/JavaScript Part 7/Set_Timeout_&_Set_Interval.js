let id = setInterval(() => {
    console.log("Hello World!");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clearInterval worked!!");
}, 10000);