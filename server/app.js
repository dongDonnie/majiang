const socket = require('socket.io');
const loading = require('./loading');
const hallmgr = require('./hallmanager');
const app = socket('8080');
app.on('connection', function (socket) {
    console.log('connected');
    socket.on('welcome', function (data) {
        console.log(data);
        socket.emit('welcome',null);
    })
    socket.on('load', function (data) {
        console.log(data);
        data = JSON.parse(data);
        var cbd = loading.check(data);
        var cbdstr = JSON.stringify(cbd);
        socket.emit('load', cbdstr);
    });
    socket.on('createroom', function (data) {
        console.log(data);
        data = JSON.parse(data);
        var cbd = hallmgr.createroom(data);
        var cbdstr = JSON.stringify(cbd);
        socket.emit('createroom', cbdstr);
    })
});
console.log('a user connected');