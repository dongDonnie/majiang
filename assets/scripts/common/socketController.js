// var SockerController = function () {
//     var _socket = null;

//     that.init = function () {
//         _socket = io();
//         _socket.on('notify', function (data) {
//             console.log('notify = ' + JSON.stringify(data));
//             let msg = data.msg;
//             _event.fire(msg, data.data);
//             let callBackIndex = data.callBackIndex;
//             let cb = _callBackMap[callBackIndex];
//             if (cb) {
//                 console.log('回调');
//                 if (data.data.err) {
//                     cb(data.data.err);

//                 } else {
//                     cb(null, data.data);

//                 }
//             }
//         });
//     };
// }()