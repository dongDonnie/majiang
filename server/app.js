const socket = require("socket.io");
const app = socket("8080");
app.on("connection", function (socket) {
    console.log("connected");
    socket.emit("welcome", "welcome to connected me");
    socket.on("login", function (data) {
        console.log(data);
    });
});
console.log("a user connected");