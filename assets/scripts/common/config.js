var Utils = require('Utils');
// import global from './global';
cc.Class({
    extends: cc.Component,

    properties: {
        // namelabel: cc.EditBox,
        // passwordlabel: cc.EditBox,
    },

    onLoad: function () {
        cc.Url = "http://localhost:8080";
        cc.socket = io(cc.Url);
        cc.Utils = Utils;
    },

    start: function () {
        cc.socket.emit('welcome', 'connect');
        cc.socket.on('welcome', function (data) {
            cc.log("连网成功");
            cc.director.loadScene('loading');
        })
    },
});